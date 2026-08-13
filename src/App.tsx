import { useMemo, useState } from 'react'
import { FilterBar } from './components/FilterBar/FilterBar'
import { BuildCard } from './components/BuildCard/BuildCard'
import { BuildModal } from './components/BuildModal/BuildModal'
import { Footer } from './components/Footer/Footer'
import { BUILDS, CATEGORIES } from './data/builds'
import type { Build } from './data/builds'
import './App.scss'

export default function App() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Build | null>(null)

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return BUILDS.filter((b) => {
      if (category !== 'All' && b.category !== category) return false
      if (q) {
        const name = b.name.toLowerCase()
        const creator = (b.creator ?? '').toLowerCase()
        if (!name.includes(q) && !creator.includes(q)) return false
      }
      return true
    })
  }, [category, query])

  return (
    <>
      <main className="gallery" id="gallery">
        <FilterBar
          categories={[...CATEGORIES]}
          active={category}
          query={query}
          onQueryChange={setQuery}
          onChange={setCategory}
        />
        <div className="gallery__grid">
          {filtered.length === 0 ? (
            <p className="gallery__empty">No builds match your search.</p>
          ) : (
            filtered.map((b) => (
              <BuildCard key={b.id} build={b} onOpen={() => setSelected(b)} />
            ))
          )}
        </div>
      </main>
      <Footer />
      {selected && <BuildModal build={selected} onClose={() => setSelected(null)} />}
    </>
  )
}