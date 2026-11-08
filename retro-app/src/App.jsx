
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import View from './Pages/View'
import Wishlist from './Pages/Wishlist'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
    <Header/>
    // Learning Git and GitHub collaboration
    // Practising Git push workflow for the second time
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='wishlist' element={<Wishlist/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='view/:id' element={<View/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
