"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Loader2, CheckCircle } from "lucide-react"

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <Input
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-gray-800 border-gray-700 text-white"
            required
            disabled={isSubmitting || isSubmitted}
          />
        </div>

        <div>
          <Input
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-gray-800 border-gray-700 text-white"
            required
            disabled={isSubmitting || isSubmitted}
          />
        </div>

        <div>
          <Input
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="bg-gray-800 border-gray-700 text-white"
            required
            disabled={isSubmitting || isSubmitted}
          />
        </div>

        <div>
          <Textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
            required
            disabled={isSubmitting || isSubmitted}
          />
        </div>

        <div>
          {!isSubmitted ? (
            <Button type="submit" className="w-full bg-[#0043f8] hover:bg-[#0036c5] text-white" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center p-3 bg-green-500/20 text-green-500 rounded-md"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Message sent successfully!
            </motion.div>
          )}
        </div>
      </div>
    </form>
  )
}

export default ContactForm
