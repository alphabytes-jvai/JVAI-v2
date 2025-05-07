"use client"

import { useEffect, useRef } from "react"

export default function AnimatedCircles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create circles
    const circlesArray: Circle[] = []
    const numberOfCircles = 15

    class Circle {
      x: number
      y: number
      radius: number
      color: string
      velocity: { x: number; y: number }
      opacity: number
      growing: boolean

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 60 + 20
        this.color = "#3B82F6"
        this.velocity = {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
        }
        this.opacity = Math.random() * 0.08 + 0.02
        this.growing = Math.random() > 0.5
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.strokeStyle = `rgba(59, 130, 246, ${this.opacity})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      update() {
        // Move the circle
        this.x += this.velocity.x
        this.y += this.velocity.y

        // Bounce off edges
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.velocity.x = -this.velocity.x
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.velocity.y = -this.velocity.y
        }

        // Pulse the circles (grow and shrink)
        if (this.growing) {
          this.radius += 0.2
          if (this.radius > 100) {
            this.growing = false
          }
        } else {
          this.radius -= 0.2
          if (this.radius < 20) {
            this.growing = true
          }
        }

        this.draw()
      }
    }

    function init() {
      for (let i = 0; i < numberOfCircles; i++) {
        circlesArray.push(new Circle())
      }
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      circlesArray.forEach((circle) => {
        circle.update()
      })
    }

    init()
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}
