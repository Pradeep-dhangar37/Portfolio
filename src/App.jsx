import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { InteractiveBubble } from './components/InteractiveBubble'

function App() {


  return (
    <>
      <InteractiveBubble />
      <Nav />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
