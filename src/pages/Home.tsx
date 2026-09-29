import Hero from '../components/Hero'
import Impact from '../components/Impact'
import WhatWeDo from '../components/WhatWeDo'
import Challenge from '../components/Challenge'
import About from '../components/About'
import Team from '../components/Team'
import Partners from '../components/Partners'
import Donate from '../components/Donate'
import Volunteer from '../components/Volunteer'
import { useReveal } from '../useReveal'

export default function Home() {
  useReveal()

  return (
    <>
      <Hero />
      <Impact />
      <WhatWeDo />
      <Challenge />
      <About />
      <Team />
      <Partners />
      <Donate />
      <Volunteer />
    </>
  )
}
