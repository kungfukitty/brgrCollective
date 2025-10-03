
import React from 'react'
import { Check } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Special Bundle Offer</h2>
          <p className="text-xl text-slate-300">Save when you enroll in all three courses</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="text-center">
              <div className="text-lg text-slate-300 mb-2">Individual Course</div>
              <div className="text-5xl font-bold mb-2">$99</div>
              <div className="text-slate-400 mb-8">per course</div>
              <ul className="text-left space-y-4 mb-8">
                {['Self-paced learning','Access to course materials','Community support'].map(item => (
                  <li key={item} className="flex items-start">
                    <Check className="w-5 h-5 text-purple-400 mr-3 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block w-full py-3 bg-white/10 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20 text-center">
                Get Started
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 border-2 border-purple-500/50 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-1.5 rounded-full text-sm font-semibold">
              BEST VALUE
            </div>
            <div className="text-center">
              <div className="text-lg text-slate-300 mb-2">Complete Bundle</div>
              <div className="text-5xl font-bold mb-2">$275</div>
              <div className="text-purple-400 mb-2">Save $22!</div>
              <div className="text-slate-400 mb-8">all three courses</div>
              <ul className="text-left space-y-4 mb-8">
                {['All course materials','Priority mentorship access','Career placement support','Exclusive networking events'].map(item => (
                  <li key={item} className="flex items-start">
                    <Check className="w-5 h-5 text-purple-400 mr-3 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                Get Bundle
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
