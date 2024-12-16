import React, {useState,useEffect} from 'react'
import ItemList from './ItemList'
import {useParams, Link} from 'react-router-dom'
import Loader from './Loader'
import {collection, getDocs,query,where } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemListContainer= ({greeting}) =>{
    const [productos,setProductos]= useState([])
    const [loading,setLoading] = useState (false)
    const {category}= useParams()
    const [invalidCategory, setInvalidCategory] = useState(false)

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
                }});
                if (list.length === 0) {
                    setInvalidCategory(true);
                  } else {
                    setProductos(list);
                    setInvalidCategory(false);
                  }
        })
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))
    },[category])

    if(invalidCategory){
        return <div className='noItem'>
          <img src='https://http.cat/images/404.jpg'/>
          <Link to="/" className='btn btn-dark'> Volver a Home</Link>
  
        </div>
      }

    return(
        <>
            <h1 className="greeting">{greeting}{category}</h1>
            {loading ? <Loader/> :  <ItemList productos={productos}/>}
        </>
    )
}

export default ItemListContainer