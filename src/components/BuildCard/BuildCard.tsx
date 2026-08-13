import { PixelBuild } from '../PixelBuild/PixelBuild'
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
        <PixelBuild rows={build.grid} seed={build.seed} scale={8} />
        <span
          className={`build-card__diff build-card__diff--${build.difficulty.toLowerCase()}`}
        >
          {build.difficulty}
        </span>
      </div>
      <div className="build-card__meta">
        <h3 className="build-card__name">{build.name}</h3>
        <span className="build-card__blocks">{build.blocks} blocks</span>
      </div>
    </button>
  )
}