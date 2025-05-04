"use client"

import { type ReactNode, useState } from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-gray-900 rounded-xl p-6 border border-gray-800 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 30px -10px rgba(0, 67, 248, 0.3)",
        borderColor: "#0043f8",
      }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 p-3 bg-gray-800 rounded-lg w-fit">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 flex-grow">{description}</p>

        <motion.div className="mt-4 text-[#0043f8] font-medium flex items-center" animate={{ x: isHovered ? 5 : 0 }}>
          Learn more →
        </motion.div>
      </div>
    </motion.div>
  )
}

export default FeatureCard
