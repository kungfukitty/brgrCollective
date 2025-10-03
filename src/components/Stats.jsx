
import React from 'react'
import { TrendingUp, Users, Award } from 'lucide-react'
import { stats } from '../data/constants.js'

const ICONS = { growth: TrendingUp, women: Users, salary: Award }

export default function Stats() {
  return (
    <section id="impact" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s) => {
            const Icon = ICONS[s.key]
            return (
              <div key={s.key} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/20">
                <Icon className="w-12 h-12 text-purple-400 mb-4" aria-hidden="true" />
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-slate-300">{s.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
