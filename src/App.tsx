import { useMemo, useState } from 'react'
import { Hero } from './components/Hero/Hero'
import { FilterBar } from './components/FilterBar/FilterBar'
import { BuildCard } from './components/BuildCard/BuildCard'
import { BuildModal } from './components/BuildModal/BuildModal'
import { Footer } from './components/Footer/Footer'
import { BUILDS, CATEGORIES } from './data/builds'
import type { Build } from './data/builds'
import './App.scss'

export default function App() {
  const [category, setCategory] = useState('All')
  const [selected, setSelected] = useState<Build | null>(null)

  const filtered = useMemo(
    () => (category === 'All' ? BUILDS : BUILDS.filter((b) => b.category === category)),
    [category],
  )

  return (
    <>
      <Hero />
      <main className="gallery" id="gallery">
        <FilterBar categories={[...CATEGORIES]} active={category} onChange={setCategory} />
        <div className="gallery__grid">
          {filtered.map((b) => (
            <BuildCard key={b.id} build={b} onOpen={() => setSelected(b)} />
          ))}
        </div>
      </main>
      <Footer />
      {selected && <BuildModal build={selected} onClose={() => setSelected(null)} />}
    </>
  )
}