import React from 'react'

function FlameIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="flameGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff6a00" />
          <stop offset="100%" stopColor="#ffd699" />
        </linearGradient>
      </defs>
      <path
        d="M32 6c1.5 8.5-4.5 12-8 16-4.4 5.1-3.5 10.9-1.5 14.2 2.5 4.1 7.3 6.8 9.5 10.8 2.8-4.2 7.8-6.5 10.6-11 2.9-4.6 2.5-10.9-1.7-17.3-1.9-2.9-4.4-5.7-8.9-12.7Z"
        fill="url(#flameGrad)"
      />
      <path
        d="M24.5 41.5c.6 4.2 3.5 7.2 7.5 9 5-2 8.5-6.4 8.5-11.5 0-4.5-2.6-7.7-5.4-10.8.9 4.9-2.9 7.7-5.6 10.5-1.6 1.7-2.8 3.1-5 2.8Z"
        fill="#fff"
        opacity=".35"
      />
    </svg>
  )
}

export default function Logo() {
  return (
    <a href="#" className="group inline-flex items-center gap-2" aria-label="flame.blue home">
      <FlameIcon className="w-7 h-7 drop-shadow-[0_0_12px_rgba(255,106,0,0.6)]" />
      <span className="font-semibold tracking-tight text-white group-hover:text-orange-300 transition-colors">
        flame.blue
      </span>
    </a>
  )
}
