import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import store, { StoreContext } from './stores'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>
)
