import React, { useState} from 'react'
import ItemCount from './ItemCount'
import { useCart} from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({producto}) => {
    const [compra,setCompra] = useState (false)
    const {addToCart} = useCart()
    const onAdd=(cantidad)=>{
        if (cantidad <= 0 ){
            alert(`Tu carrito esta vacio`)
        }else {
            setCompra(true)
            addToCart(producto,cantidad)
        }
    }
    
  return (
    <div className='detalleProducto'>
        <h1>Detalle del producto:{producto.nombre}</h1>
        <img src={producto.img} alt={producto.img}/>
        <p>{producto.descripcion}</p>
        <p>${producto.precio}</p>
        {compra ?
        
        <div>
            <Link to= '/'>Seguir comprando</Link> 
            <Link to= '/cart'>Ir al carrito</Link>
        </div> 
        
        : <ItemCount stock={producto.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail