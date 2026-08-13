import './FilterBar.scss'

interface FilterBarProps {
  categories: string[]
  active: string
  onChange: (category: string) => void
}

export function FilterBar({ categories, active, onChange }: FilterBarProps) {
  return (
    <nav className="filter-bar" aria-label="Filter builds by category">
      <div className="filter-bar__inner">
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
    </nav>
  )
}