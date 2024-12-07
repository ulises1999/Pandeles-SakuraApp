import{useContext} from 'react'
import { CartContext } from '../context/cartContext'
const CartWidget =({counter}) => {
const contexto = useContext(CartContext)
console.log(contexto)
    return(
        <div className="cartWidgetContainer">
            <img src='public/images/carrito-de-compras.png' alt='cart' className="cartIcon" />
            <p className="cartCounter">{counter}</p>
        </div>
    )
}
 export default CartWidget