import { createContext, useState, children, useEffect } from 'react'
import Swal from 'sweetalert2'

export const HomeContext = createContext()

const HomeProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [onePizza, setOnePizza] = useState(null)

  const getPizzas = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/pizzas')
      const data = await res.json()
      return setPizzas(data)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pueden obtener los datos de la API!'
      })
    }
  }

  useEffect(() => {
    getPizzas()
  }, [])

  const getOnePizza = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/pizzas/${id}`)
      const data = await res.json()
      return setOnePizza(data)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pueden obtener los datos de la API!'
      })
    }
  }

  return (
    <HomeContext.Provider value={{ onePizza, pizzas, getPizzas, getOnePizza }}>
      {children}
    </HomeContext.Provider>
  )
}

export default HomeProvider
