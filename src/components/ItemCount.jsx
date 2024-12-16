import React,{ useState } from "react"

const Itemcantidad =({stock,onAdd})=>{
    const [cantidad,setcantidad]=useState(0)
    const sumar = ()=>{
        if(cantidad < stock){
        setcantidad(cantidad + 1)
        }
    }
    const restar = ()=>{
        if (cantidad > 0){
        setcantidad(cantidad - 1)
        }
    }
    const onAddHandler =() => {
        onAdd(cantidad)
    }
    return(
        <div className="counterCardContainer">
        <div className="counterCard">
            <button onClick={restar} className="buttonRestar btn btn-danger">-</button>
            <span>{cantidad}</span>
            <button onClick={sumar} className="buttonSumar btn btn-success">+</button>
        </div>
        <button className="buttonComprar" onClick={onAddHandler}>comprar</button>
        </div>
    )
}
export default Itemcantidad