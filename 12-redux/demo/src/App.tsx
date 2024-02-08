import './App.css'
import React from "react";
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';

function App() {

  React.useEffect(() => { fetchAndUpdateState() }, [])

  async function fetchAndUpdateState() {
    try {
      const response = await fetch("https://api.github.com/users")
      if (!response.ok) throw new Error("Something went wrong")
      const data = await response.json()

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <ProductList />
      <AddProductForm />
    </>
  )
}

export default App
