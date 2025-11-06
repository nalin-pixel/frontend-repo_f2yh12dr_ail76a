import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#071028] text-white antialiased">
      <NavBar />
      <main>
        <Hero />
        <InfoSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
