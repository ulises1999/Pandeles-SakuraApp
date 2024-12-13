import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";


const Checkout = () =>{
    const [user, setUser] = useState({})
    const [validate, setValidate] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, cartTotal, clear}= useContext(CartContext)
    const userData = (e)=>{
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value
            }
        )
    }
    const finalizarCompra = (e)=>{
        e.preventDefault()
        if(!user.name || !user.lastname || !user.email || !user.address){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Los campos son obligatorios",
          });
        }else if(user.email !== validate){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Los mails deben ser iguales",
          });
        }else{
            let order = {
                comprador: user,
                carrito:cart,
                total:cartTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders")

            addDoc(ventas, order)
            .then((res)=>{
                cart.forEach((item)=>{
                    const docRef = doc(db, "productos", item.id)
                    getDoc(docRef)
                    .then((dbDoc)=>{
                        updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
                    })
                })
                setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }
    }

    return(
        <div>
        {orderId !== '' ? (
          <div className="orderConfirmation">
            <h4>¡Generaste bien tu orden!</h4>
            <h5>El ID es: {orderId}</h5>
            <Link to="/" className="btn btn-success">
              Volver a home
            </Link>
          </div>
        ) : (
          <div className="orderForm">
            <h4>Completa con tus datos</h4>
            <form
              className="d-flex flex-column align-items-center"
              onSubmit={finalizarCompra}
            >
              <input
                type="text"
                name="name"
                placeholder="Ingrese su nombre"
                onChange={userData}
              />
              <input
                type="text"
                name="lastname"
                placeholder="Ingrese su apellido"
                onChange={userData}
              />
              <input
                type="text"
                name="address"
                placeholder="Ingrese su dirección"
                onChange={userData}
              />
              <input
                type="email"
                name="email"
                placeholder="Ingrese su correo"
                onChange={userData}
              />
              <input
                type="email"
                name="second-email"
                placeholder="Repita su correo"
                onChange={(e) => setValidate(e.target.value)}
              />
              <button className="btn btn-success" type="submit">
                Enviar
              </button>
            </form>
          </div>
        )}
      </div>
      
    )
}

export default Checkout