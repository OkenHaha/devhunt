import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Top from './Components/Top_devs/Top'
import Coders from './Components/Coders/Coders'
import Footer from './Components/Footer/Footer'
import { faker } from '@faker-js/faker'


const list_logo = faker.image.avatar()

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Top/>
      <Coders/>
      <div className="companies">
        <h1 className="title">20k Companies <span>Devhunt</span></h1>
      </div>
      <div className="company_list">
        <div className="list_row">
          <div className="company_logo">
            <img src={list_logo} alt=""/>
          </div>
          <div className="company_logo">
            <img src={list_logo} alt=""/>
          </div>
          <div className="company_logo">
            <img src={list_logo} alt=""/>
          </div>
        </div>
        <div className="list_row">
          <div className="company_logo">
            <img src={list_logo} alt=""/>
          </div>
          <div className="company_logo">
            <img src={list_logo} alt=""/>
          </div>
          <div className="company_logo">
            <img src={list_logo} alt=""/>
          </div>
        </div>
        <div className="list_row">
          <div className="company_logo">
            <img src={list_logo} alt=""/>
          </div>
          <div className="company_logo">
            <img src={list_logo} alt=""/>
          </div>
          <div className="company_logo">
            <img src={list_logo} alt=""/>
          </div>
        </div>
        <div className="list_row">
          <div className="company_logo">
            <img src={list_logo} alt=""/>
          </div>
          <div className="company_logo">
            <img src={list_logo} alt=""/>
          </div>
          <div className="company_logo">
            <img src={list_logo} alt=""/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
