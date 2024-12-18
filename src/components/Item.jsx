import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <div className="card" >
            <img src={producto.img} className="cardImagen" itemID='cardImagen' alt={producto.nombre}/>
        <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">${producto.precio}</p>
            <Link to={`/item/${producto.id}`} className="btn btn-primary">Ver más</Link>
        </div>
        </div>
    )
}

export default Item