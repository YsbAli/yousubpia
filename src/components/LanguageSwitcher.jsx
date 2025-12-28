"use client"

import { useLanguage } from "../contexts/LanguageContext"

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-red-50 hover:bg-red-100 transition-colors border border-red-200"
    >
      <span className="text-sm font-medium text-red-700">{language === "en" ? "বাংলা" : "English"}</span>
      <div className="w-6 h-4 rounded-sm overflow-hidden border border-red-300">
        {language === "en" ? (
          <div className="w-full h-full bg-gradient-to-r from-green-500 via-white to-red-500"></div>
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-500 via-white to-red-500"></div>
        )}
      </div>
    </button>
  )
}
