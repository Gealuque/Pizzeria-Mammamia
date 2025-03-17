import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { LoginContext } from '../store/loginContext'

const ProtectRuta = ({ children }) => {
  const { token } = useContext(LoginContext)
  return token ? children : <Navigate to='/login' />
}

export default ProtectRuta
