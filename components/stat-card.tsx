"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StatCardProps {
  icon: ReactNode
  value: string
  label: string
  description: string
  bgColor?: string
}

const StatCard = ({ icon, value, label, description, bgColor = "bg-white/5" }: StatCardProps) => {
  return (
    <motion.div
      className={`${bgColor} backdrop-blur-sm rounded-xl p-6 border border-gray-800`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px -10px rgba(0, 67, 248, 0.2)",
        borderColor: "#0043f8",
      }}
    >
      <div className="flex items-start">
        <div className="mr-4">{icon}</div>
        <div>
          <div className="text-3xl font-bold text-white mb-1">{value}</div>
          <div className="text-lg font-medium text-white/80 mb-2">{label}</div>
          <div className="text-sm text-white/60">{description}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default StatCard
