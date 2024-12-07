import React, {useState,useEffect} from 'react'
import ItemList from './ItemList'
import { getProductos } from '../mock/Data'
import {useParams} from 'react-router-dom'
import Loader from './Loader'

const ItemListContainer= ({greeting}) =>{
    const [productos,setProductos]= useState([])
    const [loading,setLoading] = useState (false)
    const {category}= useParams()

    useEffect(()=>{
        setLoading(true)
        getProductos()
        .then((res)=>{
            if(category){
                setProductos(res.filter((prod)=>prod.category === category))
            } else {
                setProductos(res)
            }
        })
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))
    },[category])
    
    return(
        <>
        <h1 className="greeting">{greeting}{category}</h1>
        {loading ? <Loader/> :  <ItemList productos={productos}/>}
        </>
    )
}

export default ItemListContainer