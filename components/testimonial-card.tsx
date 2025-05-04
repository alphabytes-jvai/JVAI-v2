"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  company: string
  image: string
  quote: string
  rating: number
}

const TestimonialCard = ({ name, company, image, quote, rating }: TestimonialCardProps) => {
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
        <div className="flex items-center mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">{name}</h4>
            <p className="text-gray-400">{company}</p>
          </div>
        </div>

        <div className="mb-6 flex-grow">
          <svg className="h-8 w-8 text-[#0043f8]/30 mb-2" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-gray-300 italic">{quote}</p>
        </div>

        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
