import { useContext, useState, useEffect } from 'react'
import CardCart from '../components/CardCart'
import '../components/Cart.css'
import Totales from '../components/utilities/compra'
import { CartContext } from '../store/CartContext'
import { LoginContext } from '../store/loginContext'

const Cart = () => {
  const { cart, total, actualizarCount } = useContext(CartContext)
  const { token } = useContext(LoginContext)
  const [habilitado, setHabilitado] = useState(token)

  useEffect(() => {
    setHabilitado(token)
  }, [token])

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
          <button className={`btn_3 ${habilitado ? '' : 'btn_3_deshabilitado'} `} disabled={!habilitado}>Pagar</button>
        </section>
      </main>
    </>
  )
}

export default Cart
