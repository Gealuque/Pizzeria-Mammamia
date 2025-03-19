import { useState, createContext, children, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

export const LoginContext = createContext()

const LoginProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [datosUser, setDatosUser] = useState(null)

  // Token para el login
  const getLogin = async (email, clave) => {
    try {
      const URL = 'http://localhost:5000/api/auth/login'
      const payload = { email, password: clave }
      const user = await axios.post(URL, payload)
      localStorage.setItem('token', user.data.token)
      setToken(user.data.token)
      const { email: userEmail, password: userPassword } = user.data
      setDatosUser({ email: userEmail, password: userPassword })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'Error al Conectarse a la API'
      })
    }
  }
  // Token del Register
  const getRegister = async (email, clave) => {
    try {
      const URL = 'http://localhost:5000/api/auth/register'
      const payload = { email, password: clave }
      const user = await axios.post(URL, payload)
      localStorage.setItem('token', user.data.token)
      setToken(user.data.token)
      const { email: userEmail, password: userPassword } = user.data
      setDatosUser({ email: userEmail, password: userPassword })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'Error al Conectarse a la API'
      })
    }
  }

  // Obtención de los datos para el profile
  useEffect(() => {
    const datoUser = async () => {
      const token = localStorage.getItem('token')

      if (token) {
        try {
          const res = await axios.get('http://localhost:5000/api/auth/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          const { email } = res.data
          setDatosUser({ email })
        } catch (error) {
          Swal.fire({
            icon: 'error',
            text: 'Error al Conectarse a la API'
          })
        }
      }
    }
    datoUser()
  }, [])

  // Método para borrar datos con logout
  const logout = () => {
    setToken(null)
    localStorage.removeItem('email')
    localStorage.removeItem('clave')
    localStorage.removeItem('token')
    setDatosUser(null)
  }

  return (
    <LoginContext.Provider value={{ token, setToken, logout, getLogin, getRegister, setDatosUser, datosUser }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider
