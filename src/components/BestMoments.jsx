"use client"

import { useState, useEffect } from "react"

export default function BestMoments() {
  const [isVisible, setIsVisible] = useState(false)

  const galleryImages = [
    {
      src: "/romantic-couple-engagement-photo-in-golden-hour-li.jpg",
      title: "Golden Hour Magic",
      description: "Our engagement shoot captured the perfect golden light",
      likes: 124,
      comments: 18,
    },
    {
      src: "/couple-dancing-at-sunset-beach-romantic-silhouette.jpg",
      title: "Beach Romance",
      description: "Dancing together as the sun sets behind us",
      likes: 89,
      comments: 12,
    },
    {
      src: "/wedding-rings-on-elegant-white-flowers-close-up.jpg",
      title: "Symbol of Love",
      description: "Our rings representing eternal commitment",
      likes: 156,
      comments: 24,
    },
    {
      src: "/bride-and-groom-laughing-together-candid-moment.jpg",
      title: "Pure Joy",
      description: "Candid moments of happiness and laughter",
      likes: 203,
      comments: 31,
    },
    {
      src: "/romantic-couple-sitting-together-in-coffee-shop-la.jpg",
      title: "Coffee Date",
      description: "Where it all began - our first coffee together",
      likes: 78,
      comments: 9,
    },
    {
      src: "/couple-laughing-together-in-park-autumn-leaves.jpg",
      title: "Autumn Love",
      description: "Walking through the park in fall colors",
      likes: 92,
      comments: 15,
    },
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

    const section = document.getElementById("best-moments")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="best-moments" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif text-6xl font-bold text-red-600 mb-4">Best Moments</h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Capturing the precious moments of our journey together
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group break-inside-avoid mb-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-serif text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-white/90 text-sm mb-4 leading-relaxed">{image.description}</p>

                  {/* Social buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-white hover:text-red-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm">{image.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-white hover:text-red-300 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <span className="text-sm">{image.comments}</span>
                      </button>
                    </div>
                    <button className="text-white hover:text-red-300 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
