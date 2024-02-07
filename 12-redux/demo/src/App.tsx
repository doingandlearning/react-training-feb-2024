import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul>
        <li>useState</li>
        <li>useContext</li>
        <li>useReducer:
          <ul>
            <li>Initial Value</li>
            <li>Reducer</li>
            <li>Combined with useContext</li>
          </ul>        </li>
        <li>Redux</li>
      </ul>
    </>
  )
}

export default App
