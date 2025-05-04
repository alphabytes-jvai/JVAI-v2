"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

const AnimatedSection = ({ children, className, id }: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection
