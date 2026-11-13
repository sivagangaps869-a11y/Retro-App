
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import productStore from './Redux/productStore.js'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={productStore}>
      <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
