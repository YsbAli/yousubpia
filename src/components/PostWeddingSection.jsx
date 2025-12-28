"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "../contexts/LanguageContext"

export default function PostWeddingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()

  const postWeddingImages = [
    { src: "/post-wedding-couple-celebration.jpg", title: "Celebration Time" },
    { src: "/post-wedding-couple-reception.jpg", title: "Reception Joy" },
    { src: "/post-wedding-couple-dancing.jpg", title: "First Dance" },
    { src: "/post-wedding-family-photo.jpg", title: "Family Together" },
    { src: "/post-wedding-couple-cake.jpg", title: "Cake Cutting" },
    { src: "/post-wedding-couple-rings.jpg", title: "Ring Exchange" },
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

    const section = document.getElementById("post-wedding")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="post-wedding" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-red-600 mb-4">
            {language === "en" ? "Post-Wedding Celebration" : "পোস্ট-ওয়েডিং উৎসব"}
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "Celebrating our new beginning as husband and wife"
              : "স্বামী-স্ত্রী হিসেবে আমাদের নতুন সূচনা উৎসব"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postWeddingImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video">
                <img
                  src={image.src || `/placeholder.svg?height=300&width=400&query=${image.title}`}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-6 font-semibold text-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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
