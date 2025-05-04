"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
}

const TeamMember = ({ name, role, image, bio }: TeamMemberProps) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 30px -10px rgba(0, 67, 248, 0.3)",
      }}
    >
      <div className="relative h-64 overflow-hidden group">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="h-full w-full relative">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
        >
          <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#0043f8]/80 transition-colors">
            <Linkedin className="h-5 w-5 text-white" />
          </a>
          <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#0043f8]/80 transition-colors">
            <Twitter className="h-5 w-5 text-white" />
          </a>
          <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#0043f8]/80 transition-colors">
            <Mail className="h-5 w-5 text-white" />
          </a>
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-[#0043f8] font-medium mb-3">{role}</p>
        <p className="text-gray-400">{bio}</p>
      </div>
    </motion.div>
  )
}

export default TeamMember
