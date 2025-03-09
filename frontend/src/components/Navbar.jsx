import { useState, useContext } from 'react'
import Totales from './utilities/compra'
import { Link } from 'react-router-dom'
import { CartContext } from '../store/CartContext'
import '../index.css'

const Navbar = () => {
  const { total } = useContext(CartContext)
  const token = false
  const [Logeo, setLogeo] = useState(token)

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark text-white d-flex justify-content-between'>
      {/* Siempre Visible */}
      <Link to='./' className='navbar-brand text-decore-none'> Pizzeria Mamma Mía!</Link>
      <ul className='navbar-nav d-flex mr-auto mt-2 mt-lg-0 text1_nav d-flex gap-2'>
        <li className='nav-item active'>
          <Link to='/' className='text-decore-none'><button type='button' className='btn btn-dark border'>🍕 Home</button></Link>
        </li>
        {/* Condicionados */}
        {Logeo && (
          <>
            <li className='nav-item'>
              <Link to='/profile' className='text-decore-none'> <button type='button' className='btn btn-dark border'>🔓 Profile</button></Link>
            </li>
            <li className='nav-item'>
              <button type='button' className='btn btn-dark border'>🔒 Logout</button>
            </li>
          </>
        )}
        {!Logeo && (
          <>
            <li className='nav-item'>
              <Link to='/login' className='text-decore-none'><button type='button' className='btn btn-dark border'>🔐 Login</button></Link>
            </li>
            <li className='nav-item'>
              <Link to='/register' className='text-decore-none'><button type='button' className='btn btn-dark border'>🔐 Register</button></Link>
            </li>
          </>
        )}
      </ul>
      <Link to='/cart' className='text-decoration-none'>
        <form className='my-2 my-lg-0 my-2 my-sm-0 d-flex ml-auto border p-2 rounded'>
          <span className='text1_nav'> 🛒 Total: $ {Totales(total)} </span>
        </form>
      </Link>
    </nav>
  )
}
export default Navbar
