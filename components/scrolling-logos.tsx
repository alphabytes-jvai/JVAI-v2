"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const ScrollingLogos = () => {
  const logos = [
    { name: "Tech Corp", image: '/Machine.png', width: 120 },
    { name: "Global Finance", image: '/Machine.png', width: 150 },
    { name: "Health Systems", image: '/Machine.png', width: 140 },
    { name: "Retail Giant", image: '/Machine.png', width: 130 },
    { name: "Manufacturing Co", image: '/Machine.png', width: 160 },
    { name: "Energy Solutions", image: '/Machine.png', width: 145 },
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollAnimation = () => {
      if (containerRef.current) {
        if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
          containerRef.current.scrollLeft = 0
        } else {
          containerRef.current.scrollLeft += 1
        }
      }
    }

    const animationId = setInterval(scrollAnimation, 30)

    return () => clearInterval(animationId)
  }, [])

  return (
    <div
      ref={containerRef}
      className="flex overflow-hidden whitespace-nowrap max-w-full"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* First set of logos */}
      {/* {logos.map((logo, index) => (
        <div
          key={`logo-1-${index}`}
          className="flex items-center justify-center mx-8 opacity-70 hover:opacity-100 transition-opacity"
          style={{ width: logo.width }}
        >
          <div className="bg-white/10 px-4 py-2 rounded-lg">
            <span className="text-white font-medium">{logo.name}</span>
          </div>
        </div>
      ))} */}

      {/* Duplicate set for seamless scrolling */}
      {/* {logos.map((logo, index) => (
        <div
          key={`logo-2-${index}`}
          className="flex items-center justify-center mx-8 opacity-70 hover:opacity-100 transition-opacity"
          style={{ width: logo.width }}
        >
          <div className="bg-white/10 px-4 py-2 rounded-lg">
            <Image height={200} width={200} alt="logo" src={logo.image}></Image>
          </div>
        </div>
      ))} */}
    </div>
  )
}

export default ScrollingLogos
