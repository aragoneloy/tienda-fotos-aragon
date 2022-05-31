import React, { createContext, useState } from 'react';

export const CartContext = createContext();

//state que le pasamos al usestate
const cartInitialState = []

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(cartInitialState)
    const [cartQuantity, setCartQuantity] = useState(0)
    
    function addItem (item, count) {
        let quantity = 0
        
        const itemIndex = cartItems.findIndex(cartItem => cartItem.item.id === item.id)
        
        if(itemIndex === -1) {
        
        setCartItems([...cartItems, {item, count}])
        
    } else {   

        const newCartItems = [...cartItems]
        newCartItems[itemIndex].count += count
        setCartItems(newCartItems)
    
    
    } 
    
    
    cartItems.forEach(item => {
        quantity += item.item.count
    })
    setCartQuantity(quantity)
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

   

    console.log(cartQuantity)
    return(
        <CartContext.Provider value={{cartItems, setCartItems, addItem, removeItem, clearCart, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
    }    