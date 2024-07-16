import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  let [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    // counter = counter + 1
    if(counter<20){
      setCounter(counter + 1)
    }
  }

  const decreaseValue = () => {
    if(counter>0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={decreaseValue}
      >Decrease value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
