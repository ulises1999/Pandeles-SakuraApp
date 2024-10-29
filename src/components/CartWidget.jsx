const CartWidget =({counter}) => {
    // console.log(props)
    return(
        <div className="cartWidgetContainer">
            <img src='public\images\carrito-de-compras.png' alt='cart' className="cartIcon" />
            <p className="cartCounter">{counter}</p>
        </div>
    )
}
 export default CartWidget