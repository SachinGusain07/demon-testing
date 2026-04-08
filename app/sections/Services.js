'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    num: '01',
    title: 'Social Media Management',
    desc: 'Full-service management of your Instagram, TikTok, Facebook & LinkedIn. Strategy, scheduling, community management, and analytics reporting.',
    tags: ['Instagram', 'TikTok', 'LinkedIn', 'Facebook'],
    icon: '◎',
  },
  {
    num: '02',
    title: 'Content Creation',
    desc: 'Scroll-stopping visuals, captions, and video content crafted to reflect your brand voice and convert audiences into loyal customers.',
    tags: ['Photography', 'Video', 'Copywriting', 'Graphics'],
    icon: '◈',
  },
  {
    num: '03',
    title: 'Influencer Marketing',
    desc: 'Strategic influencer partnerships — from nano to macro creators — that authentically amplify your brand to the right audiences.',
    tags: ['Sourcing', 'Negotiation', 'Campaign Mgmt', 'Analytics'],
    icon: '◇',
  },
  {
    num: '04',
    title: 'Brand Strategy',
    desc: 'Build a cohesive, magnetic brand identity. Voice, aesthetic, positioning, and messaging frameworks that make you unforgettable.',
    tags: ['Brand Voice', 'Visual Identity', 'Positioning', 'Messaging'],
    icon: '◉',
  },
  {
    num: '05',
    title: 'Videography',
    desc: 'Cinematic brand videos, Reels, and TikToks that stop thumbs mid-scroll. From concept to post-production, we do it all.',
    tags: ['Reels', 'Brand Films', 'Product Video', 'Editing'],
    icon: '◐',
  },
  {
    num: '06',
    title: 'E-Commerce Growth',
    desc: 'Specialized in Shopify and Amazon brand presence — social-to-sale funnels, product photography, and review-building strategies.',
    tags: ['Shopify', 'Amazon', 'Conversion', 'Funnels'],
    icon: '◑',
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    gsap.fromTo(headRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1,
        scrollTrigger: { trigger: headRef.current, start: 'top 85%' }
      }
    )

    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.8, delay: (i % 3) * 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%' }
        }
      )
    })
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-xs tracking-widest uppercase text-coral font-medium mb-4 block">What We Do</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold">
              Services Built<br />
              <span className="italic text-coral">to Convert.</span>
            </h2>
          </div>
          <p className="text-ink/60 max-w-xs leading-relaxed">
            Every service is tailored to your brand's unique goals — no cookie-cutter strategies here.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-blush/30">
          {services.map((s, i) => (
            <div
              key={s.num}
              ref={el => cardsRef.current[i] = el}
              className="group bg-cream p-10 hover:bg-ink transition-colors duration-500 relative overflow-hidden"
              data-cursor
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-coral group-hover:w-full transition-all duration-500" />

              <div className="flex items-start justify-between mb-8">
                <span className="text-4xl text-coral/30 group-hover:text-coral/60 transition-colors font-display">{s.icon}</span>
                <span className="text-xs tracking-widest text-ink/30 group-hover:text-cream/30 transition-colors">{s.num}</span>
              </div>

              <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-cream transition-colors">
                {s.title}
              </h3>
              <p className="text-ink/60 group-hover:text-cream/60 transition-colors text-sm leading-relaxed mb-8">
                {s.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {s.tags.map(tag => (
                  <span key={tag} className="text-xs border border-blush group-hover:border-white/20 text-ink/50 group-hover:text-cream/50 transition-colors px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-8 right-8 w-8 h-8 flex items-center justify-center border border-blush/50 group-hover:border-white/20 group-hover:bg-coral rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
