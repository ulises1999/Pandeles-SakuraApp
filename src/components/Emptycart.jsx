import React from 'react'
import { Link } from 'react-router-dom'

const Emptycart = () => {
  return (
    <div className='emptyCartMain'>
      <h2>Tu carrito esta vacio</h2>
      <Link className='btn btn-compra-emptycart' to='/'> ir a comprar</Link>
    </div>
  )
}

export default Emptycart
