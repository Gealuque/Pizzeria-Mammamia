import { useEffect, useContext } from 'react'
import CardPizzaUnit from '../components/Cardpizza'
import '../components/Pizza.css'
import { HomeContext } from '../store/HomeContext'
import { useParams } from 'react-router-dom'
const Pizza = () => {
  const { id } = useParams()
  const { pizzas, getOnePizza } = useContext(HomeContext)

  useEffect(() => {
    getOnePizza(id)
  }, [id, getOnePizza])

  const pizza = pizzas.find((pizza) => pizza.id === (id))
  return (
    <>
      <main className='container_pizza'>
        {pizza
          ? (
            <CardPizzaUnit
              key={pizza.id}
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              description={pizza.desc}
            />
            )
          : (
            <p> No hay pizza con ese id</p>
            )}
      </main>
    </>
  )
}

export default Pizza
