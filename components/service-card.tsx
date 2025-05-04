"use client"

import { type ReactNode, useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  features: string[]
}

const ServiceCard = ({ title, description, icon, features }: ServiceCardProps) => {
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
        <div className="mb-4 p-3 bg-[#0043f8]/10 rounded-lg w-fit">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isHovered ? 1 : 0.7, x: isHovered ? 0 : -5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Check className="h-5 w-5 text-[#0043f8] mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div className="mt-auto text-[#0043f8] font-medium flex items-center" animate={{ x: isHovered ? 5 : 0 }}>
          Learn more →
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ServiceCard
