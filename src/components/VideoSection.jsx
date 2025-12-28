"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "../contexts/LanguageContext"

export default function VideoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeVideo, setActiveVideo] = useState("wedding")
  const { language } = useLanguage()

  const videos = {
    wedding: {
      title: { en: "Wedding Highlights", bn: "বিবাহের হাইলাইট" },
      description: { en: "Relive our magical wedding day", bn: "আমাদের জাদুকরী বিবাহের দিন পুনরায় অনুভব করুন" },
      thumbnail: "/wedding-ceremony-beautiful-moment.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    },
    preWedding: {
      title: { en: "Pre-Wedding Story", bn: "প্রি-ওয়েডিং গল্প" },
      description: { en: "Our journey before the big day", bn: "বিশেষ দিনের আগে আমাদের যাত্রা" },
      thumbnail: "/couple-pre-wedding-photoshoot.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    },
  }

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

    const section = document.getElementById("video-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="video-section" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-red-600 mb-4">
            {language === "en" ? "Our Video Story" : "আমাদের ভিডিও গল্প"}
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {language === "en" ? "Watch our beautiful moments captured in motion" : "গতিতে ধরা আমাদের সুন্দর মুহূর্তগুলি দেখুন"}
          </p>
        </div>

        {/* Video Selection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-red-100 p-1 rounded-lg">
            {Object.entries(videos).map(([key, video]) => (
              <button
                key={key}
                onClick={() => setActiveVideo(key)}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                  activeVideo === key ? "bg-red-600 text-white shadow-lg" : "text-red-600 hover:bg-red-200"
                }`}
              >
                {video.title[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Video Player */}
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video">
              <iframe
                src={videos[activeVideo].videoUrl}
                title={videos[activeVideo].title[language]}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="text-center mt-6">
            <h3 className="font-serif text-2xl font-bold text-red-600 mb-2">{videos[activeVideo].title[language]}</h3>
            <p className="text-gray-700 text-lg">{videos[activeVideo].description[language]}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
