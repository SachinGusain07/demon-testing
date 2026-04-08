'use client'

const items = [
  'Social Media Management',
  'Content Creation',
  'Influencer Marketing',
  'Brand Strategy',
  'Videography',
  'Creative Direction',
  'Community Building',
  'Shopify & Amazon',
  'Growth Strategy',
  'Digital Marketing',
]

export default function Ticker() {
  return (
    <div className="bg-ink text-cream py-5 overflow-hidden border-y border-white/10">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6 text-sm tracking-widest uppercase font-medium whitespace-nowrap">
            {item}
            <span className="text-coral text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
