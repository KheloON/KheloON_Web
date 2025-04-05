// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from "react";
const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll(".scroll-animation");
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://public.readdy.ai/ai/img_res/70e5925807039eb2da67dd380be1db31.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-600/40"></div>
        </div>
        <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="max-w-3xl">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              Empowering Athletes Through Technology
            </h1>
            <p
              className={`text-xl text-indigo-100 mb-8 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              KheloON revolutionizes athletic performance with AI-powered
              training and nutrition guidance, connecting athletes and coaches
              through data-driven insights.
            </p>
            <div
              className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-1000 delay-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <button className="bg-white hover:bg-gray-100 text-indigo-600 font-medium px-8 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer !rounded-button whitespace-nowrap">
                Learn More
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-medium px-8 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer !rounded-button whitespace-nowrap">
                Watch Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 inline"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>
      {/* App Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 scroll-animation">
              Our Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto scroll-animation">
              KheloON offers a comprehensive ecosystem for athletes and coaches,
              combining mobile and web applications powered by machine learning.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative scroll-animation">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12" y2="18" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">
                    Mobile App for Athletes
                  </h3>
                </div>
                <p className="text-indigo-100 mb-8">
                  Our athlete-focused mobile application provides personalized
                  training plans, nutrition guidance, and real-time performance
                  tracking powered by advanced machine learning algorithms.
                </p>
                <div className="relative">
                  <img
                    src="https://public.readdy.ai/ai/img_res/01d59ffa878edc5e53acf06e0b8776ce.jpg"
                    alt="KheloON Mobile App"
                    className="rounded-xl shadow-lg w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent rounded-xl"></div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white mb-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                    </svg>
                    <h4 className="text-white font-medium">
                      Exercise Tracking
                    </h4>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white mb-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 8a5 5 0 0 0-10 0v7h10V8z" />
                      <path d="M13 21h-2a2 2 0 0 1-2-2v-2h6v2a2 2 0 0 1-2 2z" />
                    </svg>
                    <h4 className="text-white font-medium">
                      Nutrition Monitoring
                    </h4>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white mb-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                    </svg>
                    <h4 className="text-white font-medium">
                      ML Recommendations
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative scroll-animation">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 ml-4">
                    Web Platform for Coaches
                  </h3>
                </div>
                <p className="text-gray-600 mb-8">
                  Our comprehensive web platform enables coaches and
                  administrators to manage athletes, analyze performance data,
                  and create customized training and nutrition plans.
                </p>
                <div className="relative">
                  <img
                    src="https://public.readdy.ai/ai/img_res/1f01726ffafc8d47991c3d41330bae3d.jpg"
                    alt="KheloON Web Platform"
                    className="rounded-xl shadow-lg w-full object-cover object-top"
                  />
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mb-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <h4 className="text-gray-800 font-medium">
                      Athlete Management
                    </h4>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mb-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="20" x2="12" y2="10" />
                      <line x1="18" y1="20" x2="18" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="16" />
                    </svg>
                    <h4 className="text-gray-800 font-medium">
                      Performance Analytics
                    </h4>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mb-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                      <path d="M9 14l2 2 4-4" />
                    </svg>
                    <h4 className="text-gray-800 font-medium">
                      Training Programs
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Key Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 scroll-animation">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto scroll-animation">
              Discover how KheloON transforms athletic performance through
              innovative technology and data-driven insights.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-running",
                title: "Exercise Tracking",
                description:
                  "Comprehensive tracking of workouts, performance metrics, and progress over time with detailed analytics.",
              },
              {
                icon: "fas fa-utensils",
                title: "Diet Planning",
                description:
                  "Personalized nutrition plans based on individual goals, dietary preferences, and performance requirements.",
              },
              {
                icon: "fas fa-robot",
                title: "ML Recommendations",
                description:
                  "AI-powered recommendations for training adjustments, nutrition optimization, and recovery strategies.",
              },
              {
                icon: "fas fa-chalkboard-teacher",
                title: "Coach Management",
                description:
                  "Tools for coaches to monitor athletes, provide feedback, and adjust training programs in real-time.",
              },
              {
                icon: "fas fa-chart-bar",
                title: "Performance Analytics",
                description:
                  "Advanced analytics to identify trends, strengths, weaknesses, and opportunities for improvement.",
              },
              {
                icon: "fas fa-apple-alt",
                title: "Nutrition Guidance",
                description:
                  "Evidence-based nutrition advice tailored to sport-specific requirements and individual metabolism.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2 scroll-animation"
              >
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {feature.icon === "fas fa-running" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 4v16M19 4v16M5 4v16" />
                    </svg>
                  )}
                  {feature.icon === "fas fa-utensils" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                      <path d="M7 2v20" />
                      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z" />
                    </svg>
                  )}
                  {feature.icon === "fas fa-robot" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="11" width="18" height="10" rx="2" />
                      <circle cx="12" cy="5" r="2" />
                      <path d="M12 7v4" />
                      <line x1="8" y1="16" x2="8" y2="16" />
                      <line x1="16" y1="16" x2="16" y2="16" />
                    </svg>
                  )}
                  {feature.icon === "fas fa-chalkboard-teacher" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3v18h18" />
                      <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      <path d="M6 12h12" />
                      <path d="M6 16h12" />
                      <path d="M6 20h6" />
                    </svg>
                  )}
                  {feature.icon === "fas fa-chart-bar" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                      <line x1="3" y1="20" x2="21" y2="20" />
                    </svg>
                  )}
                  {feature.icon === "fas fa-apple-alt" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9A9 9 0 0 1 3 11a9 9 0 0 1 9-9z" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Platform Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 scroll-animation">
              Platform Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto scroll-animation">
              KheloON delivers unique advantages for both athletes and coaches,
              creating a connected ecosystem for optimal performance.
            </p>
          </div>
          <div className="space-y-24">
            {/* For Athletes */}
            <div className="grid md:grid-cols-2 gap-16 items-center scroll-animation">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold text-gray-800 mb-8">
                  For Athletes
                </h3>
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-indigo-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-5">
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">
                        Personalized Training Plans
                      </h4>
                      <p className="text-gray-600">
                        Receive customized training programs that adapt to your
                        progress, goals, and recovery needs in real-time.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-indigo-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-5">
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">
                        AI-Driven Nutrition Advice
                      </h4>
                      <p className="text-gray-600">
                        Get nutrition recommendations powered by machine
                        learning that optimize your diet for performance and
                        recovery.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-indigo-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-5">
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">
                        Progress Tracking
                      </h4>
                      <p className="text-gray-600">
                        Monitor your improvements with comprehensive metrics and
                        visualizations that highlight your development over
                        time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://public.readdy.ai/ai/img_res/f1715f17e128a6e4f989cd6002f30864.jpg"
                  alt="Athlete Benefits"
                  className="rounded-xl shadow-xl w-full h-auto object-cover object-top"
                />
              </div>
            </div>
            {/* For Coaches */}
            <div className="grid md:grid-cols-2 gap-16 items-center scroll-animation">
              <div>
                <img
                  src="https://public.readdy.ai/ai/img_res/fb0583d823e1929efc2571d0f76197ee.jpg"
                  alt="Coach Benefits"
                  className="rounded-xl shadow-xl w-full h-auto object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-8">
                  For Coaches
                </h3>
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-indigo-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-5">
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">
                        Athlete Management Dashboard
                      </h4>
                      <p className="text-gray-600">
                        Oversee all your athletes from a centralized platform
                        with comprehensive insights into their training and
                        nutrition.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-indigo-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-5">
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">
                        Performance Monitoring
                      </h4>
                      <p className="text-gray-600">
                        Track athlete progress with detailed analytics that
                        highlight areas of improvement and potential concerns.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-indigo-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-5">
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">
                        Communication Tools
                      </h4>
                      <p className="text-gray-600">
                        Stay connected with your athletes through integrated
                        messaging, feedback tools, and program adjustments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technology Stack */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-animation">
              Technology Stack
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto scroll-animation">
              KheloON leverages cutting-edge technologies to deliver a seamless,
              intelligent platform for athletes and coaches.
            </p>
          </div>
          <div className="flex flex-wrap justify-center scroll-animation">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  icon: "fas fa-brain",
                  name: "Machine Learning",
                  description:
                    "Advanced algorithms for personalized recommendations",
                },
                {
                  icon: "fas fa-mobile-alt",
                  name: "Mobile App",
                  description: "Native applications for iOS and Android",
                },
                {
                  icon: "fas fa-laptop-code",
                  name: "Web Platform",
                  description: "Responsive dashboard for coaches and admins",
                },
                {
                  icon: "fas fa-cloud",
                  name: "Cloud Infrastructure",
                  description: "Scalable, secure cloud-based architecture",
                },
                {
                  icon: "fas fa-database",
                  name: "Big Data",
                  description: "Processing and analysis of performance metrics",
                },
                {
                  icon: "fas fa-shield-alt",
                  name: "Data Security",
                  description:
                    "Enterprise-grade protection of user information",
                },
                {
                  icon: "fas fa-sync",
                  name: "Real-time Sync",
                  description: "Instant data synchronization across devices",
                },
                {
                  icon: "fas fa-chart-pie",
                  name: "Analytics Engine",
                  description: "Comprehensive performance visualization",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-8 bg-indigo-800/50 rounded-xl transition-all duration-300 hover:bg-indigo-700/50 hover:transform hover:-translate-y-2"
                >
                  <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
                    {tech.icon === "fas fa-brain" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                      </svg>
                    )}
                    {tech.icon === "fas fa-mobile-alt" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="5"
                          y="2"
                          width="14"
                          height="20"
                          rx="2"
                          ry="2"
                        />
                        <line x1="12" y1="18" x2="12" y2="18" />
                      </svg>
                    )}
                    {tech.icon === "fas fa-laptop-code" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    )}
                    {tech.icon === "fas fa-cloud" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                      </svg>
                    )}
                    {tech.icon === "fas fa-database" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                      </svg>
                    )}
                    {tech.icon === "fas fa-shield-alt" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    )}
                    {tech.icon === "fas fa-sync" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                        <path d="M21 3v5h-5" />
                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                        <path d="M8 16H3v5" />
                      </svg>
                    )}
                    {tech.icon === "fas fa-chart-pie" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                        <path d="M22 12A10 10 0 0 0 12 2v10z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">
                    {tech.name}
                  </h3>
                  <p className="text-indigo-200 text-center">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="scroll-animation">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Have questions about KheloON? We're here to help. Reach out to
                our team for more information about our platform.
              </p>
              <form className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="scroll-animation">
              <div className="bg-indigo-50 p-10 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Download Our App
                </h3>
                <p className="text-gray-600 mb-8">
                  Experience the power of KheloON on your mobile device.
                  Download our app today and start your journey to peak
                  performance.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                  <button className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-800 cursor-pointer !rounded-button whitespace-nowrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 mr-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 19c-4.3 0-7.8-3.4-7.8-7.8 0-4.3 3.4-7.8 7.8-7.8 4.3 0 7.8 3.4 7.8 7.8 0 4.3-3.4 7.8-7.8 7.8z" />
                      <path d="M12 19V5" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </button>
                  <button className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-800 cursor-pointer !rounded-button whitespace-nowrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 mr-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </button>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Connect With Us
                </h3>
                <div className="flex space-x-5">
                  {[
                    { icon: "facebook", color: "bg-blue-600" },
                    { icon: "twitter", color: "bg-sky-500" },
                    { icon: "instagram", color: "bg-pink-600" },
                    { icon: "linkedin", color: "bg-blue-700" },
                    { icon: "youtube", color: "bg-red-600" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`${social.color} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300 transform hover:scale-110 cursor-pointer`}
                    >
                      {social.icon === "facebook" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      )}
                      {social.icon === "twitter" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      )}
                      {social.icon === "instagram" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      )}
                      {social.icon === "linkedin" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      )}
                      {social.icon === "youtube" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer !rounded-button whitespace-nowrap"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
      <style jsx>{`
.scroll-animation {
opacity: 0;
transform: translateY(20px);
transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.scroll-animation.active {
opacity: 1;
transform: translateY(0);
}
`}</style>
    </div>
  );
};
export default App;
