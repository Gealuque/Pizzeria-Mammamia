import Totales from './utilities/compra'
import './Cards.css'
import { CartContext } from '../store/CartContext'
import { useContext } from 'react'

const CardCart = ({ img, name, count, price, id }) => {
  const { suma, resta } = useContext(CartContext)
  return (
    <>
      <section className='contenedor_2'>
        <div className='min_box_1'>
          <img className='imagen' src={img} alt={name} />
          <p>{name}</p>
        </div>
        <div className='min_box_2'>
          <span>${Totales(price)}</span>
          <button type='button' className='btn_1' onClick={() => resta(id)}>-</button>
          <span>{count}</span>
          <button type='button' className='btn_2' onClick={() => suma(id)}>+</button>
        </div>
      </section>
    </>
  )
}

export default CardCart
