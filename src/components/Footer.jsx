import React from 'react'

export default function Footer() {
  return (
    <footer id="docs" className="relative bg-[#071028] text-blue-100/80">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} flame.blue — All rights reserved.</p>
          <nav aria-label="Social links">
            <ul className="flex items-center gap-5">
              <li>
                <a className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:rounded" href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">X</a>
              </li>
              <li>
                <a className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:rounded" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
              </li>
              <li>
                <a className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:rounded" href="mailto:hello@flame.blue" aria-label="Email">Email</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
