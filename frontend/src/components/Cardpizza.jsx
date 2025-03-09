import Totales from './utilities/compra'
import './Cards.css'
import { CartContext } from '../store/CartContext'
import { useContext } from 'react'

const CardPizzaUnit = ({ id, img, name, price, ingredients, description }) => {
  const { suma } = useContext(CartContext)
  const primeraLetra = (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase()
  }
  return (
    <>
      <div className='contenedor_cardpizza'>
        <div>
          <img className='foto_pizza' src={img} alt={name} />
        </div>
        <div className='box_pizza1'>
          <div>
            <h4>Pizza {name}</h4>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <hr />
          <div>
            <span className='text-muted tex_sub_ing'> 🍕Ingredientes: </span>
            <ul className='text_ingredientes'>{Array.isArray(ingredients) && ingredients.map((e) => (
              <li key={e}> {primeraLetra(e)}</li>
            ))}
            </ul>
          </div>
          <hr />
          <div className='box_precio_pizza'>
            <div className='min_box1'>
              <h6>PRECIO: ${Totales(price)}</h6>
            </div>
            <div className='min_box2'>
              <button type='button' className='boton2' onClick={() => suma(id)}>Añadir 🛒</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardPizzaUnit
