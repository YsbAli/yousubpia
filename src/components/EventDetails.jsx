"use client"

import { useState, useEffect } from "react"

export default function EventDetails() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredEvent, setHoveredEvent] = useState(null)

  const events = [
    {
      id: "ceremony",
      title: "Ceremony",
      image: "/indian-wedding-ceremony-bride-bouquet.jpg",
      schedule: {
        date: "15 Sep 2024",
        time: "10am-12pm",
        location: "Grand Palace Hotel, Mumbai",
        address: "Marine Drive, Mumbai 400001",
        dressCode: "Traditional Indian Wear",
      },
    },
    {
      id: "reception",
      title: "Reception",
      image: "/elegant-crystal-chandelier-wedding-decoration.jpg",
      schedule: {
        date: "15 Sep 2024",
        time: "7pm-11pm",
        location: "Taj Palace Ballroom",
        address: "Colaba, Mumbai 400005",
        dressCode: "Formal/Semi-Formal",
      },
    },
    {
      id: "party",
      title: "Party",
      image: "/indian-wedding-party-celebration-friends-dancing.jpg",
      schedule: {
        date: "16 Sep 2024",
        time: "8pm-2am",
        location: "Rooftop Terrace",
        address: "Bandra West, Mumbai 400050",
        dressCode: "Party Wear",
      },
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

    const section = document.getElementById("event-details")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="event-details" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif text-6xl font-bold text-red-600 mb-4">Event Details</h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full mx-2 mt-[-2px]"></div>
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus, leo at pretium tristique, dolor, in
            ullamcorper tellus velit quis mi. In placerat volutpat elit quis dictum.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`text-center relative ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              <h3 className="font-serif text-3xl font-bold text-gray-800 mb-6">{event.title}</h3>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-80 object-cover border-4 border-red-500 shadow-lg transition-transform duration-500 hover:scale-110"
                />

                <div
                  className={`absolute inset-0 bg-red-600/95 backdrop-blur-sm transition-all duration-300 flex items-center justify-center p-6 ${
                    hoveredEvent === event.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-white text-center">
                    <h4 className="font-serif text-2xl font-bold mb-4 italic">Schedule</h4>
                    <div className="space-y-3 text-left">
                      <div className="flex justify-between items-center border-b border-red-400 pb-2">
                        <span className="font-semibold">Date:</span>
                        <span>{event.schedule.date}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-red-400 pb-2">
                        <span className="font-semibold">Time:</span>
                        <span>{event.schedule.time}</span>
                      </div>
                      <div className="flex justify-between items-start border-b border-red-400 pb-2">
                        <span className="font-semibold">Location:</span>
                        <div className="text-right text-sm">
                          <div>{event.schedule.location}</div>
                          <div className="text-red-200">{event.schedule.address}</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Dress Code:</span>
                        <span className="text-sm">{event.schedule.dressCode}</span>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <button className="text-white underline hover:text-red-200 transition-colors text-sm">
                        View on Map
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="font-serif text-4xl font-bold text-red-600 text-center mb-12">
            Pre-Wedding & Post-Wedding Events
          </h3>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pre-Wedding Events */}
            <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <h4 className="font-serif text-2xl font-bold text-red-600 mb-6 text-center">Pre-Wedding Celebrations</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <img
                  src="/romantic-couple-engagement-photo-in-golden-hour-li.jpg"
                  alt="Mehendi"
                  className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                />
                <img
                  src="/couple-dancing-at-sunset-beach-romantic-silhouette.jpg"
                  alt="Sangeet"
                  className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                />
                <img
                  src="/wedding-rings-on-elegant-white-flowers-close-up.jpg"
                  alt="Haldi"
                  className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                />
                <img
                  src="/romantic-couple-sitting-together-in-coffee-shop-la.jpg"
                  alt="Engagement"
                  className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">Mehendi Ceremony:</span>
                    <span>September 13, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sangeet Night:</span>
                    <span>September 14, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Haldi Ceremony:</span>
                    <span>September 15, 2024 (Morning)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post-Wedding Events */}
            <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <h4 className="font-serif text-2xl font-bold text-red-600 mb-6 text-center">Post-Wedding Celebrations</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <img
                  src="/indian-wedding-party-celebration-friends-dancing.jpg"
                  alt="Reception"
                  className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                />
                <img
                  src="/bride-and-groom-laughing-together-candid-moment.jpg"
                  alt="Vidaai"
                  className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                />
                <img
                  src="/couple-laughing-together-in-park-autumn-leaves.jpg"
                  alt="Griha Pravesh"
                  className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                />
                <img
                  src="/romantic-dinner-date-candlelight-restaurant.jpg"
                  alt="Celebration"
                  className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">Reception Dinner:</span>
                    <span>September 15, 2024 (Evening)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Vidaai Ceremony:</span>
                    <span>September 16, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Griha Pravesh:</span>
                    <span>September 17, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
