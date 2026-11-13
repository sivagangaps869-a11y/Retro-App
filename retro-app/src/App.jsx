
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import View from './Pages/View'
import Wishlist from './Pages/Wishlist'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AddProduct from './Pages/AddProduct'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Myprofile from './Pages/Myprofile'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='wishlist' element={<Wishlist/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='view/:id' element={<View/>}/>
      <Route path='/addproducts' element={<AddProduct/>}/>
      <Route path='myprofile' element={<Myprofile/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
