"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

interface FeatureHighlightProps {
  title: string
  description: string
  image: string
  features: string[]
  imagePosition: "left" | "right"
}

const FeatureHighlight = ({ title, description, image, features, imagePosition }: FeatureHighlightProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {imagePosition === "left" && (
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0043f8]/20 to-transparent"></div>
          </div>
        </motion.div>
      )}

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: imagePosition === "left" ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#0043f8]/10 p-2 rounded-lg mr-3 mt-1">
                <CheckCircle className="h-5 w-5 text-[#0043f8]" />
              </div>
              <p className="text-gray-300">{feature}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {imagePosition === "right" && (
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0043f8]/20"></div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default FeatureHighlight
