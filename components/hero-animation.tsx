"use client"

import { useEffect, useRef } from "react"

const HeroAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let nodes: Node[] = []
    let connections: Connection[] = []

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Node class
    class Node {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      pulseSize: number
      pulseDirection: number
      connections: number[]

      constructor(x?: number, y?: number) {
        this.x = x || Math.random() * canvas.width
        this.y = y || Math.random() * canvas.height
        this.size = Math.random() * 2 + 2
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = `rgba(0, 67, 248, ${Math.random() * 0.5 + 0.3})`
        this.pulseSize = 0
        this.pulseDirection = 1
        this.connections = []
      }

      update() {
        // Update position
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1

        // Pulse effect
        if (this.pulseSize > 20) this.pulseDirection = -1
        else if (this.pulseSize < 0) this.pulseDirection = 1

        this.pulseSize += this.pulseDirection * 0.1
      }

      draw() {
        if (!ctx) return

        // Draw node
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw pulse
        ctx.strokeStyle = `rgba(0, 67, 248, ${0.3 - this.pulseSize / 30})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size + this.pulseSize, 0, Math.PI * 2)
        ctx.stroke()
      }
    }

    // Connection class
    class Connection {
      nodeA: number
      nodeB: number
      life: number
      maxLife: number

      constructor(nodeA: number, nodeB: number) {
        this.nodeA = nodeA
        this.nodeB = nodeB
        this.maxLife = 100 + Math.random() * 150
        this.life = this.maxLife
      }

      update() {
        this.life -= 0.5
      }

      draw() {
        if (!ctx || !nodes[this.nodeA] || !nodes[this.nodeB]) return

        const opacity = (this.life / this.maxLife) * 0.8
        ctx.strokeStyle = `rgba(0, 67, 248, ${opacity})`
        ctx.lineWidth = opacity * 2

        ctx.beginPath()
        ctx.moveTo(nodes[this.nodeA].x, nodes[this.nodeA].y)
        ctx.lineTo(nodes[this.nodeB].x, nodes[this.nodeB].y)
        ctx.stroke()

        // Draw data packet
        if (this.life > 0 && this.life < this.maxLife - 10) {
          const progress = 1 - this.life / this.maxLife
          const packetX = nodes[this.nodeA].x + (nodes[this.nodeB].x - nodes[this.nodeA].x) * progress
          const packetY = nodes[this.nodeA].y + (nodes[this.nodeB].y - nodes[this.nodeA].y) * progress

          ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 1.5})`
          ctx.beginPath()
          ctx.arc(packetX, packetY, 2, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    // Initialize nodes
    const init = () => {
      nodes = []
      connections = []

      // Create nodes
      const nodeCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 20000))
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node())
      }

      // Create initial connections
      createNewConnections(5)
    }

    // Create new connections
    const createNewConnections = (count: number) => {
      for (let i = 0; i < count; i++) {
        const nodeA = Math.floor(Math.random() * nodes.length)
        let nodeB = Math.floor(Math.random() * nodes.length)

        // Ensure we don't connect a node to itself
        while (nodeB === nodeA) {
          nodeB = Math.floor(Math.random() * nodes.length)
        }

        connections.push(new Connection(nodeA, nodeB))

        // Add to node's connection list
        nodes[nodeA].connections.push(connections.length - 1)
        nodes[nodeB].connections.push(connections.length - 1)
      }
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update()
        nodes[i].draw()
      }

      // Update and draw connections
      for (let i = connections.length - 1; i >= 0; i--) {
        connections[i].update()
        connections[i].draw()

        // Remove dead connections
        if (connections[i].life <= 0) {
          connections.splice(i, 1)
        }
      }

      // Randomly create new connections
      if (Math.random() < 0.05 && connections.length < 50) {
        createNewConnections(1)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    // Handle mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      // Find closest node
      let closestNode = -1
      let closestDistance = Number.POSITIVE_INFINITY

      for (let i = 0; i < nodes.length; i++) {
        const dx = mouseX - nodes[i].x
        const dy = mouseY - nodes[i].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < closestDistance) {
          closestDistance = distance
          closestNode = i
        }
      }

      // If mouse is close to a node, create a new connection
      if (closestDistance < 100 && Math.random() < 0.1) {
        let targetNode = Math.floor(Math.random() * nodes.length)
        while (targetNode === closestNode) {
          targetNode = Math.floor(Math.random() * nodes.length)
        }

        connections.push(new Connection(closestNode, targetNode))
      }
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    init()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      canvas.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 bg-black" style={{ zIndex: 0 }} />
}

export default HeroAnimation
