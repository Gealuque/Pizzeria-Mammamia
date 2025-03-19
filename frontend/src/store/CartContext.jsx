import { createContext, useState, children, useContext } from 'react'
import { HomeContext } from './HomeContext'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const { pizzas } = useContext(HomeContext)
  const [cart, setCart] = useState([])

  const actualizarCount = (id, nuevoCount) => {
    if (nuevoCount === 0) {
      setCart(prevPizzacart => prevPizzacart.filter(pizza => pizza.id !== id))
    } else {
      setCart(prevPizzacart =>
        prevPizzacart.map(pizza =>
          pizza.id === id ? { ...pizza, count: nuevoCount } : pizza
        )
      )
    }
  }
  const suma = (id) => {
    const haypizza = cart.find(pizza => pizza.id === id)
    if (haypizza) {
      actualizarCount(id, haypizza.count + 1)
    } else {
      const pizza = pizzas.find(pizza => pizza.id === id)
      if (pizza) {
        setCart([...cart, { ...pizza, count: 1 }])
      }
    }
  }

  const resta = (id) => {
    const pizza = cart.find(pizza => pizza.id === id)

    if (pizza && pizza.count > 1) {
      actualizarCount(id, pizza.count - 1)
    } else if (pizza && pizza.count === 1) {
      actualizarCount(id, 0)
    }
  }
  const calcularTotales = () => {
    return cart.reduce((total, pizza) => {
      return total + pizza.price * pizza.count
    }, 0)
  }
  const total = calcularTotales()

  return (
    <CartContext.Provider value={{ cart, total, suma, resta, actualizarCount, setCart }}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider
