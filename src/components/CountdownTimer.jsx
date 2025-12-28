"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { t } from "../utils/translations"

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const { language } = useLanguage()

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const getUnitLabel = (unit) => {
    const labels = {
      days: t("daysLeft", language),
      hours: t("hoursLeft", language),
      minutes: t("minutesLeft", language),
      seconds: t("secondsLeft", language),
    }
    return labels[unit] || unit
  }

  return (
    <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-red-600 text-white px-2 md:px-4 lg:px-6 py-3 md:py-4 lg:py-6 rounded-xl min-w-[60px] md:min-w-[80px] lg:min-w-[90px] animate-countdown-pulse shadow-2xl border-2 border-red-400 hover:bg-red-700 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            <div className="text-xl md:text-3xl lg:text-4xl font-bold font-mono tracking-wider">
              {String(value).padStart(2, "0")}
            </div>
          </div>
          <div className="text-white text-xs md:text-sm font-bold mt-2 uppercase tracking-widest drop-shadow-lg">
            {getUnitLabel(unit)}
          </div>
        </div>
      ))}
    </div>
  )
}
