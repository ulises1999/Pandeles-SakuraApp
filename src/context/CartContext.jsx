import { createContext , useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart,setCart]=useState([]);
    const addToCart = (item,quantity)=>{
        if(IsInCart(item,id)){
            setCart(
                cart.map((prod)=>{
                    if(prod.id === item.id ){
                        return {...prod, cantidad: prod.cantidad + quantity};
                    } else {
                        return prod;
                    }
                })
            )
        } else{
            setCart([...cart,{...item,cantidad:quantity}])
        }
    }
    
    const IsInCart = (id) =>{
        return cart.some ((prod)=>prod.id === id)
    }

    const clear = ()=>{
        setCart([])
    }

    const removeItem = (id) =>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }
    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}