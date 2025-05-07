"use client"

import { useEffect, useRef } from "react"

export default function FeatureAnimation() {
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

    // Create data visualization
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const maxRadius = Math.min(canvas.width, canvas.height) * 0.4

    // Data points for radar chart
    const categories = ["NLP", "Vision", "Learning", "Prediction", "Automation", "Security"]
    const dataPoints = [0.85, 0.92, 0.78, 0.88, 0.95, 0.82]
    const targetDataPoints = [0.85, 0.92, 0.78, 0.88, 0.95, 0.82]
    const currentDataPoints = [0, 0, 0, 0, 0, 0]

    // Animation properties
    let rotation = 0
    const hue = 210 // Blue hue

    // Floating particles
    const particles: Particle[] = []
    const numParticles = 50

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = `hsla(${hue}, 100%, 60%, ${Math.random() * 0.3 + 0.1})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle())
    }

    // Draw radar chart
    function drawRadarChart() {
      const numPoints = categories.length
      const angleStep = (Math.PI * 2) / numPoints

      // Update current data points (animation)
      for (let i = 0; i < numPoints; i++) {
        if (currentDataPoints[i] < targetDataPoints[i]) {
          currentDataPoints[i] += 0.005
          if (currentDataPoints[i] > targetDataPoints[i]) {
            currentDataPoints[i] = targetDataPoints[i]
          }
        }
      }

      // Draw axis lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 1

      for (let i = 0; i < numPoints; i++) {
        const angle = i * angleStep + rotation
        const x = centerX + Math.cos(angle) * maxRadius
        const y = centerY + Math.sin(angle) * maxRadius

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.stroke()
      }

      // Draw concentric circles
      const numCircles = 4
      for (let i = 1; i <= numCircles; i++) {
        const radius = (maxRadius / numCircles) * i
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Draw data polygon
      ctx.strokeStyle = "rgba(59, 130, 246, 0.8)"
      ctx.fillStyle = "rgba(59, 130, 246, 0.2)"
      ctx.lineWidth = 2
      ctx.beginPath()

      for (let i = 0; i < numPoints; i++) {
        const angle = i * angleStep + rotation
        const value = currentDataPoints[i]
        const x = centerX + Math.cos(angle) * maxRadius * value
        const y = centerY + Math.sin(angle) * maxRadius * value

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.closePath()
      ctx.stroke()
      ctx.fill()

      // Draw data points
      for (let i = 0; i < numPoints; i++) {
        const angle = i * angleStep + rotation
        const value = currentDataPoints[i]
        const x = centerX + Math.cos(angle) * maxRadius * value
        const y = centerY + Math.sin(angle) * maxRadius * value

        // Glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 10)
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)")
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, 10, 0, Math.PI * 2)
        ctx.fill()

        // Solid point
        ctx.fillStyle = "rgba(59, 130, 246, 1)"
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()

        // Draw category labels
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
        ctx.font = "12px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"

        const labelX = centerX + Math.cos(angle) * (maxRadius + 20)
        const labelY = centerY + Math.sin(angle) * (maxRadius + 20)

        ctx.fillText(categories[i], labelX, labelY)

        // Draw percentage near data points
        const percentX = centerX + Math.cos(angle) * (maxRadius * value - 15)
        const percentY = centerY + Math.sin(angle) * (maxRadius * value - 15)

        ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
        ctx.font = "bold 12px Arial"
        ctx.fillText(`${Math.round(currentDataPoints[i] * 100)}%`, x, y - 15)
      }

      // Draw center circle
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 20)
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)")
      gradient.addColorStop(1, "rgba(59, 130, 246, 0.1)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, 20, 0, Math.PI * 2)
      ctx.fill()
    }

    // Draw circular data flow
    function drawDataFlow() {
      const numFlowPoints = 8
      const flowRadius = maxRadius * 1.2

      for (let i = 0; i < numFlowPoints; i++) {
        const angle = (i / numFlowPoints) * Math.PI * 2 + rotation * 2
        const x = centerX + Math.cos(angle) * flowRadius
        const y = centerY + Math.sin(angle) * flowRadius

        // Draw flow point
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 15)
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)")
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, 15, 0, Math.PI * 2)
        ctx.fill()

        // Draw flow lines
        const nextIndex = (i + 1) % numFlowPoints
        const nextAngle = (nextIndex / numFlowPoints) * Math.PI * 2 + rotation * 2
        const nextX = centerX + Math.cos(nextAngle) * flowRadius
        const nextY = centerY + Math.sin(nextAngle) * flowRadius

        // Create gradient for flow line
        const lineGradient = ctx.createLinearGradient(x, y, nextX, nextY)
        lineGradient.addColorStop(0, "rgba(59, 130, 246, 0.8)")
        lineGradient.addColorStop(1, "rgba(59, 130, 246, 0.2)")

        ctx.strokeStyle = lineGradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(x, y)

        // Create a curved line
        const controlX = centerX + Math.cos((angle + nextAngle) / 2) * (flowRadius * 1.2)
        const controlY = centerY + Math.sin((angle + nextAngle) / 2) * (flowRadius * 1.2)

        ctx.quadraticCurveTo(controlX, controlY, nextX, nextY)
        ctx.stroke()

        // Draw small particles along the flow line
        const numParticles = 5
        for (let j = 0; j < numParticles; j++) {
          const t = j / numParticles + ((rotation * 0.1) % 1)

          // Quadratic bezier formula
          const particleX = (1 - t) * (1 - t) * x + 2 * (1 - t) * t * controlX + t * t * nextX
          const particleY = (1 - t) * (1 - t) * y + 2 * (1 - t) * t * controlY + t * t * nextY

          ctx.fillStyle = "rgba(59, 130, 246, 0.8)"
          ctx.beginPath()
          ctx.arc(particleX, particleY, 2, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Slowly rotate the visualization
      rotation += 0.001

      // Draw visualizations
      drawRadarChart()
      drawDataFlow()

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full " />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-blue-500 font-bold text-xl">AI Capabilities</div>
      </div>
    </>
  )
}
