import { createContext, useState, children, useEffect } from 'react'
import Swal from 'sweetalert2'

export const HomeContext = createContext()

const HomeProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])

  const getPizza = async () => {
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
    getPizza()
  }, [])

  return (
    <HomeContext.Provider value={{ pizzas, getPizza }}>
      {children}
    </HomeContext.Provider>
  )
}

export default HomeProvider
