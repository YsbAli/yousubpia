"use client"

import { useState, useEffect } from "react"
import CountdownTimer from "./CountdownTimer"
import { useLanguage } from "../contexts/LanguageContext"
import { t } from "../utils/translations"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { language } = useLanguage()

  const carouselImages = [
    {
      src: "/romantic-couple-engagement-photo-in-golden-hour-li.jpg",
      title: {
        en: "Our Engagement",
        bn: "আমাদের বাগদান",
      },
      date: "December 15, 2023",
      description: {
        en: "The moment we said yes to forever",
        bn: "যে মুহূর্তে আমরা চিরকালের জন্য হ্যাঁ বলেছিলাম",
      },
    },
    {
      src: "/couple-dancing-at-sunset-beach-romantic-silhouette.jpg",
      title: {
        en: "Pre-Wedding Celebration",
        bn: "প্রি-ওয়েডিং উৎসব",
      },
      date: "March 10, 2024",
      description: {
        en: "Dancing into our future together",
        bn: "একসাথে আমাদের ভবিষ্যতে নৃত্য করা",
      },
    },
    {
      src: "/wedding-rings-on-elegant-white-flowers-close-up.jpg",
      title: {
        en: "The Big Day",
        bn: "বিশেষ দিন",
      },
      date: "September 15, 2024",
      description: {
        en: "When two hearts become one",
        bn: "যখন দুটি হৃদয় এক হয়ে যায়",
      },
    },
    {
      src: "/bride-and-groom-laughing-together-candid-moment.jpg",
      title: {
        en: "Post-Wedding Celebration",
        bn: "পোস্ট-ওয়েডিং উৎসব",
      },
      date: "September 16, 2024",
      description: {
        en: "Celebrating our new beginning",
        bn: "আমাদের নতুন সূচনা উৎসব",
      },
    },
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [carouselImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <div className="w-full h-full relative overflow-hidden">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.title[language]}
                className="w-full h-full object-cover object-center transform scale-105 hover:scale-100 transition-transform duration-700"
                style={{ objectPosition: "center center" }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
          </div>
        ))}
      </div>

      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-30">
        <CountdownTimer targetDate="2024-12-15T16:00:00" />
      </div>

      {/* Carousel Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
        <div className="max-w-5xl px-4 animate-fade-in-up">
          <h1 className="font-dancing text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-heartbeat text-gradient-red bg-clip-text drop-shadow-2xl">
            {t("heroTitle", language)}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4 opacity-90 font-medium drop-shadow-lg font-serif">
            {t("heroSubtitle", language)}
          </p>
          <p className="text-base md:text-lg mb-8 opacity-80 font-medium drop-shadow-lg">
            {carouselImages[currentSlide].description[language]}
          </p>

          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 md:p-8 inline-block border border-white/40 shadow-2xl hover:bg-white/25 transition-all duration-300 transform hover:scale-105">
            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-3 text-red-200">
              {carouselImages[currentSlide].title[language]}
            </h3>
            <p className="text-base md:text-lg font-medium">{t("heroDate", language)}</p>
            <p className="text-sm md:text-base opacity-90 mt-2">{t("heroVenue", language)}</p>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 bg-red-600/80 backdrop-blur-sm text-white p-1.5 md:p-4 rounded-full hover:bg-red-600 transition-all duration-300 z-20 shadow-lg hover:scale-110"
      >
        <svg className="w-3 h-3 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 bg-red-600/80 backdrop-blur-sm text-white p-1.5 md:p-4 rounded-full hover:bg-red-600 transition-all duration-300 z-20 shadow-lg hover:scale-110"
      >
        <svg className="w-3 h-3 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-20">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-red-500 scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
