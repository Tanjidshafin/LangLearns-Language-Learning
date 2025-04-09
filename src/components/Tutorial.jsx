"use client"

import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

const Tutorial = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="mt-20 mb-16">
      {/* Decorative elements */}
      <div className="absolute left-0 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute right-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* Header Section */}
      <div className="relative">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-green-100 to-green-200 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 relative">
            Interactive{" "}
            <span className="relative">
              <span className="text-green-600">Tutorials</span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-green-200 rounded-full"></span>
            </span>{" "}
            for Learning
          </h2>

          <p className="text-gray-600 text-center max-w-3xl my-5 mx-auto text-lg">
            Enhance your language learning experience with our comprehensive video tutorials. Watch expert instructors
            guide you through pronunciation, grammar, and cultural nuances.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative max-w-5xl mx-auto">
        {/* Video Container with Card Effect */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 transform transition-all duration-300 hover:scale-[1.01]">
          {/* Video Loading Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 flex items-center justify-center z-10 transition-opacity duration-1000 ${isVideoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-green-600 font-medium">Loading tutorial...</p>
            </div>
          </div>

          {/* Video Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-green-600 to-green-400 z-0"></div>
          <div className="absolute top-0 right-0 m-2 px-4 py-1 bg-white text-green-600 font-bold rounded-full text-sm shadow-md z-20">
            FEATURED
          </div>

          {/* Video Player */}
          <div className="pt-12 pb-6 px-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/hyLl_0d0EBw?si=vvoDRtzHaPz8p0Qq"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                onLoad={() => setIsVideoLoaded(true)}
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Language Learning Fundamentals</h3>
                <p className="text-gray-500 mt-1">Master the basics with our comprehensive guide</p>
              </div>

              <div className="flex items-center mt-4 md:mt-0 space-x-4">
                <div className="flex -space-x-2">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/women/12.jpg"
                    alt="User"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="User"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/women/45.jpg"
                    alt="User"
                  />
                </div>
                <span className="text-sm text-gray-500">2.4k students</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Controls */}
        <div className="flex justify-center md:justify-end mt-8">
          <NavLink
            to="/Tutorials"
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative flex items-center gap-2 px-8 py-3 bg-white border border-green-200 rounded-full font-medium text-green-600 transition-all duration-300 group-hover:bg-gradient-to-r from-green-600 to-green-400 group-hover:text-white group-hover:border-transparent">
              <span>View More Tutorials</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </NavLink>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Comprehensive Lessons</h3>
          <p className="text-gray-600">Access detailed tutorials covering vocabulary, grammar, and pronunciation.</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Interactive Practice</h3>
          <p className="text-gray-600">Engage with interactive exercises to reinforce what you've learned.</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Native Pronunciation</h3>
          <p className="text-gray-600">Learn from native speakers to develop authentic accent and intonation.</p>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}

export default Tutorial
