import { MountainScene } from './MountainScene'
import { BUILDS } from '../../data/builds'
import './Hero.scss'

export function Hero() {
  const totalBlocks = BUILDS.reduce((n, b) => n + b.blocks, 0)
  return (
    <header className="hero">
      <MountainScene />
      <div className="hero__content">
        <p className="hero__kicker">minecraft showcase</p>
        <h1 className="hero__title">Blockcraft</h1>
        <p className="hero__tagline">
          A gallery of Minecraft builds — houses, castles, towers, farms and more.
        </p>
        <div className="hero__stats">
          <span className="hero__stat">{BUILDS.length} builds</span>
          <span className="hero__stat">{totalBlocks.toLocaleString()} blocks</span>
          <span className="hero__stat">vanilla style</span>
        </div>
      </div>
    </header>
  )
}