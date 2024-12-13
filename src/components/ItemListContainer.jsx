import React, {useState,useEffect} from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import Loader from './Loader'
import { addDoc, collection, getDocs,query,where } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemListContainer= ({greeting}) =>{
    const [productos,setProductos]= useState([])
    const [loading,setLoading] = useState (false)
    const {category}= useParams()

    useEffect(()=>{
        setLoading(true);
        
        const productsCollection = category
         ? query(collection (db,"productos"),where("category", "==", category ))
          : collection (db,"productos")

        getDocs(productsCollection)
        .then ((res)=> {
            const list = res.docs.map((product)=>{
                return {
                    id: product.id,
                    ...product.data()
                }
            })
            setProductos(list)
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