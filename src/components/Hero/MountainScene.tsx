import { useEffect, useRef } from 'react'

const PAL = {
  sky: ['#0a1220', '#16233c'],
  deep: ['#101c2e', '#182840', '#203450'],
  far: ['#1e3a3a', '#2a4a4a', '#385c56'],
  mid: ['#2a4a2d', '#3a5e3a', '#4a6e4a'],
  near: ['#3a5e3a', '#4e7250', '#608660'],
  snow: '#dce8dc',
}

function tri(t: number) {
  const p = (((t / (2 * Math.PI)) % 1) + 1) % 1
  return p < 0.5 ? 1 - p * 4 : p * 4 - 3
}

function terrain(x: number, seed: number, layer: number) {
  const s = seed + layer * 1000
  const h1 = tri(x * 0.026 + s) * 0.28
  const h2 = tri(x * 0.062 + s * 1.7) * 0.14
  const h3 = tri(x * 0.014 + s * 0.5) * 0.18
  const h4 = tri(x * 0.106 + s * 2.3) * 0.06
  const h5 = tri(x * 0.22 + s * 3.1) * 0.03
  const h6 = tri(x * 0.44 + s * 4.7) * 0.015
  return Math.max(0.05, 0.58 - layer * 0.14 + h1 + h2 + h3 + h4 + h5 + h6)
}

const stars: { x: number; y: number }[] = []
const seed = Math.floor(Math.random() * 9999)
for (let i = 0; i < 30; i++) {
  const rng = (n: number) => {
    const h = Math.imul(seed * 374761393 + n * 668265263, n ^ (n >>> 13))
    return ((h ^ (h >>> 16)) & 0x7fffffff) / 0x7fffffff
  }
  stars.push({ x: rng(i * 2), y: rng(i * 2 + 1) * 0.38 })
}

export function MountainScene() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const el = canvas
    const ctx = el.getContext('2d')!
    const layers = [
      { speed: 0.08, pal: PAL.far, snow: false },
      { speed: 0.15, pal: PAL.mid, snow: false },
      { speed: 0.4, pal: PAL.near, snow: true },
    ]
    const SAMPLE = 5
    const PX = 4
    let offset = 0
    let raf = 0

    function frame() {
      const dpr = window.devicePixelRatio || 1
      const w = el.offsetWidth
      const h = el.offsetHeight
      if (!h) {
        raf = requestAnimationFrame(frame)
        return
      }
      const cw = Math.round(w * dpr)
      const ch = Math.round(h * dpr)
      if (el.width !== cw || el.height !== ch) {
        el.width = cw
        el.height = ch
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.imageSmoothingEnabled = false

      // sky fill
      ctx.fillStyle = PAL.sky[0]
      ctx.fillRect(0, 0, w, h)

      // sky gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, h)
      skyGrad.addColorStop(0, PAL.sky[0])
      skyGrad.addColorStop(0.6, PAL.sky[1])
      ctx.fillStyle = skyGrad
      ctx.fillRect(0, 0, w, h)

      // stars
      const starH = h * 0.42
      for (const s of stars) {
        if (s.y * h > starH) continue
        const twinkle = Math.sin(offset * 0.05 + s.x * 13 + s.y * 7)
        if (twinkle < -0.3) continue
        ctx.fillStyle = twinkle > 0.3 ? '#ffffff' : 'rgba(200, 210, 230, 0.6)'
        ctx.fillRect(s.x * w, s.y * h, PX, PX)
      }

      // moon
      ctx.fillStyle = '#e8ecff'
      ctx.fillRect(w * 0.82, h * 0.06, 12, 12)
      ctx.fillStyle = PAL.sky[0]
      ctx.fillRect(w * 0.82 + 5, h * 0.06 + 3, 7, 8)

      // mountain layers
      const cols = Math.ceil(w / PX) + 8
      const rows = Math.ceil(h / PX)
      const maxMtnH = Math.floor(rows * 0.75)

      for (let li = 0; li < layers.length; li++) {
        const { speed, pal, snow } = layers[li]
        const lo = offset * speed
        ctx.globalAlpha = 0.45 + (li / (layers.length - 1)) * 0.5

        // sample terrain at SAMPLE intervals
        const heights: number[] = []
        for (let si = 0; si < Math.ceil(cols / SAMPLE) + 1; si++) {
          const c = si * SAMPLE
          const wx = c * PX - lo
          const tx = (((wx % (w * 2)) + w * 2) % (w * 2)) / PX
          const hRaw = terrain(tx, seed, li)
          const hRatio = Math.pow(Math.max(hRaw, 0.05), 0.55)
          heights.push(Math.min(hRatio * maxMtnH, rows) * PX)
        }

        // lerp between samples
        for (let c = 0; c < cols; c++) {
          const ci = Math.floor(c / SAMPLE)
          const t = c / SAMPLE - ci
          const hA = heights[ci]
          const hB = heights[ci + 1] ?? hA
          const colHeight = Math.round(hA + (hB - hA) * t)
          if (colHeight < 1) continue

          const grad = ctx.createLinearGradient(c * PX, h - colHeight, c * PX, h)
          grad.addColorStop(0, pal[pal.length - 1])
          grad.addColorStop(1, pal[0])
          ctx.fillStyle = grad
          ctx.fillRect(c * PX, h - colHeight, PX, colHeight)

          // snow cap
          if (snow) {
            const lerpHRatio = heights[ci] + (heights[ci + 1] ?? heights[ci]) * t
            const colHRatio = lerpHRatio / (maxMtnH * PX)
            if (colHRatio > 0.58) {
              const snowH = Math.round((colHRatio - 0.48) * maxMtnH) * PX
              ctx.fillStyle = PAL.snow
              ctx.fillRect(c * PX, h - colHeight, PX, Math.min(snowH, colHeight))
            }
          }
        }
      }
      ctx.globalAlpha = 1

      offset += window.innerWidth < 540 ? 0.6 : 1.5
      raf = requestAnimationFrame(frame)
    }

    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [])

  return <canvas ref={ref} className="hero__scene" />
}