import { useContext } from 'react'
import CardCart from '../components/CardCart'
import '../components/Cart.css'
import Totales from '../components/utilities/compra'
import { CartContext } from '../store/CartContext'

const Cart = () => {
  const { cart, total, actualizarCount } = useContext(CartContext)
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
          <button className='btn_3'>Pagar</button>
        </section>
      </main>
    </>
  )
}

export default Cart
