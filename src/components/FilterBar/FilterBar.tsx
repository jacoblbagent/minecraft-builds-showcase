import './FilterBar.scss'

interface FilterBarProps {
  categories: string[]
  active: string
  query: string
  onQueryChange: (q: string) => void
  onChange: (category: string) => void
}

export function FilterBar({ categories, active, query, onQueryChange, onChange }: FilterBarProps) {
  return (
    <nav className="filter-bar" aria-label="Filter builds by category">
      <div className="filter-bar__inner">
        <input
          className="filter-bar__search"
          type="search"
          placeholder="Search builds…"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          aria-label="Search builds by name or creator"
        />
        <div className="filter-bar__chips">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-bar__chip${c === active ? ' filter-bar__chip--active' : ''}`}
              onClick={() => onChange(c)}
              aria-pressed={c === active}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}