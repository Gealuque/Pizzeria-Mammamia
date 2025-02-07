// Hito_2
import './Register_Login.css'
import { useState } from 'react'

const Login = () => {
// Primero declaramos todos los componentes de nuestro formulario
  const [login, setLogin] = useState({
    email: '',
    clave: ''
  })
  // Controlamos los eventos de cambio
  const handleCambio = (evento) => {
    setLogin({ ...login, [evento.target.name]: evento.target.value })
  }

  // Controlamos que no haya carga antes de escribir los datos

  const handleCarga = async (evento) => {
    evento.preventDefault()

    // Ahora destructuramos los datos para las validaciones
    const { email, clave } = login
    // Condiciones
    if (!email.trim() || !clave.trim()) {
      alert('Todos los campos deben estar llenos')
      return
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
      alert('Ingrese un mail válido')
      return
    }

    if (clave.length < 6 || clave.length > 14) {
      alert('La clave deben contener entre 6 y 14 carateres')
      return
    }

    alert('Login Éxitoso!')
    setLogin({ email: '', clave: '' })
  }

  return (
    <>
      <form className='formulario' onSubmit={handleCarga}>
        <div className='container_inputs'>
          <div className='box_input'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              value={login.email}
              onChange={handleCambio}
              required
            />
          </div>
          <div className='box_input'>
            <label>Contraseña</label>
            <input
              type='password'
              name='clave'
              value={login.clave}
              onChange={handleCambio}
            />
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>Logearse</button>
      </form>
    </>
  )
}

export default Login
