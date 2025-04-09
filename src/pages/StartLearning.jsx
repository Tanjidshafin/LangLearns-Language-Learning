"use client"

import { useContext, useState, useEffect } from "react"
import { AppContext } from "../context/AppContext"
import { NavLink } from "react-router-dom"
import CountUp from "react-countup"
import Tutorial from "../components/Tutorial"

const StartLearning = () => {
  const { lessons } = useContext(AppContext)
  const [langSelector, setLangSelector] = useState("spanish")
  const [toggle, setToggle] = useState("grid")
  const [animateCards, setAnimateCards] = useState(false)

  useEffect(() => {
    setAnimateCards(true)
    const timer = setTimeout(() => setAnimateCards(false), 600)
    return () => clearTimeout(timer)
  }, [toggle, langSelector])

  const languages = [
    {
      value: "spanish",
      label: "Spanish",
      flag: "https://www.pngitem.com/pimgs/m/505-5054502_spain-fifa-logo-spain-flag-logo-circle-hd.png",
    },
    {
      value: "japan",
      label: "Japanese",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
    },
    {
      value: "hindi",
      label: "Hindi",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    },
    {
      value: "korean",
      label: "Korean",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1200px-Flag_of_South_Korea.svg.png",
    },
    {
      value: "arabic",
      label: "Arabic",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1200px-Flag_of_Saudi_Arabia.svg.png",
    },
  ]

  const difficultyColors = {
    Easy: "bg-emerald-100 text-emerald-700 border-emerald-200",
    Medium: "bg-amber-100 text-amber-700 border-amber-200",
    Hard: "bg-rose-100 text-rose-700 border-rose-200",
  }

  const handleLanguageChange = (e) => {
    setLangSelector(e.target.value)
  }

  return (
    <div className="mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-8 py-10">
      {/* Hero Section */}
      <div className="relative mb-16 rounded-3xl bg-gradient-to-r from-green-50 via-teal-50 to-cyan-50 p-8 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gradient-to-br from-green-300 to-teal-400 opacity-20 blur-3xl"></div>
        <div className="absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-gradient-to-tr from-blue-300 to-indigo-400 opacity-20 blur-3xl"></div>

        <div className="relative">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Starting Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">Language</span>{" "}
            Learning Journey
          </h1>

          <p className="text-gray-600 text-center max-w-3xl mx-auto my-6 text-lg">
            Welcome to your language learning adventure! Our interactive platform helps you expand vocabulary and
            improve communication skills in various languages. Dive into fun and engaging lessons today!
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {languages.map((lang) => (
              <button
                key={lang.value}
                onClick={() => setLangSelector(lang.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  langSelector === lang.value
                    ? "bg-gradient-to-r from-green-600 to-teal-500 text-white shadow-md scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <img
                  src={lang.flag || "/placeholder.svg"}
                  alt={lang.label}
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Controls Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold text-gray-800">Available Lessons</h2>
          <div className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
            {langSelector === "spanish" ? lessons.length : 0} lessons
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-10 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <button
              onClick={() => setToggle("grid")}
              className={`inline-flex items-center justify-center px-3 transition-colors duration-200 ${
                toggle === "grid"
                  ? "bg-gradient-to-r from-green-600 to-teal-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
              <span className="ml-2 hidden sm:inline">Grid</span>
            </button>

            <button
              onClick={() => setToggle("line")}
              className={`inline-flex items-center justify-center px-3 transition-colors duration-200 ${
                toggle === "line"
                  ? "bg-gradient-to-r from-green-600 to-teal-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
              <span className="ml-2 hidden sm:inline">List</span>
            </button>
          </div>

          <select
            id="Language"
            value={langSelector}
            onChange={handleLanguageChange}
            className="h-10 px-4 rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Lessons Section */}
      <div className={`min-h-[400px] ${langSelector === "spanish" ? "" : "flex items-center justify-center"}`}>
        {langSelector === "spanish" ? (
          <div
            className={`grid ${
              toggle === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            } gap-6 ${animateCards ? "animate-fade-in" : ""}`}
          >
            {lessons.slice(0, 10).map((lesson, index) => (
              <NavLink
                key={lesson.Lesson_no}
                to={`/Lesson/${lesson.Lesson_no}`}
                className={`group relative rounded-xl ${
                  toggle === "grid" ? "flex flex-col" : "flex items-center"
                } bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Colorful top border */}
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-green-400 via-teal-500 to-cyan-400"></div>

                {/* Content */}
                <div className="flex w-full p-5 gap-4">
                  {/* Left side with lesson number and flag */}
                  <div className={`${toggle === "grid" ? "w-full" : "w-1/4"} flex items-center gap-4`}>
                    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-100">
                      <span className="text-xl font-bold text-green-600">{lesson.Lesson_no}</span>
                    </div>

                    <div className={toggle === "grid" ? "ml-auto" : "hidden"}>
                      <img
                        alt="Spanish flag"
                        src="https://www.pngitem.com/pimgs/m/505-5054502_spain-fifa-logo-spain-flag-logo-circle-hd.png"
                        className="size-12 rounded-full object-cover shadow-sm border-2 border-gray-100"
                      />
                    </div>
                  </div>

                  {/* Middle/Right side with details */}
                  <div
                    className={`${toggle === "grid" ? "w-full mt-4" : "w-3/4"} flex ${toggle === "grid" ? "flex-col" : "flex-row items-center justify-between"}`}
                  >
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg group-hover:text-green-600 transition-colors">
                        Spanish Lesson {lesson.Lesson_no}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">Master essential vocabulary and phrases</p>
                    </div>

                    <div className={`flex gap-4 ${toggle === "grid" ? "mt-4" : ""}`}>
                      <div className="flex flex-col items-center">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[lesson.difficulty] || "bg-gray-100 text-gray-700"}`}
                        >
                          {lesson.difficulty}
                        </span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="text-lg font-bold text-teal-600">
                          <CountUp enableScrollSpy={true} duration={2} end={10} />
                        </div>
                        <span className="text-xs text-gray-500">Words</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Start button - only visible on hover */}
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-gradient-to-r from-green-600/80 to-teal-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  <div className="bg-white rounded-full px-6 py-2 font-medium text-green-600 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    Start Lesson
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 px-4 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="relative">
              <img
                className="w-[250px] rounded-2xl mx-auto"
                src="https://img.freepik.com/premium-vector/window-operating-system-error-warning-dialog-window-popup-message-with-system-failure-flat-design_812892-54.jpg"
                alt="Not available"
              />
              <div className="absolute -top-4 -right-4 flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-200 text-amber-600 text-xl font-bold animate-bounce">
                !
              </div>
            </div>
            <h3 className="text-center mt-8 mb-2 font-bold text-2xl text-gray-800">Coming Soon!</h3>
            <p className="text-center text-gray-600 max-w-md">
              We're working hard to bring you {languages.find((l) => l.value === langSelector)?.label} lessons. Please
              check back later or try Spanish lessons in the meantime.
            </p>
            <button
              onClick={() => setLangSelector("spanish")}
              className="mt-6 px-6 py-2 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Try Spanish Lessons
            </button>
          </div>
        )}
      </div>

      {/* Tutorial Section */}
      <div className="mt-16">
        <Tutorial />
      </div>

      {/* Add some custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in > * {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default StartLearning
