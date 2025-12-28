"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "../contexts/LanguageContext"

export default function PreWeddingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()

  const preWeddingImages = [
    { src: "/pre-wedding-couple-garden.jpg", title: "Garden Romance" },
    { src: "/pre-wedding-couple-sunset.jpg", title: "Golden Hour" },
    { src: "/pre-wedding-couple-traditional.jpg", title: "Traditional Attire" },
    { src: "/pre-wedding-couple-candid.jpg", title: "Candid Moments" },
    { src: "/pre-wedding-couple-dancing.jpg", title: "Dance Together" },
    { src: "/pre-wedding-couple-laughing.jpg", title: "Pure Joy" },
    { src: "/pre-wedding-couple-romantic.jpg", title: "Romantic Pose" },
    { src: "/pre-wedding-couple-nature.jpg", title: "Nature's Beauty" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("pre-wedding")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="pre-wedding" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-red-600 mb-4">
            {language === "en" ? "Pre-Wedding Moments" : "প্রি-ওয়েডিং মুহূর্ত"}
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "Beautiful moments captured before our special day"
              : "আমাদের বিশেষ দিনের আগে ধরা সুন্দর মুহূর্তগুলি"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {preWeddingImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square">
                <img
                  src={image.src || `/placeholder.svg?height=400&width=400&query=${image.title}`}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-semibold text-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
