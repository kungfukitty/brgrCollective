
import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.15),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering Women in
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Tech & Web3
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
            Providing motivated, underserved women with the access, skills, mentors, and confidence they need to begin careers in trending technological and Web3.0 management services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all inline-flex items-center justify-center group">
              Get Started
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#courses" className="px-8 py-4 bg-white/10 backdrop-blur-lg rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/20">
              Browse Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
