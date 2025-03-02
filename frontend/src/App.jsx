import Navbar from './components/Navbar'
import Home from './views/Home'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Pizza from './views/Pizza'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './views/Register'
import Login from './views/Login'
import Cart from './views/Cart'
import NotFound from './views/NotFound'
import Profile from './views/Profile'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/pizza/001' element={<Pizza />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
