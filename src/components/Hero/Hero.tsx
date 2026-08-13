import { MountainScene } from './MountainScene'
import { BUILDS } from '../../data/builds'
import './Hero.scss'

export function Hero() {
  return (
    <header className="hero">
      <MountainScene />
      <div className="hero__content">
        <p className="hero__kicker">minecraft showcase</p>
        <h1 className="hero__title">Blockcraft</h1>
        <p className="hero__tagline">
          {BUILDS.length} builds sourced from the community — houses, castles, towers, farms and more.
        </p>
      </div>
    </header>
  )
}