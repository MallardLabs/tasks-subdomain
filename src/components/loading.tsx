'use client'

import Lottie from "lottie-react"
import { useEffect, useState } from "react"
import animationData from "@/animations/mallard-logo.json"

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="w-[800px] h-auto">
        <Lottie
          animationData={animationData}
          loop={false}
          autoplay={true}
        />
      </div>
    </div>
  )
}