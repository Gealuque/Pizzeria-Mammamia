import '../components/Profile.css'
import { useContext } from 'react'
import { LoginContext } from '../store/loginContext'
import { Navigate } from 'react-router-dom'

const Profile = () => {
  const { logout, token } = useContext(LoginContext)

  const deslogeo = () => {
    logout()
  }
  if (!token) {
    return <Navigate to='/login' />
  }

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
