import React,{ useEffect,useState } from "react"
import {getOneProducto } from "../mock/Data"
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import Loader from "./Loader"

const ItemDetailContainer = ({greeting})=>{
    const[producto,setProducto]= useState({})
    const [loading,setLoading] = useState (false)
    const {id}= useParams()
    console.log(useParams())


    useEffect (()=>{
        setLoading(true)
        getOneProducto(id)
        .then((res)=> setProducto(res))
        .catch((error)=>console.log(error))
        .finally(()=> setLoading(false))
      },[])

    
    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? <Loader/>: <ItemDetail producto={producto}/>}
        </div>
    )
}
export default ItemDetailContainer