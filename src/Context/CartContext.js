import React, { createContext, useState } from 'react';

export const CartContext = createContext();

//state que le pasamos al usestate
const cartInitialState = []

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(cartInitialState)
    
    function addItem (item, quantity) {
        

        setCartItems([...cartItems, item, quantity])
        
    }
    console.log(cartItems)
    

    return(
        <CartContext.Provider value={{cartItems, setCartItems, addItem}}>
            {children}
        </CartContext.Provider>
    )
}