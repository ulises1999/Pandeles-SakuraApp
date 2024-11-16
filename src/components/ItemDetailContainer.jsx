import React,{ useEffect,useState } from "react"
import {getOneProducto } from "../mock/Data"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ()=>{
    const[producto,setProducto]= useState({})

    useEffect(()=>{
        getOneProducto()
        .then((res)=>setProducto(res))
        .catch((error)=>console.log(error))
    },[])
    
    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}
export default ItemDetailContainer