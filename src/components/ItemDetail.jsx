import React, { useState} from 'react'
import ItemCount from './ItemCount'
import { useCart} from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";

const ItemDetail = ({producto}) => {
    const [compra,setCompra] = useState (false)
    const {addToCart} = useCart()
    const onAdd=(cantidad)=>{
        if (cantidad <= 0 ){
            Swal({
                icon: "error",
                title: "Oops...",
                text: "Tu carrito esta vacio",
              })
        }else {
            setCompra(true)
            addToCart(producto,cantidad)
        }
    }
    
  return (
    <div className='detalleContenedor'>
        <div className='detalleProducto'>
            <h1>Detalle del producto:</h1>
            <h1>{producto.nombre}</h1>
            <img className='imgItemDetail' src={producto.img} alt={producto.img}/>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>
            {compra ?
            
            <div>
                <Link className='btn' to= '/'>Seguir comprando</Link> 
                <Link className='btn' to= '/cart'>Ir al carrito</Link>
            </div> 
            
            : <ItemCount stock={producto.stock} onAdd={onAdd}/>}
        </div>
    </div>
  )
}

export default ItemDetail