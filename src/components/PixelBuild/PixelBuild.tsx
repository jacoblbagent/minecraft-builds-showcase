import { useEffect, useRef } from 'react'
import { BLOCKS } from '../../data/builds'
import './PixelBuild.scss'

interface PixelBuildProps {
  rows: string[]
  seed: number
  scale?: number
  className?: string
}

/** Deterministic PRNG so each build's sky + textures are stable across renders. */
function mulberry32(a: number) {
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const SKIES = [
  // day
  { top: '#7ec3e8', bottom: '#e8f4fb', sun: '#fff3b0', clouds: true, stars: false },
  // dusk
  { top: '#2c2a4e', bottom: '#d98a5a', sun: '#ffd9a0', clouds: false, stars: false },
  // night
  { top: '#0b1230', bottom: '#1c2854', sun: '#e8ecff', clouds: false, stars: true },
]

function drawBlock(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  px: number,
  key: string,
  rng: () => number,
) {
  const blk = BLOCKS[key]
  const edge = Math.max(1, Math.round(px * 0.12))

  if (key === 'T') {
    // torch: stick + flame, no base fill
    ctx.fillStyle = blk.dark
    ctx.fillRect(x + px * 0.35, y + px * 0.5, px * 0.3, px * 0.5)
    ctx.fillStyle = '#ffb03a'
    ctx.fillRect(x + px * 0.2, y + px * 0.15, px * 0.6, px * 0.35)
    ctx.fillStyle = '#ffd24a'
    ctx.fillRect(x + px * 0.35, y + px * 0.25, px * 0.3, px * 0.2)
    return
  }

  if (key === 'F') {
    // fence: two posts + rails
    ctx.fillStyle = blk.light
    ctx.fillRect(x + px * 0.15, y, px * 0.25, px)
    ctx.fillRect(x + px * 0.6, y, px * 0.25, px)
    ctx.fillStyle = blk.base
    ctx.fillRect(x, y + px * 0.25, px, px * 0.2)
    ctx.fillRect(x, y + px * 0.6, px, px * 0.2)
    return
  }

  if (key === 'A') {
    // anvil: dark base, mid body, light top
    ctx.fillStyle = '#3f3f3f'
    ctx.fillRect(x + px * 0.15, y + px * 0.65, px * 0.7, px * 0.35)
    ctx.fillStyle = blk.base
    ctx.fillRect(x + px * 0.25, y + px * 0.45, px * 0.5, px * 0.25)
    ctx.fillStyle = blk.light
    ctx.fillRect(x + px * 0.1, y + px * 0.25, px * 0.8, px * 0.2)
    return
  }

  // base fill + texture noise
  ctx.fillStyle = blk.base
  ctx.fillRect(x, y, px, px)
  if (blk.noise > 0) {
    for (let i = 0; i < blk.noise; i++) {
      ctx.fillStyle = rng() < 0.5 ? blk.dark : blk.light
      ctx.fillRect(x + Math.floor(rng() * px), y + Math.floor(rng() * px), 1, 1)
    }
  }

  // per-block detail
  switch (key) {
    case 'G':
      // grass: green cap on dirt
      ctx.fillStyle = '#5fa83f'
      ctx.fillRect(x, y, px, px * 0.35)
      ctx.fillStyle = '#8fd96b'
      ctx.fillRect(x, y, px, Math.max(1, px * 0.1))
      break
    case 'O':
      // log: vertical bark stripes
      ctx.fillStyle = blk.light
      ctx.fillRect(x + px * 0.3, y, px * 0.15, px)
      ctx.fillStyle = blk.dark
      ctx.fillRect(x + px * 0.65, y, px * 0.2, px)
      ctx.fillStyle = '#8d744a'
      ctx.fillRect(x, y, px, Math.max(1, px * 0.15))
      break
    case 'g':
      // glass: glint
      ctx.fillStyle = 'rgba(255,255,255,0.75)'
      ctx.fillRect(x + px * 0.15, y + px * 0.15, px * 0.3, px * 0.12)
      break
    case 'B':
      // brick mortar
      ctx.fillStyle = 'rgba(235, 215, 205, 0.55)'
      ctx.fillRect(x, y + px * 0.48, px, Math.max(1, px * 0.1))
      ctx.fillRect(x + px * 0.48, y, Math.max(1, px * 0.1), px * 0.48)
      ctx.fillRect(x + px * 0.22, y + px * 0.5, Math.max(1, px * 0.1), px * 0.5)
      break
    case 'R':
      // stone brick mortar
      ctx.fillStyle = 'rgba(60, 60, 60, 0.55)'
      ctx.fillRect(x, y + px * 0.48, px, Math.max(1, px * 0.1))
      ctx.fillRect(x + px * 0.48, y, Math.max(1, px * 0.1), px * 0.48)
      ctx.fillRect(x + px * 0.22, y + px * 0.5, Math.max(1, px * 0.1), px * 0.5)
      break
    case 'Q':
      ctx.fillStyle = 'rgba(160, 160, 150, 0.5)'
      ctx.fillRect(x, y + px * 0.48, px, Math.max(1, px * 0.1))
      break
    case 'N':
      ctx.fillStyle = '#2c1717'
      ctx.fillRect(x, y + px * 0.5, px, Math.max(1, px * 0.12))
      break
    case 'Z':
      // obsidian: purple flecks
      ctx.fillStyle = 'rgba(138, 58, 201, 0.5)'
      ctx.fillRect(x + Math.floor(rng() * px), y + Math.floor(rng() * px), 1, 1)
      ctx.fillRect(x + Math.floor(rng() * px), y + Math.floor(rng() * px), 1, 1)
      break
    case 'W':
    case 'L':
    case 'K':
      // plank seams
      ctx.fillStyle = blk.dark
      ctx.fillRect(x, y + px * 0.33, px, Math.max(1, px * 0.08))
      ctx.fillRect(x, y + px * 0.66, px, Math.max(1, px * 0.08))
      ctx.fillStyle = blk.light
      ctx.fillRect(x + px * 0.5, y, Math.max(1, px * 0.08), px)
      break
    case 'H':
      ctx.fillStyle = blk.dark
      ctx.fillRect(x, y + px * 0.5, px, Math.max(1, px * 0.1))
      ctx.fillStyle = blk.light
      ctx.fillRect(x, y, px, Math.max(1, px * 0.12))
      break
    case 'w':
      // wheat: green base, golden stalks
      ctx.fillStyle = '#3f7a26'
      ctx.fillRect(x, y + px * 0.45, px, px * 0.55)
      ctx.fillStyle = '#d4b04a'
      for (let i = 0; i < 4; i++) {
        ctx.fillRect(x + Math.floor(rng() * px), y + Math.floor(rng() * px * 0.4), 1, px * 0.5)
      }
      break
    case 'm':
      // mushroom cap spots
      ctx.fillStyle = '#e8dcc8'
      ctx.fillRect(x + px * 0.2, y + px * 0.25, px * 0.2, px * 0.2)
      ctx.fillRect(x + px * 0.6, y + px * 0.15, px * 0.2, px * 0.2)
      ctx.fillRect(x + px * 0.4, y + px * 0.55, px * 0.2, px * 0.2)
      break
    case 'h':
      ctx.fillStyle = 'rgba(140, 120, 95, 0.4)'
      ctx.fillRect(x + px * 0.7, y, Math.max(1, px * 0.15), px)
      break
    case 'p':
      // nether portal swirl
      ctx.fillStyle = 'rgba(201, 106, 240, 0.7)'
      ctx.fillRect(x + Math.floor(rng() * px), y + Math.floor(rng() * px), 1, 2)
      ctx.fillStyle = 'rgba(138, 58, 201, 0.6)'
      ctx.fillRect(x + Math.floor(rng() * px), y + Math.floor(rng() * px), 1, 2)
      break
    case 'r':
      ctx.fillStyle = blk.light
      ctx.fillRect(x, y, px, Math.max(1, px * 0.12))
      break
  }

  // bevel + outline for the blocky Minecraft look
  ctx.fillStyle = 'rgba(255, 255, 255, 0.14)'
  ctx.fillRect(x, y, px, edge)
  ctx.fillStyle = 'rgba(0, 0, 0, 0.22)'
  ctx.fillRect(x, y + px - edge, px, edge)
  ctx.strokeStyle = 'rgba(6, 8, 6, 0.55)'
  ctx.lineWidth = 1
  ctx.strokeRect(x + 0.5, y + 0.5, px - 1, px - 1)
}

function renderScene(
  ctx: CanvasRenderingContext2D,
  rows: string[],
  w: number,
  h: number,
  scale: number,
  seed: number,
) {
  const rng = mulberry32(seed)
  const sky = SKIES[seed % SKIES.length]

  // sky gradient
  const grad = ctx.createLinearGradient(0, 0, 0, h)
  grad.addColorStop(0, sky.top)
  grad.addColorStop(1, sky.bottom)
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)

  // sun / moon + stars
  const cx = w * (0.15 + rng() * 0.7)
  const cy = h * (0.12 + rng() * 0.14)
  if (sky.stars) {
    for (let i = 0; i < 26; i++) {
      ctx.fillStyle = rng() < 0.7 ? '#ffffff' : 'rgba(200, 210, 230, 0.7)'
      ctx.fillRect(rng() * w, rng() * h * 0.45, 1, 1)
    }
    ctx.fillStyle = '#e8ecff'
    ctx.fillRect(cx, cy, 7, 7)
    ctx.fillStyle = sky.top
    ctx.fillRect(cx + 3, cy + 1, 4, 5)
  } else {
    ctx.fillStyle = 'rgba(255, 240, 180, 0.25)'
    ctx.fillRect(cx - 5, cy - 5, 17, 17)
    ctx.fillStyle = 'rgba(255, 240, 180, 0.5)'
    ctx.fillRect(cx - 2, cy - 2, 11, 11)
    ctx.fillStyle = sky.sun
    ctx.fillRect(cx, cy, 7, 7)
  }

  // clouds
  if (sky.clouds) {
    for (let i = 0; i < 3; i++) {
      const bx = rng() * w * 0.8
      const by = h * (0.08 + rng() * 0.2)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)'
      ctx.fillRect(bx, by, 6, 2)
      ctx.fillRect(bx + 2, by - 1, 3, 1)
    }
  }

  // blocks
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r]
    for (let c = 0; c < row.length; c++) {
      const key = row[c]
      if (key === ' ') continue
      drawBlock(ctx, c * scale, r * scale, scale, key, rng)
    }
  }
}

export function PixelBuild({ rows, seed, scale = 8, className }: PixelBuildProps) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const dpr = window.devicePixelRatio || 1
    const w = rows[0].length * scale
    const h = rows.length * scale
    canvas.width = Math.round(w * dpr)
    canvas.height = Math.round(h * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.imageSmoothingEnabled = false
    renderScene(ctx, rows, w, h, scale, seed)
  }, [rows, seed, scale])

  return (
    <canvas
      ref={ref}
      className={`pixel-build${className ? ` ${className}` : ''}`}
      aria-hidden="true"
    />
  )
}
