"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { t } from "../utils/translations"

export default function FamilyMembers() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentGroomIndex, setCurrentGroomIndex] = useState(0)
  const [currentBrideIndex, setCurrentBrideIndex] = useState(0)
  const { language } = useLanguage()

  const groomFamily = {
    name: { en: "Groom's Family", bn: "বরের পরিবার" },
    members: [
      { name: "Vikram Patel", role: { en: "Father", bn: "বাবা" }, image: "/indian-father-traditional-dress.jpg" },
      { name: "Meera Patel", role: { en: "Mother", bn: "মা" }, image: "/indian-mother-smiling.jpg" },
      { name: "Rohan Patel", role: { en: "Brother", bn: "ভাই" }, image: "/indian-young-man-smiling.jpg" },
      { name: "Diya Patel", role: { en: "Sister", bn: "বোন" }, image: "/indian-young-woman-traditional.jpg" },
      { name: "Harish Patel", role: { en: "Grandfather", bn: "দাদা" }, image: "/indian-elderly-man-wise.jpg" },
      { name: "Lata Patel", role: { en: "Grandmother", bn: "দাদি" }, image: "/indian-elderly-woman-kind.jpg" },
      { name: "Kiran Patel", role: { en: "Uncle", bn: "কাকা" }, image: "/indian-middle-aged-man.jpg" },
      { name: "Nisha Patel", role: { en: "Aunt", bn: "কাকিমা" }, image: "/indian-middle-aged-woman.jpg" },
    ],
  }

  const brideFamily = {
    name: { en: "Bride's Family", bn: "কনের পরিবার" },
    members: [
      { name: "Raj Sharma", role: { en: "Father", bn: "বাবা" }, image: "/indian-father-traditional-dress.jpg" },
      { name: "Sunita Sharma", role: { en: "Mother", bn: "মা" }, image: "/indian-mother-smiling.jpg" },
      { name: "Amit Sharma", role: { en: "Brother", bn: "ভাই" }, image: "/indian-young-man-smiling.jpg" },
      { name: "Kavya Sharma", role: { en: "Sister", bn: "বোন" }, image: "/indian-young-woman-traditional.jpg" },
      { name: "Ramesh Sharma", role: { en: "Grandfather", bn: "দাদা" }, image: "/indian-elderly-man-wise.jpg" },
      { name: "Kamala Sharma", role: { en: "Grandmother", bn: "দাদি" }, image: "/indian-elderly-woman-kind.jpg" },
      { name: "Suresh Sharma", role: { en: "Uncle", bn: "কাকা" }, image: "/indian-middle-aged-man.jpg" },
      { name: "Priya Sharma", role: { en: "Aunt", bn: "কাকিমা" }, image: "/indian-middle-aged-woman.jpg" },
    ],
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

    const section = document.getElementById("family-members")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGroomIndex((prev) => (prev + 2) % groomFamily.members.length)
      setCurrentBrideIndex((prev) => (prev + 2) % brideFamily.members.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(timer)
  }, [])

  const getCurrentGroomMembers = () => {
    return groomFamily.members.slice(currentGroomIndex, currentGroomIndex + 2)
  }

  const getCurrentBrideMembers = () => {
    return brideFamily.members.slice(currentBrideIndex, currentBrideIndex + 2)
  }

  return (
    <section id="family-members" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-red-600 mb-4">
            {t("familyMembersTitle", language)}
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("familyMembersSubtitle", language)}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Groom's Family (Left Side) */}
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-red-600 mb-4">
                {groomFamily.name[language]}
              </h3>
              <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              {getCurrentGroomMembers().map((member, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-red-500"
                >
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-red-200 shadow-md"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-red-600 text-xl mb-1">{member.name}</h4>
                    <p className="text-gray-600 font-medium">{member.role[language]}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress indicator for groom's family */}
            <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">{groomFamily.name[language]}</span>
                <span className="text-xs text-gray-500">{Math.floor(currentGroomIndex / 2) + 1}/4</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 bg-red-500 rounded-full transition-all duration-500"
                  style={{ width: `${((Math.floor(currentGroomIndex / 2) + 1) / 4) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Bride's Family (Right Side) */}
          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-red-600 mb-4">
                {brideFamily.name[language]}
              </h3>
              <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              {getCurrentBrideMembers().map((member, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-r-4 border-red-500"
                >
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-red-200 shadow-md"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-red-600 text-xl mb-1">{member.name}</h4>
                    <p className="text-gray-600 font-medium">{member.role[language]}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress indicator for bride's family */}
            <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">{brideFamily.name[language]}</span>
                <span className="text-xs text-gray-500">{Math.floor(currentBrideIndex / 2) + 1}/4</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 bg-red-500 rounded-full transition-all duration-500"
                  style={{ width: `${((Math.floor(currentBrideIndex / 2) + 1) / 4) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className={`${isVisible ? "animate-pulse-3d" : "opacity-0"}`}>
            <div className="relative inline-block">
              <img
                src="/bride-and-groom-laughing-together-candid-moment.jpg"
                alt="Priya & Arjun"
                className="w-full max-w-md mx-auto h-80 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-red-300 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-8 py-3 rounded-full shadow-lg border-2 border-red-200">
                <p className="font-serif text-red-600 font-bold text-xl">{t("heroTitle", language)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
