'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const formRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })

  useEffect(() => {
    gsap.fromTo(headRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: headRef.current, start: 'top 80%' } }
    )
    gsap.fromTo(formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, scrollTrigger: { trigger: formRef.current, start: 'top 80%' } }
    )
  }, [])

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    gsap.to(formRef.current, { opacity: 0, y: -20, duration: 0.4, onComplete: () => setSubmitted(true) })
  }

  const services = [
    'Social Media Management',
    'Content Creation',
    'Influencer Marketing',
    'Brand Strategy',
    'Videography',
    'E-Commerce Growth',
    'Full-Service Package',
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-8 md:px-16 bg-ink text-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-coral/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blush/5 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Left: Header + info */}
          <div ref={headRef} className="space-y-10">
            <div>
              <span className="text-xs tracking-widest uppercase text-coral font-medium mb-4 block">Get In Touch</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight">
                Let's Build<br />
                Something<br />
                <span className="italic text-coral">Unforgettable.</span>
              </h2>
            </div>

            <p className="text-cream/60 leading-relaxed max-w-sm">
              Ready to take your social media from "fine" to phenomenal? We'd love to hear about your brand and goals.
            </p>

            <div className="space-y-6">
              <a href="mailto:brookevescera@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-white/20 group-hover:border-coral group-hover:bg-coral rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-cream/40 tracking-widest uppercase mb-1">Email</div>
                  <div className="hover-line text-cream/80 group-hover:text-cream transition-colors">brookevescera@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-cream/40 tracking-widest uppercase mb-1">Location</div>
                  <div className="text-cream/80">Boston, MA — Available Worldwide</div>
                </div>
              </div>

              <a href="https://www.linkedin.com/in/brooke-vescera/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-white/20 group-hover:border-coral group-hover:bg-coral rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-cream/40 tracking-widest uppercase mb-1">LinkedIn</div>
                  <div className="hover-line text-cream/80 group-hover:text-cream transition-colors">Brooke Vescera</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 rounded-full bg-coral/20 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl font-bold mb-4">Message Received!</h3>
                <p className="text-cream/60">Brooke will be in touch within 24 hours. Can't wait to connect.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-cream/40 mb-2">Your Name *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full bg-white/5 border border-white/20 focus:border-coral px-4 py-3 text-cream placeholder-cream/20 outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-cream/40 mb-2">Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@brand.com"
                      className="w-full bg-white/5 border border-white/20 focus:border-coral px-4 py-3 text-cream placeholder-cream/20 outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-cream/40 mb-2">Brand / Company</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Brand Name"
                    className="w-full bg-white/5 border border-white/20 focus:border-coral px-4 py-3 text-cream placeholder-cream/20 outline-none transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-cream/40 mb-2">Service Interested In *</label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 focus:border-coral px-4 py-3 text-cream outline-none transition-colors text-sm appearance-none"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <option value="" style={{ background: '#0D0D0D' }}>Select a service...</option>
                    {services.map(s => (
                      <option key={s} value={s} style={{ background: '#0D0D0D' }}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-cream/40 mb-2">Tell Me About Your Brand *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are your goals? What's not working? Where do you want to be in 6 months?"
                    className="w-full bg-white/5 border border-white/20 focus:border-coral px-4 py-3 text-cream placeholder-cream/20 outline-none transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-coral text-cream py-4 text-sm tracking-widest uppercase font-medium hover:bg-cream hover:text-ink transition-colors duration-300 flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <p className="text-cream/30 text-xs text-center">
                  Typical response time: within 24 hours
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
