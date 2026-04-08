import './globals.css'

export const metadata = {
  title: 'Demon Media | Social Media & Content Strategy',
  description: 'demon testing | Founder of Demon Media — Social Media Management, Influencer Marketing, Content Creation & Brand Strategy based in Boston, MA.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
