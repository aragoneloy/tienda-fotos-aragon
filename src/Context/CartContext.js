import React, { createContext, useState } from 'react';

export const CartContext = createContext();

//state que le pasamos al usestate
const initialState = []

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(initialState)
    
    const addItem = (item, quantity) => {
        setCartItems({item}, quantity)
    }
    
    

    return(
        <CartContext.Provider value={[cartItems, setCartItems, addItem]}>
            {children}
        </CartContext.Provider>
    )
}