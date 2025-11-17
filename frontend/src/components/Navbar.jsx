import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight">CreditoPlus</a>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#servizi" className="hover:text-white">Servizi</a>
          <a href="#preventivo" className="hover:text-white">Preventivo</a>
          <a href="#contatti" className="hover:text-white">Contatti</a>
        </div>
        <a href="#preventivo" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-sky-100">Richiedi consulenza</a>
      </nav>
      <div className="h-px w-full bg-white/10" />
    </header>
  )
}

export default Navbar
