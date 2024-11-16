import React,{ useState } from "react"

const ItemCount =({stock,onAdd})=>{
    const [count,setCount]=useState(0)
    const sumar = ()=>{
        if(count < stock){
        setCount(count + 1)
        }
    }
    const restar = ()=>{
        if (count > 0){
        setCount(count - 1)
        }
    }
    const onAddHandler =() => {
        onAdd(count)
    }
    return(
        <div>
        <div>
            <button onClick={restar} className="buttonRestar">-</button>
            <span>{count}</span>
            <button onClick={sumar} className="buttonSumar">+</button>
        </div>
        <button className="buttonComprar" onClick={onAddHandler}>comprar</button>
        </div>
    )
}
export default ItemCount