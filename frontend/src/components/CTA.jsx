import React from 'react'

const CTA = () => {
  return (
    <section id="preventivo" className="py-20">
      <div className="container mx-auto px-6">
        <div className="glass rounded-2xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Parla con un consulente</h3>
              <p className="text-white/70 mt-2">Analizziamo insieme la tua situazione e individuiamo le soluzioni migliori.</p>
              <ul className="mt-4 text-white/80 text-sm space-y-1 list-disc pl-5">
                <li>Pre-valutazione gratuita</li>
                <li>Confronto offerte</li>
                <li>Assistenza fino al rogito</li>
              </ul>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="Nome e cognome" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-sky-400" />
                <input required type="email" placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-sky-400" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input placeholder="Telefono" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-sky-400" />
                <select className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-sky-400">
                  <option>Mutuo casa</option>
                  <option>Surroga mutuo</option>
                  <option>Mutuo liquidità</option>
                  <option>Mutuo ristrutturazione</option>
                  <option>Mutuo consolidamento debiti</option>
                  <option>Cessione del quinto e prestiti</option>
                </select>
              </div>
              <textarea rows={4} placeholder="Raccontaci le tue esigenze" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-sky-400" />
              <button className="w-full md:w-auto px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-sky-100 transition">Invia richiesta</button>
              <p className="text-white/60 text-xs">Compilando il form acconsenti al trattamento dei dati secondo la privacy policy.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
