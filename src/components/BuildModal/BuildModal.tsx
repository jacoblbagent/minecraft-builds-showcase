import { useEffect } from 'react'
import { PixelBuild } from '../PixelBuild/PixelBuild'
import { BLOCKS } from '../../data/builds'
import type { Build } from '../../data/builds'
import './BuildModal.scss'

interface BuildModalProps {
  build: Build
  onClose: () => void
}

export function BuildModal({ build, onClose }: BuildModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const palette = [...new Set(build.grid.join('').replace(/\s/g, '').split(''))]

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={build.name} onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="modal__shot">
          <PixelBuild rows={build.grid} seed={build.seed} scale={13} />
        </div>
        <div className="modal__info">
          <h2 className="modal__name">{build.name}</h2>
          <div className="modal__tags">
            <span className="modal__tag">{build.category}</span>
            <span className={`modal__tag modal__tag--${build.difficulty.toLowerCase()}`}>
              {build.difficulty}
            </span>
            <span className="modal__tag">{build.blocks} blocks</span>
          </div>
          <p className="modal__desc">{build.description}</p>
          {build.creator && (
            <p className="modal__credit">
              by{' '}
              <a href={build.sourceUrl} target="_blank" rel="noopener noreferrer">
                {build.creator}
              </a>
              {' '}via Rock Paper Shotgun
            </p>
          )}
          <div className="modal__palette">
            <h3 className="modal__palette-title">Built with</h3>
            <ul className="modal__palette-list">
              {palette.map((key) => (
                <li key={key} className="modal__palette-item">
                  <span className="modal__swatch" style={{ background: BLOCKS[key].base }} />
                  {BLOCKS[key].name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}