import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Top from './Components/Top_devs/Top'
import Dev_Card from './Components/DevCard/Dev_Card'
function App() {
  return (
    <div className="App">
      <Dev_Card/>
    </div>
  )
}

export default App
