import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Exemplo1 from './components/Exemplo1'
import Exemplo2 from './components/Exemplo2'

function App() {

  
  return (
    <>
    <h1>useEffect no React</h1>
    <main>
      <Exemplo1></Exemplo1>
      <Exemplo2></Exemplo2>
    </main>
    </>
  )
}

export default App
