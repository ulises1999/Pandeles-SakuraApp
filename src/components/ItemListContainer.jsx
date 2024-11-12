import React, {useState,useEffect} from 'react'
import ItemList from './ItemList'
import { getProductos } from '../mock/data'

const ItemListContainer= ({greeting}) =>{
    const [productos,setProductos]= useState([])
    const [loading,setLoading] = useState (false)

    useEffect(()=>{
        setLoading(true)
        getProductos()
        .then((res)=>setProductos(res))
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))
    },[])
    
    return(
        <>
            <h1 className="greeting">{greeting}</h1>
            {loading ? <span>Cargando..</span> :  <ItemList productos={productos}/>}
        
        </>
    )
}

export default ItemListContainer