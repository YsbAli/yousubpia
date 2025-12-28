"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { t } from "../utils/translations"

function InfoRow({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
      <span className="text-sm font-semibold text-red-600">{label}</span>
      <span className="text-gray-700 text-sm">{value}</span>
    </div>
  )
}

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    )
    const section = document.getElementById("about-us")
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif text-6xl font-bold text-red-600 mb-4">
            {t("aboutUsTitle", language)}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t("aboutUsSubtitle", language)}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Bride Card */}
          <div className={`${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 shadow-sm">
              <img
                src="/bride-beautiful-portrait.jpg"
                alt={t("brideName", language)}
                className="w-44 h-44 mx-auto rounded-full object-cover border-4 border-red-200 shadow-lg"
              />

              <h3 className="text-center mt-6 font-serif text-3xl font-bold text-red-600">
                {t("brideName", language)}
              </h3>

              {/* Education & Profession */}
              <div className="mt-4 bg-white/70 rounded-xl p-4 space-y-2">
                <InfoRow
                  label={language === "bn" ? "শিক্ষাগত যোগ্যতা" : "Education"}
                  value={t("brideEducation", language)}
                />
                <InfoRow
                  label={language === "bn" ? "পেশা" : "Profession"}
                  value={t("brideProfession", language)}
                />
              </div>

              {/* Description */}
              <p className="mt-5 text-gray-700 text-center leading-relaxed">
                {t("brideDescription", language)}
              </p>
            </div>
          </div>

          {/* Groom Card */}
          <div className={`${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 shadow-sm">
              <img
                src="/groom-handsome-portrait.jpg"
                alt={t("groomName", language)}
                className="w-44 h-44 mx-auto rounded-full object-cover border-4 border-red-200 shadow-lg"
              />

              <h3 className="text-center mt-6 font-serif text-3xl font-bold text-red-600">
                {t("groomName", language)}
              </h3>

              {/* Education & Profession */}
              <div className="mt-4 bg-white/70 rounded-xl p-4 space-y-2">
                <InfoRow
                  label={language === "bn" ? "শিক্ষাগত যোগ্যতা" : "Education"}
                  value={t("groomEducation", language)}
                />
                <InfoRow
                  label={language === "bn" ? "পেশা" : "Profession"}
                  value={t("groomProfession", language)}
                />
              </div>

              {/* Description */}
              <p className="mt-5 text-gray-700 text-center leading-relaxed">
                {t("groomDescription", language)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
