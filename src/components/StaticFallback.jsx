import React from 'react'

export default function StaticFallback() {
  return (
    <div className="relative w-full h-full">
      <picture>
        <source srcSet="/fallback-hero.webp" type="image/webp" />
        <img
          src="/fallback-hero.jpg"
          alt="Abstract glowing orb with blue and orange accents"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </picture>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#071028]/60 via-[#071028]/30 to-[#071028]" />
    </div>
  )
}
