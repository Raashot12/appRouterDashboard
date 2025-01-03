"use client"

import {useRouter, usePathname} from "next/navigation"
import React from "react"

const NavigationHeader = ({
  data,
  bgColor,
  color,
}: {
  data: {name: string; title: string; path: string}[]
  bgColor?: string
  color?: string
}) => {
  const router = useRouter()
  const currentPath = usePathname()

  const handleNavigation = (path: string) => {
    if (currentPath !== path) {
      router.push(path)
    }
  }

  return (
    <div className={`w-full ${bgColor || "bg-gray-100"}`}>
      <div className="container mx-auto max-w-6xl gap-4 flex justify-between items-center py-4 px-6">
        {data?.map((item, index) => {
          const isActive = currentPath === item.path
          return (
            <h3
              key={index}
              className={`text-lg cursor-pointer transition duration-300 font-bold ${
                isActive
                  ? "text-purple-950"
                  : color || "text-white hover:text-blue-500"
              }`}
              onClick={() => handleNavigation(item.path)}
            >
              {item.title}
            </h3>
          )
        })}
      </div>
    </div>
  )
}

export default NavigationHeader
