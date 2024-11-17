import React,{ useEffect,useState } from "react"
import {getOneProducto } from "../mock/Data"
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = ({greeting})=>{
    const[producto,setProducto]= useState({})
    const { id}= useParams()
    console.log(useParams())


    useEffect(()=>{
        if (!id) {
            console.log("ID no definido");
            return;
        }
        getOneProducto(id)
        .then((res)=>setProducto(res))
        .catch((error)=>console.log(error))
    },[])
    
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemDetail producto={producto}/>
        </div>
    )
}
export default ItemDetailContainer