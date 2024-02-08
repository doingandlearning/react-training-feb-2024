import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { LibraryProvider } from './contexts/LibraryContext.tsx'
import { LikeProvider } from './contexts/LikeContext.tsx'
import { BrowserRouter } from "react-router-dom"
import { configureStore } from '@reduxjs/toolkit'
import { bookReducer, filmReducer, libraryReducer } from './reducers/libraryReducer.ts'
import { Provider } from "react-redux"

const store = configureStore({
  reducer: {
    books: bookReducer,
    films: filmReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <LikeProvider>
          <LibraryProvider>
            <App />
          </LibraryProvider>
        </LikeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
