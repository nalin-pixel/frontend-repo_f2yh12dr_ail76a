import React, { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef(null)

  useEffect(() => {
    // Ensure hero is full height minus small safe area on mobile
    const el = containerRef.current
    if (!el) return
    const setH = () => {
      el.style.minHeight = `${window.innerHeight}px`
    }
    setH()
    window.addEventListener('resize', setH)
    return () => window.removeEventListener('resize', setH)
  }, [])

  const floatAnim = prefersReducedMotion
    ? {}
    : {
        y: [0, -8, 0],
        rotate: [0, 2, 0],
        transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
      }

  return (
    <section
      ref={containerRef}
      className="relative isolate flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/KeusF4lUkfKzhtGY/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#071028]/60 via-[#071028]/30 to-[#071028]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24 sm:py-28 md:py-32 text-center">
        <div className="flex items-center gap-2 justify-center mb-6">
          <span className="inline-flex h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_18px_2px_rgba(255,106,0,0.85)]" />
          <span className="text-orange-300/90 text-sm tracking-wide uppercase">Modern, techy, warm</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(11,102,255,0.35)]">
          ignite intelligent experiences
        </h1>
        <p className="mt-5 text-base sm:text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Build immersive, accessible interfaces powered by AI—fast, beautiful, and production-ready.
        </p>

        <motion.div
          className="mt-8 flex items-center justify-center gap-3 sm:gap-4"
          aria-label="Primary actions"
          {...floatAnim}
        >
          <a
            href="#demo"
            className="group inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-orange-500/30 ring-1 ring-orange-400/40 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-400 focus-visible:ring-offset-[#071028] hover:brightness-95"
            aria-label="Try Demo"
          >
            <span className="mr-2 transition-opacity group-hover:opacity-90">Try Demo</span>
          </a>
          <a
            href="#docs"
            className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur px-5 py-3 text-sm sm:text-base font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60 focus-visible:ring-offset-[#071028]"
            aria-label="Read Docs"
          >
            Docs
          </a>
        </motion.div>

        <p className="sr-only">3D orb with gentle motion and parallax. Motion reduced when user prefers reduced motion.</p>
      </div>
    </section>
  )
}
