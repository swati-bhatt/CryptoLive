// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import CoinContextProvider from './context/CoinContext'   // made a mistake with import

createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <CoinContextProvider> 
      <App />
    </CoinContextProvider>
   </BrowserRouter>
  // </React.StrictMode>,
)
