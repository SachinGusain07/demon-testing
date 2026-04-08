import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Ticker from './sections/Ticker'
import Services from './sections/Services'
import Work from './sections/Work'
import About from './sections/About'
import Process from './sections/Process'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Work />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
