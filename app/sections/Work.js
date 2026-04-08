'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: '01',
    brand: 'Rare Beauty Brands',
    category: 'Social Media Management',
    result: '+340% engagement rate in 6 months',
    color: '#E8C5B0',
    accent: '#D4614A',
    tags: ['Instagram', 'TikTok', 'Content'],
  },
  {
    id: '02',
    brand: 'Patchology',
    category: 'Influencer Marketing',
    result: '2.4M impressions from campaign',
    color: '#8A9E8C',
    accent: '#0D0D0D',
    tags: ['Influencer', 'Campaign', 'Beauty'],
  },
  {
    id: '03',
    brand: 'Dr. Dana',
    category: 'Content Creation & Brand Strategy',
    result: 'Grew following from 4K → 28K',
    color: '#C9A84C',
    accent: '#0D0D0D',
    tags: ['Brand Voice', 'Content', 'Growth'],
  },
  {
    id: '04',
    brand: 'E-Commerce Brand',
    category: 'Shopify Growth & Social-to-Sale',
    result: '180% increase in social-driven revenue',
    color: '#0D0D0D',
    accent: '#D4614A',
    tags: ['Shopify', 'DTC', 'Ads'],
  },
]

export default function Work() {
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    gsap.fromTo(headRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: headRef.current, start: 'top 85%' } }
    )

    itemsRef.current.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' }
        }
      )
    })
  }, [])

  return (
    <section id="work" ref={sectionRef} className="py-32 px-8 md:px-16 bg-ink text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-xs tracking-widest uppercase text-coral font-medium mb-4 block">Selected Work</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold">
              Results That<br />
              <span className="italic text-blush">Speak Louder.</span>
            </h2>
          </div>
          <a href="#contact" className="self-start md:self-end text-sm tracking-widest uppercase font-medium hover-line text-cream/50 hover:text-cream transition-colors">
            Work With Us →
          </a>
        </div>

        <div className="space-y-4">
          {projects.map((p, i) => (
            <div
              key={p.id}
              ref={el => itemsRef.current[i] = el}
              className="group relative border border-white/10 hover:border-coral/50 p-8 md:p-12 transition-all duration-500 cursor-none overflow-hidden"
              data-cursor
            >
              {/* Hover fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: p.color }}
              />

              <div className="relative z-10 grid md:grid-cols-4 gap-6 items-center">
                <div className="flex items-center gap-6">
                  <span className="font-display text-5xl font-bold text-white/10 group-hover:text-coral/30 transition-colors">
                    {p.id}
                  </span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold group-hover:text-coral transition-colors">
                      {p.brand}
                    </h3>
                    <p className="text-cream/40 text-sm mt-1">{p.category}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 md:justify-center">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-xs border border-white/20 text-cream/50 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="md:col-span-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral" />
                    <span className="text-cream/70 text-sm font-medium">{p.result}</span>
                  </div>
                  <div className="w-10 h-10 border border-white/20 group-hover:border-coral group-hover:bg-coral rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0">
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
