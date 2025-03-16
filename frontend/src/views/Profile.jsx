import '../components/Profile.css'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../store/loginContext'

const Profile = () => {
  const { token, logout } = useContext(LoginContext)
  const navigate = useNavigate()

  const deslogeo = () => {
    logout()
  }

  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token, navigate])

  return (
    <>
      <div className='container_profile'>
        <div className='min_box_profile'>
          <div className='titulo_profile'>
            <h5>Usuario</h5>
          </div>
          <p>Nombre: Comprador</p>
          <p>Apellido: De Pizza</p>
          <p>Email: pizzalover@gmail.com</p>
          <div className='min_box_btn'>
            <button className='btn_profile' onClick={deslogeo}>Logout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
