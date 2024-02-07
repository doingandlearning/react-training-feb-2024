import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Products from './components/Products'

function App() {

  return (
    <>
      <h1>My Cool App</h1>
      <nav>
        {/* <a href="/">Home</a> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/product_id" element={<Products />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
