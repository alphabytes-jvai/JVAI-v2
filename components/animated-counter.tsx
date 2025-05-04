"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
}

const AnimatedCounter = ({ value, label, suffix = "", prefix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000 // 2 seconds
      const increment = value / (duration / 16) // 60fps

      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-3xl md:text-4xl font-bold text-[#0043f8]">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-gray-400 mt-1">{label}</div>
    </motion.div>
  )
}

export default AnimatedCounter
