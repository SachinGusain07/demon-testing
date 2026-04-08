'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'We start with a deep-dive conversation — your brand, your goals, your audience, and what is not working. No templates, just listening.',
    duration: '30 min',
  },
  {
    num: '02',
    title: 'Strategy Build',
    desc: 'We craft a custom content and growth roadmap. Platform strategy, posting cadence, content pillars, voice guide, and KPI targets.',
    duration: '1–2 weeks',
  },
  {
    num: '03',
    title: 'Content Creation',
    desc: 'Shoot days, design sessions, caption writing — we produce a full month of content in one focused creative sprint.',
    duration: 'Ongoing',
  },
  {
    num: '04',
    title: 'Launch & Manage',
    desc: 'We schedule, post, engage with your community, monitor performance, and optimize weekly. You focus on running your business.',
    duration: 'Monthly',
  },
  {
    num: '05',
    title: 'Analyze & Grow',
    desc: 'Monthly reports with insights, wins, and next-quarter pivots. We iterate constantly — because what worked last month might not work next month.',
    duration: 'Monthly',
  },
]

export default function Process() {
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const lineRef = useRef(null)
  const stepsRef = useRef([])

  useEffect(() => {
    gsap.fromTo(headRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: headRef.current, start: 'top 85%' } }
    )

    gsap.fromTo(lineRef.current,
      { scaleY: 0 },
      { scaleY: 1, duration: 1.5, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', end: 'bottom 80%', scrub: true } }
    )

    stepsRef.current.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' } }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div ref={headRef} className="mb-20">
          <span className="text-xs tracking-widest uppercase text-coral font-medium mb-4 block">How It Works</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            Our Process.<br />
            <span className="italic text-coral">No Surprises.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-blush/30 hidden md:block">
            <div
              ref={lineRef}
              className="w-full bg-coral origin-top"
              style={{ height: '100%', transformOrigin: 'top' }}
            />
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                ref={el => stepsRef.current[i] = el}
                className="group relative md:pl-20 py-10 border-b border-blush/30 last:border-0"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream border-2 border-blush group-hover:border-coral group-hover:bg-coral transition-all duration-300 items-center justify-center">
                  <span className="text-xs font-bold group-hover:text-cream transition-colors text-ink/40">{step.num}</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <span className="md:hidden text-xs tracking-widest uppercase text-coral font-medium">{step.num}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3 gap-4">
                      <h3 className="font-display text-2xl font-bold group-hover:text-coral transition-colors">
                        {step.title}
                      </h3>
                      <span className="text-xs text-ink/40 border border-blush px-3 py-1 whitespace-nowrap flex-shrink-0">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-ink/60 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
