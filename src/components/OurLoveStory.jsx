"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { t } from "../utils/translations"

export default function OurLoveStory() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()

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

    const section = document.getElementById("love-story")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const storyEvents = [
    {
      date: "26 Jan 2018",
      titleKey: "firstMeet",
      descKey: "firstMeetDesc",
      image: "/romantic-couple-sitting-together-in-coffee-shop-la.jpg",
    },
    {
      date: "26 Jan 2018",
      titleKey: "firstDate",
      descKey: "firstDateDesc",
      image: "/romantic-dinner-date-candlelight-restaurant.jpg",
    },
    {
      date: "26 Jan 2018",
      titleKey: "proposal",
      descKey: "proposalDesc",
      image: "/wedding-rings-on-elegant-white-flowers-close-up.jpg",
    },
    {
      date: "26 Jan 2018",
      titleKey: "engagement",
      descKey: "engagementDesc",
      image: "/romantic-couple-engagement-photo-in-golden-hour-li.jpg",
    },
  ]

  return (
    <section id="love-story" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif text-6xl font-bold text-red-600 mb-4">{t("loveStoryTitle", language)}</h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">{t("loveStorySubtitle", language)}</p>
        </div>

        <div className="space-y-16">
          {storyEvents.map((event, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={t(event.titleKey, language)}
                    className="w-full h-80 object-cover rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                  {/* Heart-shaped date badge */}
                  <div className="absolute -bottom-4 -right-4 bg-red-600 text-white p-4 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                    <div className="text-center">
                      <div className="text-sm font-bold">{event.date.split(" ")[0]}</div>
                      <div className="text-xs">{event.date.split(" ")[1]}</div>
                      <div className="text-xs">{event.date.split(" ")[2]}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <h3 className="font-serif text-4xl font-bold text-red-600 mb-4">{t(event.titleKey, language)}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{t(event.descKey, language)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
