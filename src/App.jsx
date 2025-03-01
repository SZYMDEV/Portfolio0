import { useState } from 'react'
import PortfolioPage from './Components/PortfolioPage.jsx'
import Footer from './Components/Footer.jsx'
import IntroAnimation from './Components/IntroAnimation.jsx'
import './App.css'

function App() {
  return (
    <>
      <IntroAnimation/>
      <PortfolioPage/>
      <Footer/>
    </>
  )
}

export default App