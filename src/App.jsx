import { useState } from 'react'
import { Navigation } from './Components/Navigation'
import Main from './Components/Main'
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer'
import IntroAnimation from './Components/IntroAnimation'

function App() {
  return (
    <>
    <IntroAnimation/>
    <Main/>
    <Portfolio/>
    <Footer/>
    </>
  )
}

export default App
