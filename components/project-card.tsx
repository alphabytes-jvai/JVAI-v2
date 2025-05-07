"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
}

const ProjectCard = ({ title, description, image, tags }: ProjectCardProps) => {
  return (
    <motion.div
      className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 30px -10px rgba(0, 67, 248, 0.3)",
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        <motion.div className="relative h-full w-full" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0043f8] transition-colors">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-[#0043f8]/10 text-white px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 pt-0">
        <motion.div className="text-[#0043f8] font-medium flex items-center" whileHover={{ x: 5 }}>
          View Project →
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
