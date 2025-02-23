import Navbar from './components/Navbar'
/* import Home from './components/Home' */
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Pizza from './components/Pizza'
/* import RegisterPage from './components/Register' */
/* import Login from './components/Login' */
/* import Cart from './components/Cart' */

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </>
  )
}

export default App
