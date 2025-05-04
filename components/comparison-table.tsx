"use client"

import { motion } from "framer-motion"
import { CheckCircle, XCircle } from "lucide-react"

const ComparisonTable = () => {
  const features = [
    {
      name: "Adaptive Learning",
      ai: true,
      traditional: false,
      description: "Continuously improves based on new data and feedback",
    },
    {
      name: "Pattern Recognition",
      ai: true,
      traditional: false,
      description: "Identifies complex patterns in large datasets",
    },
    {
      name: "Predictive Capabilities",
      ai: true,
      traditional: false,
      description: "Forecasts future trends and behaviors",
    },
    {
      name: "Automation",
      ai: true,
      traditional: true,
      description: "Automates repetitive tasks and processes",
    },
    {
      name: "Scalability",
      ai: true,
      traditional: false,
      description: "Easily scales to handle increasing data volumes",
    },
    {
      name: "Real-time Processing",
      ai: true,
      traditional: false,
      description: "Processes and analyzes data in real-time",
    },
  ]

  return (
    <motion.div
      className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-3">
        <div className="p-6 border-b border-gray-800">
          <h3 className="text-lg font-medium text-white">Feature</h3>
        </div>
        <div className="p-6 border-b border-gray-800 bg-[#0043f8]/10 text-center">
          <h3 className="text-lg font-medium text-white">AI Solution</h3>
        </div>
        <div className="p-6 border-b border-gray-800 text-center">
          <h3 className="text-lg font-medium text-white">Traditional Solution</h3>
        </div>
      </div>

      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="grid grid-cols-3 border-b border-gray-800 last:border-b-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="p-6">
            <div>
              <h4 className="text-white font-medium">{feature.name}</h4>
              <p className="text-gray-400 text-sm mt-1">{feature.description}</p>
            </div>
          </div>
          <div className="p-6 flex justify-center items-center bg-[#0043f8]/5">
            {feature.ai ? (
              <CheckCircle className="h-6 w-6 text-[#0043f8]" />
            ) : (
              <XCircle className="h-6 w-6 text-red-500" />
            )}
          </div>
          <div className="p-6 flex justify-center items-center">
            {feature.traditional ? (
              <CheckCircle className="h-6 w-6 text-green-500" />
            ) : (
              <XCircle className="h-6 w-6 text-red-500" />
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ComparisonTable
