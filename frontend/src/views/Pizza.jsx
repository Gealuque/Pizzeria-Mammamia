import { useState, useEffect } from 'react'
import CardPizzaUnit from '../components/Cardpizza'
import '../components/Pizza.css'
import Swal from 'sweetalert2'

const Pizza = () => {
  const [unitaria, setUnitaria] = useState({})

  const getUnitaria = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/pizzas/p001')
      const data = await res.json()
      return setUnitaria(data)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pueden obtener los datos de la API!'
      })
    }
  }

  useEffect(() => {
    getUnitaria()
  }, [])

  return (
    <>
      <main className='container_pizza'>
        <CardPizzaUnit
          key={unitaria.id}
          name={unitaria.name}
          price={unitaria.price}
          ingredients={unitaria.ingredients}
          img={unitaria.img}
          description={unitaria.desc}
        />
      </main>
    </>
  )
}

export default Pizza
