import React, { createContext, useState } from 'react';

export const CartContext = createContext();

//state que le pasamos al usestate
const cartInitialState = []

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(cartInitialState)
    
    function addItem (item, quantity) {
        
        const itemIndex = cartItems.findIndex(cartItem => cartItem.item.id === item.id)
        
        if(itemIndex === -1) {
        
        setCartItems([...cartItems, {item, quantity}])
        
    } else {   

        const newCartItems = [...cartItems]
        newCartItems[itemIndex].quantity += quantity
        setCartItems(newCartItems)
    
    
    }
    }

    function removeItem (item) {
        const itemIndex = cartItems.findIndex(cartItem => cartItem.item.id === item.id)
        const newCartItems = [...cartItems]
        newCartItems.splice(itemIndex, 1)
        setCartItems(newCartItems)
    }
    function clearCart () {
        setCartItems([])
    }
    return(
        <CartContext.Provider value={{cartItems, setCartItems, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
    }    