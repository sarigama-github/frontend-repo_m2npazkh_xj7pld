import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-sm text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-6 glass">
            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
            Mediatore del credito per privati
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Ottieni il mutuo giusto con una consulenza chiara e trasparente
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Ti affianchiamo dalla pre-valutazione alla firma, confrontando le migliori offerte di banche e finanziarie.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#preventivo" className="px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-sky-100 transition">Richiedi una consulenza</a>
            <a href="#servizi" className="px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/5 transition">Scopri i servizi</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary" />
    </section>
  )
}

export default Hero
