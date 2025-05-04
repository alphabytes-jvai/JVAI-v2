"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { CheckCircle } from "lucide-react"

interface IndustryCardProps {
  title: string
  icon: ReactNode
  description: string
  useCases: string[]
}

const IndustryCard = ({ title, icon, description, useCases }: IndustryCardProps) => {
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
      <div className="flex flex-col h-full">
        <div className="mb-4 p-3 bg-[#0043f8]/10 rounded-lg w-fit">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="mt-auto">
          <h4 className="text-white font-medium mb-2">Key Use Cases:</h4>
          <ul className="space-y-2">
            {useCases.map((useCase, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="h-5 w-5 text-[#0043f8] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{useCase}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default IndustryCard
