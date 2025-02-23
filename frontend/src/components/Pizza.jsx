import { useState, useEffect } from 'react'
import CardPizzaUnit from './Cardpizza'
import './Pizza.css'

const Pizza = () => {
  const [unitaria, setUnitaria] = useState({})

  const getUnitaria = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas/p001')
    const data = await res.json()
    return setUnitaria(data)
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
