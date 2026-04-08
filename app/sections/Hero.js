'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const line3Ref = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const badgeRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo([line1Ref.current, line2Ref.current, line3Ref.current],
      { y: '110%' },
      { y: '0%', duration: 1.1, stagger: 0.12, ease: 'power4.out' }
    )
    .fromTo(subRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(badgeRef.current,
      { opacity: 0, scale: 0.7, rotate: -10 },
      { opacity: 1, scale: 1, rotate: 0, duration: 0.8, ease: 'back.out(2)' },
      '-=0.6'
    )
    .fromTo(imgRef.current,
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' },
      0.4
    )

    // Floating badge animation
    gsap.to(badgeRef.current, {
      y: -12,
      rotation: 5,
      duration: 2.5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: 1.5,
    })
  }, [])

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background geometric accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blush/20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-sage/10 blur-3xl -z-10 translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 border border-blush bg-white/50 px-4 py-2 text-xs tracking-widest uppercase text-coral font-medium">
            <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
            Boston-Based Creative Studio
          </div>

          <div className="space-y-2">
            <div className="clip-reveal">
              <h1 ref={line1Ref} className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
                Social
              </h1>
            </div>
            <div className="clip-reveal">
              <h1 ref={line2Ref} className="font-display text-6xl md:text-7xl lg:text-8xl font-bold italic text-coral leading-none">
                Media
              </h1>
            </div>
            <div className="clip-reveal">
              <h1 ref={line3Ref} className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
                That Moves.
              </h1>
            </div>
          </div>

          <p ref={subRef} className="text-ink/60 text-lg max-w-md leading-relaxed">
            Demon Media helps brands build an irresistible online presence through bold content, strategic growth, and authentic storytelling. Founded by demon testing.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4 items-center">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-coral text-cream px-8 py-4 font-medium text-sm tracking-widest uppercase hover:bg-ink transition-colors duration-300"
            >
              View Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" className="text-sm tracking-widest uppercase font-medium hover-line text-ink/60 hover:text-ink transition-colors">
              Start a Project
            </a>
          </div>
        </div>

        {/* Right: Visual / Image placeholder */}
        <div ref={imgRef} className="relative hidden md:block">
          <div className="relative aspect-[3/4] bg-blush/40 overflow-hidden">
            {/* Abstract brand visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full border border-coral/30 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-6 rounded-full border border-sage/40 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                <div className="absolute inset-12 rounded-full bg-blush/60 flex items-center justify-center">
                  <span className="font-display text-4xl italic font-bold text-coral">A</span>
                </div>
              </div>
            </div>

            {/* Stats overlaid */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
              {[
                { num: '50+', label: 'Brands Grown' },
                { num: '10M+', label: 'Reach Generated' },
                { num: '5★', label: 'Client Rating' },
              ].map(s => (
                <div key={s.label} className="bg-cream/80 backdrop-blur-sm p-4 text-center">
                  <div className="font-display text-2xl font-bold text-coral">{s.num}</div>
                  <div className="text-xs text-ink/60 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating badge */}
          <div
            ref={badgeRef}
            className="absolute -top-6 -right-6 w-28 h-28 bg-ink text-cream rounded-full flex flex-col items-center justify-center text-center"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Est.</span>
            <span className="font-display text-2xl font-bold text-coral">2024</span>
            <span className="text-xs font-medium tracking-widest uppercase">Boston</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-ink/40 to-transparent" />
      </div>
    </section>
  )
}
