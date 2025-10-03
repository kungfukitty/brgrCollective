
import React from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Courses from './components/Courses.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Nav />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Courses />
        <Pricing />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
