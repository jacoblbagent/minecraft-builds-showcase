import type { Build } from '../../data/builds'
import './BuildCard.scss'

interface BuildCardProps {
  build: Build
  onOpen: () => void
}

export function BuildCard({ build, onOpen }: BuildCardProps) {
  return (
    <button className="build-card" onClick={onOpen} aria-label={`View ${build.name}`}>
      <div className="build-card__shot">
        <img
          className="build-card__img"
          src={build.image}
          alt={build.name}
          loading="lazy"
        />
      </div>
      <div className="build-card__meta">
        <h3 className="build-card__name">{build.name}</h3>
        {build.creator && <span className="build-card__creator">{build.creator}</span>}
      </div>
    </button>
  )
}