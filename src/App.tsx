import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Impact from './components/Impact'
import WhatWeDo from './components/WhatWeDo'
import Challenge from './components/Challenge'
import About from './components/About'
import Team from './components/Team'
import Partners from './components/Partners'
import Donate from './components/Donate'
import Volunteer from './components/Volunteer'
import Footer from './components/Footer'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <WhatWeDo />
        <Challenge />
        <About />
        <Team />
        <Partners />
        <Donate />
        <Volunteer />
      </main>
      <Footer />
    </>
  )
}
