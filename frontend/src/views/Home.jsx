import Header from '../components/Header'
import CardPizza from '../components/CardsPizza'
import { HomeContext } from '../store/HomeContext'
import { useContext } from 'react'
import '../components/Home.css'

const Home = () => {
  const { pizzas } = useContext(HomeContext)
  return (
    <>
      <Header />
      <main className='cartas'>
        {pizzas.map((pizza) => (
          <CardPizza
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

export default Home
