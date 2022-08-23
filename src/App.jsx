import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Top from './Components/Top_devs/Top'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Top/>
    </div>
  )
}

export default App
