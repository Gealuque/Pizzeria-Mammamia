import Navbar from './components/Navbar'
/* import Home from './components/Home' */
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import RegisterPage from './components/Register'

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <RegisterPage />
      <Footer />
    </>
  )
}

export default App
