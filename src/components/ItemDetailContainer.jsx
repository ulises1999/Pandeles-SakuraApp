import React,{ useEffect,useState } from "react"
import { getOneProducto } from "../mock/data"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ()=>{
    const[producto,setProducto]= useState({})
    const [loading, setLoading]= useState(false)
    

    // useEffect(()=>{
    //     getProductos()
    //     .then((res)=>setProducto(res.find((item)=> item.id === id)))
    //     .catch((error)=>console.log(error))
    // },[])
    
    useEffect (()=>{
        setLoading(true)
        getOneProducto('1')
        .then((res)=> setProducto(res))
        .catch((error)=>console.log(error))
        .finally(()=> setLoading(false))
      },[])



    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}
export default ItemDetailContainer