import Totales from './utilities/compra'
import './Cards.css'

const CardCart = ({ img, name, count, price, id, actualizarCount }) => {
  const suma = () => {
    if (count > 0) {
      actualizarCount(id, count + 1)
    }
  }
  const resta = () => {
    if (count > 0) {
      actualizarCount(id, count - 1)
    }
  }
  return (
    <>
      <section className='contenedor_2'>
        <div className='min_box_1'>
          <img className='imagen' src={img} alt={name} />
          <p>{name}</p>
        </div>
        <div className='min_box_2'>
          <span>${Totales(price)}</span>
          <button type='button' className='btn_1' onClick={resta}>-</button>
          <span>{count}</span>
          <button type='button' className='btn_2' onClick={suma}>+</button>
        </div>
      </section>
    </>
  )
}

export default CardCart
