//provider
//consumer
import React, { useState } from "react"

const cartContext = React.createContext()

const CartProvider = (props)=>{
    const [cartData,setCartData]=useState([]);
    const addCartData=(data)=>{
        setCartData([...cartData,data])
    }
    // const removeCartData=()=>{
        
    // }
    return <cartContext.Provider value={{cartData,addCartData}}>
        {props.children}
    </cartContext.Provider>
}

export {cartContext,CartProvider}