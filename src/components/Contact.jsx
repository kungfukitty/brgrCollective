
import React, { useState } from 'react'
import { Mail, MessageSquare, Send, User, Check } from 'lucide-react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    const data = new FormData(e.target)
    const endpoint = 'https://formspree.io/f/mzzjgpqj'

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
      if (response.ok) {
        setFormStatus('success')
        e.target.reset()
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Started Today</h2>
          <p className="text-xl text-slate-300 mb-2">
            Submit the form below and we'll email you a link to access our course platform and payment options
          </p>
          <p className="text-purple-400 font-semibold">
            Check your inbox after submitting - your access link is on its way!
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
          {formStatus === 'success' ? (
            <div className="text-center py-12" role="status" aria-live="polite">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-400" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p className="text-lg text-slate-300 mb-2">
                Your information has been received successfully.
              </p>
              <p className="text-purple-400 font-semibold mb-6">
                Check your email for a link to access our course platform and payment options.
              </p>
              <button
                onClick={() => setFormStatus('idle')}
                className="px-6 py-2.5 bg-white/10 rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Submit Another Form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" aria-describedby="form-helper">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-300">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-300">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-semibold mb-2 text-slate-300">
                  I'm interested in *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                >
                  <option value="">Select an option</option>
                  <option value="Salesforce Build a DreamHouse - $99">Salesforce Build a DreamHouse - $99</option>
                  <option value="SQL Fundamentals - $99">SQL Fundamentals - $99</option>
                  <option value="Intro to Coding - $99">Intro to Coding - $99</option>
                  <option value="Complete Bundle - $275">Complete Bundle (All 3 Courses) - $275 (SAVE $22!)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-300">
                  Message (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" aria-hidden="true" />
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                    placeholder="Tell us about your background and goals..."
                  ></textarea>
                </div>
              </div>

              {formStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm">
                    Oops! There was an error submitting the form. Please try again or email us directly.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all inline-flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? (
                  'Sending...'
                ) : (
                  <>
                    Submit & Get Access Link
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </>
                )}
              </button>

              <p id="form-helper" className="text-center text-sm text-slate-400">
                By submitting this form, you'll receive an email with a link to our course platform where you can complete your enrollment and payment.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
