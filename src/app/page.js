"use client"

import { useState, useEffect } from "react"
import HeroCarousel from "../components/HeroCarousel"
import OurLoveStory from "../components/OurLoveStory"
import FamilyMembers from "../components/FamilyMembers"
import EventDetails from "../components/EventDetails"
import BestMoments from "../components/BestMoments"
import VideoSection from "../components/VideoSection"
import PreWeddingSection from "../components/PreWeddingSection"
import PostWeddingSection from "../components/PostWeddingSection"
import BottomNavigation from "../components/BottomNavigation"
import { useLanguage } from "../contexts/LanguageContext"
import { t } from "../utils/translations"

export default function WeddingLandingPage() {
  const [isVisible, setIsVisible] = useState({})
  const { language } = useLanguage()

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full h-2 bg-gradient-to-r from-red-500 via-gold-500 to-red-500 shadow-lg"></div>

      <BottomNavigation />

      {/* Section 1: Hero with Carousel and Countdown */}
      <HeroCarousel />

      {/* Section 2: Our Love Story */}
      <OurLoveStory />

      {/* Section 3: Family Members */}
      <FamilyMembers />

      {/* Section 4: Best Moments Gallery */}
      <BestMoments />

      {/* Section 5: Video Section */}
      <VideoSection />

      {/* Section 6: Pre-Wedding Section */}
      <PreWeddingSection />

      {/* Section 7: Post-Wedding Section */}
      <PostWeddingSection />

      {/* Section 8: Event Details */}
      <EventDetails />

      <section id="venue" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.venue ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="font-serif text-6xl font-bold text-red-600 mb-4">{t("venueTitle", language)}</h2>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-red-600 rounded-full"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
              <div className="w-16 h-1 bg-red-600 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-700">{t("venueSubtitle", language)}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible.venue ? "animate-slide-in-left" : "opacity-0"}`}>
              <img
                src="/elegant-wedding-venue-garden-chapel-with-flowers.jpg"
                alt={t("venueTitle", language)}
                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className={`${isVisible.venue ? "animate-slide-in-right" : "opacity-0"}`}>
              <h3 className="font-serif text-4xl font-semibold mb-6 text-red-600">{t("heroVenue", language)}</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{t("venueDescription", language)}</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-red-600 mr-3 text-xl">📍</span>
                  <span className="text-gray-700">{t("venueAddress", language)}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-3 text-xl">📞</span>
                  <span className="text-gray-700">{t("venuePhone", language)}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-3 text-xl">✉️</span>
                  <span className="text-gray-700">{t("venueEmail", language)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rsvp" className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.rsvp ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="font-serif text-6xl font-bold text-red-600 mb-4">{t("rsvpTitle", language)}</h2>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-red-600 rounded-full"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
              <div className="w-16 h-1 bg-red-600 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-700">{t("rsvpSubtitle", language)}</p>
          </div>

          <div
            className={`bg-white p-8 rounded-2xl shadow-2xl border-2 border-red-100 ${isVisible.rsvp ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("rsvpName", language)}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    placeholder={t("rsvpName", language)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("rsvpEmail", language)}</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    placeholder={t("rsvpEmail", language)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("rsvpPhone", language)}</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                  placeholder={t("rsvpPhone", language)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("rsvpAttending", language)}</label>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border-2 border-red-200 rounded-lg hover:bg-red-50 transition-colors cursor-pointer">
                    <input type="radio" name="attendance" value="yes" className="mr-3 text-red-600" />
                    <span className="font-medium">{t("rsvpYes", language)}</span>
                  </label>
                  <label className="flex items-center p-3 border-2 border-red-200 rounded-lg hover:bg-red-50 transition-colors cursor-pointer">
                    <input type="radio" name="attendance" value="no" className="mr-3 text-red-600" />
                    <span className="font-medium">{t("rsvpNo", language)}</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("rsvpGuests", language)}</label>
                <select className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("rsvpMessage", language)}</label>
                <textarea
                  className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                  rows="4"
                  placeholder={t("rsvpMessage", language)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t("rsvpSubmit", language)}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="guestbook" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.guestbook ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="font-serif text-6xl font-bold text-red-600 mb-4">{t("guestbookTitle", language)}</h2>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-red-600 rounded-full"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
              <div className="w-16 h-1 bg-red-600 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-700">{t("guestbookSubtitle", language)}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Message Form */}
            <div className={`${isVisible.guestbook ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="bg-red-50 p-8 rounded-2xl shadow-2xl border-2 border-red-100">
                <h3 className="font-serif text-3xl font-semibold mb-6 text-red-600">{t("guestbookTitle", language)}</h3>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder={t("guestbookName", language)}
                      className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder={t("guestbookMessage", language)}
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {t("guestbookSubmit", language)}
                  </button>
                </form>
              </div>
            </div>

            {/* Sample Messages */}
            <div className={`${isVisible.guestbook ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="space-y-6">
                <h3 className="font-serif text-3xl font-semibold text-red-600">{t("bestWishesTitle", language)}</h3>
                {[
                  {
                    name: language === "bn" ? "এমিলি ও জন" : "Emily & John",
                    message:
                      language === "bn"
                        ? "আপনাদের দুজনের জন্য আজীবন ভালোবাসা ও সুখের শুভেচ্ছা! আপনাদের সাথে উৎসব করার জন্য অপেক্ষা করতে পারছি না!"
                        : "Wishing you both a lifetime of love and happiness! Can't wait to celebrate with you!",
                  },
                  {
                    name: language === "bn" ? "জনসন পরিবার" : "The Johnson Family",
                    message:
                      language === "bn"
                        ? "আপনাদের সুন্দর প্রেমের গল্প উন্মোচিত হতে দেখার জন্য খুবই উৎসাহিত। অভিনন্দন!"
                        : "So excited to witness your beautiful love story unfold. Congratulations!",
                  },
                  {
                    name: language === "bn" ? "মার্ক ও লিসা" : "Mark & Lisa",
                    message:
                      language === "bn"
                        ? "আপনারা দুজন একে অপরের জন্য নিখুঁত। আপনাদের সুখী জীবনের জন্য শুভেচ্ছা!"
                        : "You two are perfect for each other. Here's to your happily ever after!",
                  },
                ].map((msg, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border-2 border-red-100 shadow-lg">
                    <p className="text-gray-700 mb-3 italic text-lg">"{msg.message}"</p>
                    <p className="text-red-600 font-semibold text-right">- {msg.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-red-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float">
            <h3 className="font-serif text-4xl font-bold mb-4">{t("heroTitle", language)}</h3>
            <p className="text-xl mb-6">{t("heroDate", language)}</p>
            <p className="text-lg opacity-90 mb-8">
              {language === "bn"
                ? "প্রেম কত দিন, মাস বা বছর একসাথে থাকার বিষয় নয়। প্রেম হল প্রতিদিন একে অপরকে কতটা ভালোবাসার বিষয়।"
                : "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day."}
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <span className="text-2xl">📧</span>
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <span className="text-2xl">📱</span>
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <span className="text-2xl">💌</span>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm opacity-75">
              {language === "bn"
                ? "© ২০২৪ প্রিয়া ও অর্জুনের বিবাহ। আমাদের বিশেষ দিনের জন্য ❤️ দিয়ে তৈরি।"
                : "© 2024 Priya & Arjun Wedding. Made with ❤️ for our special day."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
