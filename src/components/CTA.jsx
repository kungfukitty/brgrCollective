
import React from 'react'

export default function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join our community of motivated women breaking barriers in technology
          </p>
          <a href="#contact" className="inline-block px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all">
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  )
}
