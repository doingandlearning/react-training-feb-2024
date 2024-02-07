import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from './redux/actions'


function App() {
  const products = useSelector(s => s.products)
  const dispatch = useDispatch()

  function handleClick() {

    dispatch(addProduct("Cool thing", 120))
  }
  //   useSelector(store => store.products)
  return (
    <>
      <button onClick={handleClick}>Add</button>
      {JSON.stringify(products)}
    </>
  )
}

export default App
