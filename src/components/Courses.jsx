
import React from 'react'
import { Check } from 'lucide-react'
import { courses } from '../data/constants.js'

export default function Courses() {
  return (
    <section id="courses" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Courses</h2>
          <p className="text-xl text-slate-300">Self-paced, industry-driven programs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/20 group">
              <div className="text-sm text-purple-400 font-semibold mb-2">{course.duration} • Self-paced</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition">{course.title}</h3>
              <p className="text-slate-300 mb-6">{course.description}</p>
              <div className="space-y-2 mb-6">
                {course.topics.map((topic, i) => (
                  <div key={i} className="flex items-center text-sm text-slate-300">
                    <Check className="w-4 h-4 text-purple-400 mr-2" aria-hidden="true" />
                    {topic}
                  </div>
                ))}
              </div>
              <div className="text-3xl font-bold mb-4">${course.price}</div>
              <a href="#contact" className="block w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-center">
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
