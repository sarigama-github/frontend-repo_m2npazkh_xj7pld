import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CTA />
        <footer id="contatti" className="py-12 border-t border-white/10 text-white/70">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} CreditoPlus — Tutti i diritti riservati</p>
            <div className="text-sm">P.IVA 00000000000 — OAM n. XXXXX</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
