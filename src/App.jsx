import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { ThemeProvider } from './components/ThemeProvider'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Scroll } from 'lucide-react'
import { ScrollProgress } from './components/ScrollProgress'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'
import {Contact} from './components/Contact'
import { About } from './components/About'

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <NavBar />
        <ScrollProgress/>
        <main>
          <Hero />
          <Projects />
          <Skills/>
          <About/>
          <Contact/>
        </main>
        <Footer/>
        <BackToTop/>
      </div>
    </ThemeProvider>
  )
}

export default App


const App1 = () => {
  return (
    <div>

      <div className="absolute inset-0 -z-20">
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_2px,transparent_2px)] [background-size:80px_80px]" />
        {/* Fade effect to edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* === Floating Accent Blurs === */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>
    </div>
  )
}
