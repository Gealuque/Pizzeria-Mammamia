import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Pizza from './views/Pizza'
import Home from './views/Home'
import RegisterPage from './views/Register'
import Login from './views/Login'
import Cart from './views/Cart'
import NotFound from './views/NotFound'
import Profile from './views/Profile'
import CartProvider from './store/CartContext'
import HomeProvider from './store/HomeContext'
import LoginProvider from './store/loginContext'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <HomeProvider>
          <CartProvider>
            <LoginProvider>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/pizza/:id' element={<Pizza />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </LoginProvider>
          </CartProvider>
        </HomeProvider>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
