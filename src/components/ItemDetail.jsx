import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {
    
    const onAdd=(count)=>{
        if (count <= 0 ){
            alert(`Tu carrito esta vacio`)
        }else {
            alert(`Agregaste ${count} al carrito `)
        }
    }
    {console.log(producto)
    }
  return (
    <div>
        <h1>Detalle del producto:{producto.nombre}</h1>
        <img src={producto.img} alt={producto.img}/>
        <p>{producto.descripcion}</p>
        <p>${producto.precio}</p>
        <ItemCount stock={producto.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail