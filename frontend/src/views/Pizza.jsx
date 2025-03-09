import CardPizzaUnit from '../components/Cardpizza'
import '../components/Pizza.css'
import { HomeContext } from '../store/HomeContext'
import { useContext } from 'react'

const Pizza = () => {
  const { pizzas } = useContext(HomeContext)
  return (
    <>
      <main className='container_pizza'>
        {pizzas.map((pizza) => (
          <CardPizzaUnit
            key={pizza.id}
            id={pizza.id}
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

export default Pizza
