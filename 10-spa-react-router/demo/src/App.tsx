import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'

function App() {

  return (
    <>
      <h1>My Cool App</h1>
      <nav>
        {/* <a href="/">Home</a> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:productId" element={<ProductDetail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
