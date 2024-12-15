import {useCart } from "../context/CartContext";

const CartWidget =() => {
const {cartQuantity} = useCart()
    return(
        <div className="cartWidgetContainer">
            <img src='/carrito-de-compras.png' alt='cart' className="cartIcon" />
            { cartQuantity() > 0 && <p className="cartCounter">{cartQuantity()}</p>}
        </div>
    )
}
 export default CartWidget