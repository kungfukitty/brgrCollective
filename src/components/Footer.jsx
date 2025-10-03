
import React from 'react'
import { Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Sparkles className="w-6 h-6 text-purple-400" aria-hidden="true" />
          <span className="text-xl font-bold">BRGRCollective Charter</span>
        </div>
        <p className="text-slate-400 mb-4">
          Empowering underserved women in tech since 2019
        </p>
        <p className="text-sm text-slate-500">
          © 2025 BRGRCollective Charter. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
