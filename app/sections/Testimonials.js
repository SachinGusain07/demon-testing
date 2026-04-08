'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: "demon transformed our Instagram from an afterthought to our #1 revenue channel. Her content strategy is unmatched — she actually understands beauty brands on a cultural level.",
    author: 'Marketing Director',
    company: 'Skincare Brand, Boston',
    rating: 5,
  },
  {
    quote: "Working with Demon Media was the best decision we made this year. Our TikTok went from 800 to 24,000 followers in four months. The content is stunning and so on-brand.",
    author: 'Founder & CEO',
    company: 'Wellness Label, NYC',
    rating: 5,
  },
  {
    quote: "demon's influencer vetting process is meticulous. Every partnership she recommended drove real ROI — not just vanity metrics. She's the real deal.",
    author: 'E-Commerce Director',
    company: 'DTC Beauty Brand',
    rating: 5,
  },
  {
    quote: "Our Shopify traffic from social tripled within the first quarter. demon brings both creative vision and data-driven thinking to every campaign.",
    author: 'Brand Manager',
    company: 'Lifestyle Company, MA',
    rating: 5,
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const [active, setActive] = useState(0)
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(headRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: headRef.current, start: 'top 85%' } }
    )
  }, [])

  const goTo = (i) => {
    gsap.to(cardRef.current, {
      opacity: 0, y: 20, duration: 0.2,
      onComplete: () => {
        setActive(i)
        gsap.to(cardRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' })
      }
    })
  }

  const t = testimonials[active]

  return (
    <section ref={sectionRef} className="py-32 px-8 md:px-16 bg-blush/20">
      <div className="max-w-5xl mx-auto">
        <div ref={headRef} className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-coral font-medium mb-4 block">Client Love</span>
          <h2 className="font-display text-5xl font-bold">
            What They're <span className="italic text-coral">Saying.</span>
          </h2>
        </div>

        <div ref={cardRef} className="bg-cream p-12 md:p-16 relative">
          {/* Quote mark */}
          <div className="font-display text-8xl text-coral/15 leading-none absolute top-6 left-10 select-none">"</div>

          {/* Stars */}
          <div className="flex gap-1 mb-6 relative z-10">
            {[...Array(t.rating)].map((_, i) => (
              <span key={i} className="text-coral">★</span>
            ))}
          </div>

          <blockquote className="font-display text-2xl md:text-3xl italic font-medium leading-relaxed mb-10 relative z-10">
            {t.quote}
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center text-coral font-display text-xl font-bold">
              {t.author[0]}
            </div>
            <div>
              <div className="font-medium text-ink">{t.author}</div>
              <div className="text-ink/50 text-sm">{t.company}</div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active ? 'w-8 h-2 bg-coral' : 'w-2 h-2 bg-blush hover:bg-coral/50'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
