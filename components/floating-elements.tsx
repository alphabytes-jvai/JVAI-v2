"use client"

import { useEffect, useRef } from "react"
import ParticleBackground from "./particle-background"

const FloatingElements = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let elements: FloatingElement[] = []

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Floating element class
    class FloatingElement {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      type: "circle" | "square" | "triangle"
      rotation: number
      rotationSpeed: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 20 + 5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.type = ["circle", "square", "triangle"][Math.floor(Math.random() * 3)] as any
        this.rotation = 0
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
        // this.color = `rgba(0, 67, 248, ${Math.random() * 0.1 + 0.05})`
        this.color = `rgba(0, 57, 200, 0.4)`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed

        if (this.x > canvas.width + this.size) this.x = -this.size
        else if (this.x < -this.size) this.x = canvas.width + this.size

        if (this.y > canvas.height + this.size) this.y = -this.size
        else if (this.y < -this.size) this.y = canvas.height + this.size
      }

      draw() {
        if (!ctx) return
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.fillStyle = this.color

        if (this.type === "circle") {
          ctx.beginPath()
          ctx.arc(0, 0, this.size, 0, Math.PI * 2)
          ctx.fill()
        } else if (this.type === "square") {
          ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
        } else if (this.type === "triangle") {
          ctx.beginPath()
          ctx.moveTo(0, -this.size / 2)
          ctx.lineTo(-this.size / 2, this.size / 2)
          ctx.lineTo(this.size / 2, this.size / 2)
          ctx.closePath()
          ctx.fill()
        }

        ctx.restore()
      }
    }

    // Initialize elements
    const init = () => {
      elements = []
      const elementCount = Math.min(30, Math.floor((canvas.width * canvas.height) / 30000))

      for (let i = 0; i < elementCount; i++) {
        elements.push(new FloatingElement())
      }
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw elements
      for (let i = 0; i < elements.length; i++) {
        elements[i].update()
        elements[i].draw()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0" style={{ zIndex: 0 }} />
}

export default FloatingElements
