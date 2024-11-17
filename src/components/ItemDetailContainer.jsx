import React,{ useEffect,useState } from "react"
import {getOneProducto } from "../mock/Data"
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = ()=>{
    const[producto,setProducto]= useState({})
    const { id }= useParams()
    
    console.log (id)

    useEffect(()=>{
        getOneProducto(id)
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