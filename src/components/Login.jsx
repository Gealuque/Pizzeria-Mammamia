import './Register.css'
import { useState } from 'react'

const Login = () => {
  const [Logeo, setLogeo] = useState({
    email: '',
    clave: ''
  })
  const handleCambio = (e) => setLogeo({ ...Logeo, [e.target.email]: e.target.value })
  const handleCarga = () => {
    console.log('Datos Ingresados:', Logeo)
  }
  return (
    <>
      <form className='formulario'>
        <div className='container_inputs'>
          <div className='box_input'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              value={Logeo.email}
              onChange={handleCambio}
            />
          </div>
          <div className='box_input'>
            <label>Contraseña</label>
            <input
              type='text'
              name='contraseña'
              value={Logeo.clave}
              onChange={handleCambio}
            />
          </div>
        </div>
        <button type='submit' className='btn btn-primary' onClick={handleCarga}>Enviar</button>
      </form>
    </>
  )
}

export default Login
