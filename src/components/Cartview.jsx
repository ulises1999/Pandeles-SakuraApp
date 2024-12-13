import React from 'react'
import Emptycart from './Emptycart'
import { useCart } from '../context/CartContext'
import CartList from './CartList'

const Cartview = () => {
    const {cart} = useCart()
  return (
    <div>
      {!cart.length ? 
      <Emptycart/> 
      : <div>
            <h2>tu carrito</h2>
            <CartList/>
        </div> }
    </div>
  )
}

export default Cartview
