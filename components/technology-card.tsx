"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TechnologyCardProps {
  title: string
  icon: ReactNode
  description: string
}

const TechnologyCard = ({ title, icon, description }: TechnologyCardProps) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl p-6 border border-gray-800 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 30px -10px rgba(0, 67, 248, 0.3)",
        borderColor: "#0043f8",
      }}
    >
      <div className="flex flex-col items-center text-center h-full">
        <div className="mb-4 p-4 bg-[#0043f8]/10 rounded-full">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  )
}

export default TechnologyCard
