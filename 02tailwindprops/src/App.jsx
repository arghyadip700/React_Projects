import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-3 rounded-xl mb-4'>Tailwind Project</h1>
      <Card username = "Shreyasi Debnath" btnText = "Portfolio"/>
      <Card username = "Arghyadip Dhara" btnText = "Website"/>
    </>
  )
}

export default App
