import React from 'react'
import './App.css'
import { IThemeContext, ThemeContext } from './context/ThemeContext'
import { CartContext, ICartContext } from './context/CartContext';
import Product from './components/Product';
import { IItem } from './reducers/cartReducer';
import { faker } from '@faker-js/faker';

// State
// Context
// Reducer

function App() {
  const { theme, toggleTheme } = React.useContext(ThemeContext) as IThemeContext;
  const { state, dispatch } = React.useContext(CartContext) as ICartContext;

  const addItemToCart = (item: IItem) => {
    dispatch({ type: "ADD_ITEM", payload: item })
  }
  return (
    <div className={`container ${theme}-theme`}>
      <p>Theme: <span onClick={() => toggleTheme()}>{theme}</span></p>
      <h1>Shopping Cart </h1>
      <p>Cart total: £{state.items.reduce((a, c) => a + parseFloat(c.price), 0)}</p>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear cart</button>

      <button onClick={() => addItemToCart({
        id: `${Date.now()}`,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url({ width: 100, height: 100 })
      })}>Add item</button>
      {state.items.map(item => <Product item={item} key={item.id} />)}
    </div>
  )
}

export default App
