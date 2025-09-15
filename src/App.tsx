import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Navbar from './components/nav'
// import Footer from './components/footer'

import './App.css'


export default function App() {
  return (
   <BrowserRouter>
    <Navbar />
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    {/* <Footer /> */}
   </BrowserRouter>
  )
}

