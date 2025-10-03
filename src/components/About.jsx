
import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Be the inspired that blossoms to be the inspiration
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              Women are underrepresented in technology jobs, making up only about a quarter of the computing workforce. Despite the rapid growth in computing careers, women's participation has been decreasing since the 1980s.
            </p>
            <p className="text-lg text-slate-300 mb-6">
              BRGRCollective aims to change this narrative by providing comprehensive support, education, and resources to help women break into and thrive in the tech industry.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Growth','Empowering','Support','Inclusion'].map((label, i) => (
              <div key={label} className={`bg-gradient-to-br ${i%2===0 ? 'from-purple-500/20 to-pink-500/20' : 'from-pink-500/20 to-purple-500/20'} backdrop-blur-lg rounded-2xl p-6 border border-white/10`}>
                <div className="text-3xl font-bold mb-2">{label}</div>
                <p className="text-sm text-slate-300">{{
                  'Growth': 'Computing jobs growing at 2x the national rate',
                  'Empowering': 'Technology as a tool for economic freedom',
                  'Support': 'Mentorship and community-driven learning',
                  'Inclusion': 'Closing the gender gap in computer science'
                }[label]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
