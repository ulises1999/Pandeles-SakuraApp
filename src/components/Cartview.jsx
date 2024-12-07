import React from 'react'
import Emptycart from './Emptycart'

const Cartview = () => {
    const {cart} = useCart()
  return (
    <div>
      {!cart.lengh ? 
      <Emptycart/> 
      : <div>
            <h2>tu carrito</h2>
            <CartList/>
        </div> }
    </div>
  )
}

export default Cartview
