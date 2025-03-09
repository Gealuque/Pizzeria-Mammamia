import { Link } from 'react-router-dom'
import '../components/NotFound.css'

const NotFound = () => {
  return (
    <>
      <main className='contenedor_NotFound'>
        <h2 className='text-light'>Ops Página No Encontrada!!..</h2>
        <img src='/src/assets/img/notfound.jpg' className='foto_NotFound' alt='NotFound' />
        <Link to='/' className='text-decoration-none'><button type='button' className='btn btn-sucess text-light border'>Pincha aquí para volver 🍕</button></Link>
      </main>
    </>
  )
}

export default NotFound
