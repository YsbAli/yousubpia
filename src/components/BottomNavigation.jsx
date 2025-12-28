"use client"

import { useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { t } from "../utils/translations"

export default function BottomNavigation() {
  const { language, toggleLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { key: "home", href: "#hero" },
    { key: "aboutUs", href: "#about-us" },
    { key: "ourStory", href: "#love-story" },
    { key: "family", href: "#family" },
    { key: "gallery", href: "#best-moments" },
    { key: "events", href: "#events" },
    { key: "videos", href: "#videos" },
    { key: "venue", href: "#venue" },
    { key: "rsvp", href: "#rsvp" },
    { key: "guestbook", href: "#guestbook" },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <div className="fixed bottom-4 left-4 z-50 flex items-center gap-3">
        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 font-medium"
        >
          {language === "en" ? "বাংলা" : "English"}
        </button>

        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? "rotate-45" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`fixed bottom-20 left-4 z-50 transition-all duration-300 transform ${
          isMenuOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-full opacity-0 scale-95"
        }`}
        style={{ transformOrigin: "bottom left" }}
      >
        <div className="w-64">
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-white bg-red-600 hover:bg-red-700 rounded-lg font-medium shadow-lg transition-all duration-200 transform hover:translate-x-2 hover:scale-105"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? "slideInLeft 0.3s ease-out forwards" : "none",
                }}
              >
                {t(item.key, language)}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
