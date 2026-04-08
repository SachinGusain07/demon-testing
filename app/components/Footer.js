export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-cream border-t border-blush/30 py-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <a href="#hero" className="font-display text-3xl italic font-bold text-ink">
              Demon<span className="text-coral">.</span>
            </a>
            <p className="text-ink/40 text-sm mt-2 max-w-xs">
              Social media strategy and content creation for brands that refuse to blend in.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-4">
            {[
              { label: 'Work', href: '#work' },
              { label: 'Services', href: '#services' },
              { label: 'About', href: '#about' },
              { label: 'Process', href: '#process' },
              { label: 'Contact', href: '#contact' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/brooke-vescera/' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-sm text-ink/50 hover:text-coral hover-line transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-blush/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink/30 tracking-widest uppercase">
            © {year} Demon Media. All rights reserved.
          </p>
          <p className="text-xs text-ink/30 tracking-widest uppercase">
            Boston, MA — Available Worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
