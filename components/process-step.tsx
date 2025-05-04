"use client"

import { motion } from "framer-motion"

interface ProcessStepProps {
  number: string
  title: string
  description: string
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl p-6 border border-gray-800 h-full relative"
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
      <div className="absolute -left-3 -top-3 w-12 h-12 bg-[#0043f8] rounded-full flex items-center justify-center text-white font-bold text-xl">
        {number}
      </div>
      <div className="pt-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  )
}

export default ProcessStep
