import Totales from './utilities/compra'
import './Cards.css'
import { useContext } from 'react'
import { CartContext } from '../store/CartContext'
import { Link } from 'react-router-dom'

const CardPizza = ({ id, img, name, price, ingredients, description }) => {
  const { suma } = useContext(CartContext)

  return (
    <>
      <div className='contenedor'>
        <div className='fotos_card'>
          <img className='foto' src={img} alt={name} />
        </div>
        <div className='name_pizza'>
          <h5>Pizza {name}</h5>
        </div>
        <div className='descripcion'>
          <p>{description}</p>
        </div>
        <hr />
        <div className='box_ingredientes'>
          <span className='text-muted tex_sub_ing'> 🍕Ingredientes: </span>
          <ul className='text_ingredientes'>{ingredients.map((i) => (
            <li key={i}> {i}</li>
          ))}
          </ul>
        </div>
        <hr />
        <div className='box_precio'>
          <h6>PRECIO: ${Totales(price)}</h6>
        </div>

        <div className='box'>
          <div className='box1'>
            <Link to={`/pizza/${id}`}>
              <button type='button' className='boton1'>Ver Más 👀</button>
            </Link>

          </div>
          <div className='box2'>
            <button type='button' className='boton2' onClick={() => suma(id)}>Añadir 🛒</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardPizza
