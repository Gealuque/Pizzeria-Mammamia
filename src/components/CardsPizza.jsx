import Totales from "./utilities/compra"
import "./Cards.css"

const CardPizza = ({img, name, price, ingredients}) => {
    return(
        <>
        <div className="contenedor">
            <img className="foto" src={img} alt={name} />
            <h4>Pizza {name}</h4>
            <hr />
            <div className="box_ingredientes">
              <h6 className="text-muted"> Ingredientes: </h6>
              <p className="text_ingredientes"> 🍕{ingredients}</p>
            </div>
            <hr />
            <div className="box_precio">
              <h5>PRECIO: ${Totales(price)}</h5>
            </div>

            <div className="box">
                <div className="box1">
                    <button type="button" className="btn btn-light bton">Ver Más 👀</button>
                </div>
                <div className="box2">
                    <button type="button" className="btn btn-dark bton">Añadir 🛒</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardPizza