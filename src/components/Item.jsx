import React from 'react'

const Item = ({producto}) => {
    return (
        <div className="card" style={{width:'18rem', marginTop:10}}>
        <img src={producto.img} className="card-img-top" alt={producto.nombre}/>
        <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">${producto.precio}</p>
            <a href="#" className="btn btn-primary">Ver más</a>
        </div>
        </div>
    )
}

export default Item