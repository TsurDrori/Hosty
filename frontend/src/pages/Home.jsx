import React from 'react'
import { Hero } from '../cmps/HomeHero.jsx'
import InspirationCards from '../cmps/InspirationCards'
import HostBanner from '../cmps/HostBanner.jsx'


export function Home() {
  return (
    <section className="full">
      <Hero />
      <div className="inspiration-container main-root">
        <InspirationCards />
      </div>

      {/* need to add host functionality
      <HostBanner /> */}
      
    </section>
  )
}
