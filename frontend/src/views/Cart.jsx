import CardCart from '../components/CardCart'
import { pizzaCart } from '../../public/pizzas'
import '../components/Cart.css'
import { useState } from 'react'
import Totales from '../components/utilities/compra'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)
  const actualizarCount = (id, nuevoCount) => {
    if (nuevoCount === 0) {
      setCart(prevPizzacart => prevPizzacart.filter(pizza => pizza.id !== id))
    }
    setCart(prevPizzacart =>
      prevPizzacart.map(pizza =>
        pizza.id === id ? { ...pizza, count: nuevoCount } : pizza
      )
    )
  }
  const calcularTotales = (cart) => {
    return cart.reduce((total, pizza) => {
      return total + pizza.price * pizza.count
    }, 0)
  }
  const total = calcularTotales(cart)
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
