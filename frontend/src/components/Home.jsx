import Header from './Header'
import CardPizza from './CardsPizza'
import './Home.css'
import { useState, useEffect } from 'react'
/* import { pizzas } from '../../public/pizzas' */
const Home = () => {
  const [pizzas, setPizzas] = useState([])

  const getPizza = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas')
    const data = await res.json()
    return setPizzas(data)
  }

  useEffect(() => {
    getPizza()
  }, [])
  return (
    <>
      <Header />
      <main className='cartas'>
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            description={pizza.desc}
          />
        ))}
      </main>
    </>
  )
}

export default Home
