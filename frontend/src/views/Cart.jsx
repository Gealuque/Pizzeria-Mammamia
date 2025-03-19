import { useContext, useState, useEffect } from 'react'
import CardCart from '../components/CardCart'
import '../components/Cart.css'
import Totales from '../components/utilities/compra'
import { CartContext } from '../store/CartContext'
import { LoginContext } from '../store/loginContext'
import axios from 'axios'
import Swal from 'sweetalert2'

const Cart = () => {
  const { cart, total, actualizarCount, setCart } = useContext(CartContext)
  const { token, datosUser } = useContext(LoginContext)
  const [habilitado, setHabilitado] = useState(false)

  useEffect(() => {
    if (token && datosUser && datosUser.email) {
      setHabilitado(true)
    } else {
      setHabilitado(false)
    }
  }, [token, datosUser])

  const pago = async () => {
    const datosPago = {
      monto: total,
      email: datosUser.email
    }
    try {
      const res = axios.post('http://localhost:5000/api/checkouts', datosPago)
      Swal.fire({
        title: 'Pago éxitoso!',
        icon: 'success',
        draggable: true
      })
      setCart([])
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Pago No procesado!'
      })
    }
  }

  return (
    <>
      <main className='contenedor_3'>
        <section className='contenedor_4'>
          <h4>Detalles del Pedido:</h4>
          {cart.map((pizza) => (
            <CardCart
              key={pizza.id}
              img={pizza.img}
              name={pizza.name}
              price={pizza.price}
              count={pizza.count}
              id={pizza.id}
              actualizarCount={actualizarCount}
            />
          ))}
          <h3>Total: ${Totales(total)} </h3>
          <button className={`btn_3 ${habilitado ? '' : 'btn_3_deshabilitado'} `} disabled={!habilitado} onClick={pago}>Pagar</button>
        </section>
      </main>
    </>
  )
}

export default Cart
