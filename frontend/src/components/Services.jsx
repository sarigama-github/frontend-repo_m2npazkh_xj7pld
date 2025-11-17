import React from 'react'
import { Home, RotateCcw, PiggyBank, Wrench, Repeat, CreditCard } from 'lucide-react'

const items = [
  { icon: Home, title: 'Mutuo casa', desc: 'Acquisto prima o seconda casa con condizioni trasparenti e assistenza completa.' },
  { icon: RotateCcw, title: 'Surroga mutuo', desc: 'Trasferisci il mutuo per ottenere tassi più convenienti senza costi.' },
  { icon: PiggyBank, title: 'Mutuo liquidità', desc: 'Ottieni liquidità mantenendo la proprietà dell’immobile a garanzia.' },
  { icon: Wrench, title: 'Mutuo ristrutturazione', desc: 'Finanzia i lavori migliorando efficienza e valore della tua casa.' },
  { icon: Repeat, title: 'Mutuo consolidamento debiti', desc: 'Unisci più prestiti in una sola rata sostenibile.' },
  { icon: CreditCard, title: 'Cessione del quinto e prestiti', desc: 'Soluzioni per dipendenti e pensionati con rate fisse.' },
]

const Services = () => {
  return (
    <section id="servizi" className="relative py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold">Servizi</h2>
        <p className="text-white/70 mt-2">Soluzioni su misura per le tue esigenze finanziarie.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-xl p-6 hover:bg-white/10 transition">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <Icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="text-white/70 mt-2 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.15),rgba(10,15,31,0))]" />
    </section>
  )
}

export default Services
