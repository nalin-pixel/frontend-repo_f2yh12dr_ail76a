import React from 'react'
import Logo from './Logo'

export default function NavBar() {
  return (
    <header className="absolute left-0 right-0 top-0 z-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-5">
          <Logo />
          <nav aria-label="Primary navigation" className="hidden sm:block">
            <ul className="flex items-center gap-6 text-sm text-white/90">
              <li><a href="#demo" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:rounded">Demo</a></li>
              <li><a href="#docs" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:rounded">Docs</a></li>
              <li>
                <a href="#" className="inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-white font-semibold text-sm ring-1 ring-orange-400/40 hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-400 focus-visible:ring-offset-[#071028]">
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
