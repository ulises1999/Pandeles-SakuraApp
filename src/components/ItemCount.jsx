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
        <>
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
        </>
        <>
            <button onClick={onAddHandler}>comprar</button>
        </>
        </div>
    )
}
export default ItemCount