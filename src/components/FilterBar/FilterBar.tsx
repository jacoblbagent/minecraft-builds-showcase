import { useState } from 'react'
import { createPortal } from 'react-dom'
import './FilterBar.scss'

interface FilterBarProps {
  categories: string[]
  active: string
  query: string
  onQueryChange: (q: string) => void
  onChange: (category: string) => void
}

export function FilterBar({ categories, active, query, onQueryChange, onChange }: FilterBarProps) {
  const [showModal, setShowModal] = useState(false)

  return (
    <nav className="filter-bar" aria-label="Filter builds by category">
      <div className="filter-bar__inner">
        <button
          className={`filter-bar__filter-btn${active !== 'All' ? ' filter-bar__filter-btn--active' : ''}`}
          onClick={() => setShowModal(true)}
          aria-label="Filter by category"
        >
          {active !== 'All' ? (
            <span className="filter-bar__filter-label">{active}</span>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
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

      {showModal &&
        createPortal(
          <div className="filter-bar__overlay" onClick={() => setShowModal(false)}>
            <div className="filter-bar__modal" onClick={(e) => e.stopPropagation()}>
              <div className="filter-bar__modal-chips">
                <h3 className="filter-bar__modal-heading">Filter by Type</h3>
                {categories.map((c) => (
                  <button
                    key={c}
                    className={`filter-bar__chip${c === active ? ' filter-bar__chip--active' : ''}`}
                    onClick={() => {
                      onChange(c)
                      setShowModal(false)
                    }}
                    aria-pressed={c === active}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </nav>
  )
}