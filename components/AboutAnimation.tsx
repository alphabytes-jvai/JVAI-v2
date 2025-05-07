"use client"

import { useEffect, useRef } from "react"

export default function AboutAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create a 3D-like data visualization
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const maxRadius = Math.min(canvas.width, canvas.height) * 0.35

    // Create particles
    const particles: Particle[] = []
    const connections: Connection[] = []
    const numParticles = 100
    const connectionDistance = 100
    const hue = 210 // Blue hue

    interface Connection {
      from: number
      to: number
      life: number
      maxLife: number
    }

    class Particle {
      x: number
      y: number
      z: number
      size: number
      baseSize: number
      speed: number
      color: string
      opacity: number
      angle: number
      distance: number

      constructor() {
        // Use spherical coordinates for more realistic 3D effect
        this.angle = Math.random() * Math.PI * 2
        this.distance = Math.random() * maxRadius
        this.z = Math.random() * 2 - 1 // z between -1 and 1

        // Convert to cartesian coordinates
        this.x = centerX + Math.cos(this.angle) * this.distance * Math.sqrt(1 - this.z * this.z)
        this.y = centerY + Math.sin(this.angle) * this.distance * Math.sqrt(1 - this.z * this.z)

        this.baseSize = Math.random() * 2 + 1
        this.size = this.baseSize
        this.speed = Math.random() * 0.01 + 0.005
        this.color = `hsla(${hue}, 100%, 60%, ${Math.random() * 0.5 + 0.3})`
        this.opacity = Math.random() * 0.5 + 0.3
      }

      update() {
        // Rotate around the center
        this.angle += this.speed

        // Update position
        this.x = centerX + Math.cos(this.angle) * this.distance * Math.sqrt(1 - this.z * this.z)
        this.y = centerY + Math.sin(this.angle) * this.distance * Math.sqrt(1 - this.z * this.z)

        // Pulse size based on position
        this.size = this.baseSize * (1 + Math.sin(Date.now() * 0.003) * 0.3)
      }

      draw() {
        // Size and opacity affected by z position to create depth
        const depthFactor = (this.z + 1) / 2 // Convert z from [-1,1] to [0,1]
        const drawSize = this.size * (0.5 + depthFactor)
        const drawOpacity = this.opacity * depthFactor

        ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${drawOpacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, drawSize, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function init() {
      // Create particles
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle())
      }
    }

    function createConnections() {
      // Clear old connections
      connections.length = 0

      // Create new connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            connections.push({
              from: i,
              to: j,
              life: 100,
              maxLife: 100,
            })
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      // Periodically create new connections
      if (Math.random() < 0.05) {
        createConnections()
      }

      // Update and draw connections
      for (let i = connections.length - 1; i >= 0; i--) {
        const connection = connections[i]
        connection.life--

        if (connection.life <= 0) {
          connections.splice(i, 1)
          continue
        }

        const particle1 = particles[connection.from]
        const particle2 = particles[connection.to]

        // Calculate opacity based on life and z-position
        const lifeOpacity = connection.life / connection.maxLife
        const zFactor = ((particle1.z + 1) / 2 + (particle2.z + 1) / 2) / 2
        const opacity = lifeOpacity * zFactor * 0.5

        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(particle1.x, particle1.y)
        ctx.lineTo(particle2.x, particle2.y)
        ctx.stroke()
      }

      // Draw center sphere
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 30)
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)")
      gradient.addColorStop(1, "rgba(59, 130, 246, 0.1)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, 30, 0, Math.PI * 2)
      ctx.fill()

      requestAnimationFrame(animate)
    }

    init()
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
