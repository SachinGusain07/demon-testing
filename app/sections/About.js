'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const credentials = [
  { label: 'Education', value: 'B.S. Mediated Communication & Creative Writing, Stonehill College' },
  { label: 'Specialty', value: 'Beauty, Wellness & Lifestyle Brands' },
  { label: 'Location', value: 'Boston, MA — Available Worldwide' },
  { label: 'Experience', value: '10+ Years in Digital & Social Media' },
]

export default function About() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const textRef = useRef(null)
  const listRef = useRef([])
  const quoteRef = useRef(null)

  useEffect(() => {
    // Parallax on the visual panel
    gsap.to(imgRef.current, {
      y: -60,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })

    // Text reveal
    gsap.fromTo(textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: textRef.current, start: 'top 80%' } }
    )

    listRef.current.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' } }
      )
    })

    gsap.fromTo(quoteRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: quoteRef.current, start: 'top 80%' } }
    )
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Visual panel */}
          <div className="relative">
            <div ref={imgRef} className="relative">
              {/* Main card */}
              <div className="aspect-[4/5] bg-blush/30 relative overflow-hidden">
                {/* Abstract portrait placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                  {/* Geometric portrait representation */}
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full bg-blush border-4 border-cream flex items-center justify-center">
                      <span className="font-display text-6xl italic font-bold text-coral">B</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-coral rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✦</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-2xl font-bold">Brooke Vescera</div>
                    <div className="text-ink/50 text-sm mt-1 tracking-widest uppercase">Founder, Demon Media</div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-6 left-6 w-16 h-16 border border-coral/30" />
                <div className="absolute bottom-6 right-6 w-16 h-16 border border-coral/30" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-8 -right-8 bg-coral text-cream p-6 w-48">
                <div className="font-display text-4xl font-bold">10+</div>
                <div className="text-cream/80 text-xs mt-1 tracking-widest uppercase">Years in Digital Media</div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div ref={textRef} className="pt-8 space-y-10">
            <div>
              <span className="text-xs tracking-widest uppercase text-coral font-medium mb-4 block">The Founder</span>
              <h2 className="font-display text-5xl font-bold leading-tight">
                Hi, I'm Brooke.<br />
                <span className="italic text-coral">Nice to Meet You.</span>
              </h2>
            </div>

            <div className="space-y-4 text-ink/70 leading-relaxed">
              <p>
                I started Demon Media after years of growing brands from the inside — managing social channels for Rare Beauty, Patchology, and Dr. Dana. I saw firsthand what separates brands that scroll by from brands that stop thumbs cold.
              </p>
              <p>
                With a background in Mediated Communication and Creative Writing from Stonehill College, I bring both the strategy <em>and</em> the storytelling. Every brand has a story worth telling — I help you tell it in a way that converts.
              </p>
              <p>
                Demon Media specializes in beauty, wellness, and lifestyle brands. We don't do one-size-fits-all. We do deeply personal, culturally-aware content that builds communities — not just follower counts.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-0 border-t border-blush/30">
              {credentials.map((c, i) => (
                <div
                  key={c.label}
                  ref={el => listRef.current[i] = el}
                  className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 py-4 border-b border-blush/30"
                >
                  <span className="text-xs tracking-widest uppercase text-coral font-medium min-w-24">{c.label}</span>
                  <span className="text-ink/70 text-sm">{c.value}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-ink text-ink px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-ink hover:text-cream transition-colors duration-300"
            >
              Work With Brooke
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Pull quote */}
        <div ref={quoteRef} className="mt-32 text-center max-w-4xl mx-auto">
          <div className="text-6xl text-coral/20 font-display mb-4 leading-none">"</div>
          <blockquote className="font-display text-3xl md:text-4xl italic font-bold leading-relaxed text-ink">
            Great social media isn't about posting more. It's about saying the{' '}
            <span className="text-coral">right thing</span>, to the{' '}
            <span className="text-coral">right people</span>, at exactly the right moment.
          </blockquote>
          <cite className="block mt-6 text-sm tracking-widest uppercase text-ink/40 not-italic">
            — Brooke Vescera, Founder
          </cite>
        </div>
      </div>
    </section>
  )
}
