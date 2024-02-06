import React from 'react'
import './App.css'
import { IThemeContext, ThemeContext } from './context/ThemeContext'

// State
// Context
// Reducer

function App() {
  const { theme, toggleTheme } = React.useContext(ThemeContext) as IThemeContext;
  return (
    <div className={`container ${theme}-theme`}>
      <p>Theme: <span onClick={() => toggleTheme()}>{theme}</span></p>
    </div>
  )
}

export default App
