import React from 'react'
import Header from './Header'
import CardPizza from './CardsPizza'
import './Home.css'
import { pizzas } from '../../public/pizzas'
const Home = () => {
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
