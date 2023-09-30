import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
const url = import.meta.env.VITE_APP_BASE
console.log(url)
  return (
    <>
      
      <h1>Vite + React</h1>
      <Card />
    </>
  )
}

export default App
