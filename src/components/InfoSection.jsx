import React from 'react'

export default function InfoSection() {
  return (
    <section id="demo" className="relative bg-gradient-to-b from-[#071028] to-[#0b66ff]">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" aria-hidden="true">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_10%,#0b66ff_0,transparent_35%),radial-gradient(circle_at_80%_0,#ff6a00_0,transparent_30%)]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 text-white/90">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Why flame.blue?</h2>
            <p className="mt-4 text-blue-100/90 leading-relaxed">
              A minimalist surface with maximal depth. Our gradient theme blends deep navy with electric blue,
              accented by a warm orange glow for key actions. Thoughtful motion, strong contrast, and keyboard-first
              navigation make every interaction feel responsive and accessible.
            </p>
            <ul className="mt-6 space-y-3 text-sm sm:text-base">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-orange-400" aria-hidden="true"/>Accessible by default with clear focus states</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-orange-400" aria-hidden="true"/>Responsive, mobile-first design</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-orange-400" aria-hidden="true"/>Subtle, reduced-motion aware animations</li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">Microcopy</h3>
              <p className="mt-3 text-sm text-blue-100/90">Tagline:</p>
              <p className="text-base font-medium text-white">ignite intelligent experiences</p>
              <div className="mt-4 space-y-1 text-sm">
                <p><span className="text-white font-medium">Primary CTA:</span> Try Demo</p>
                <p><span className="text-white font-medium">Secondary CTA:</span> Docs</p>
              </div>
              <div className="mt-6">
                <a href="#docs" className="inline-flex items-center rounded-full bg-orange-500/90 hover:bg-orange-500 text-white px-4 py-2 text-sm font-semibold ring-1 ring-orange-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-400 focus-visible:ring-offset-[#071028]">Read the docs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
