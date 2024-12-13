import React from 'react'
import { Link } from 'react-router-dom'

const Emptycart = () => {
  return (
    <div>
      <h2>Tu carrito esta vacio</h2>
      <Link to='/'> ir a comprar</Link>
    </div>
  )
}

export default Emptycart
