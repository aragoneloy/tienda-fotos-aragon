import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

//state que le pasamos al usestate
const cartInitialState = []

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(cartInitialState)
    const [cartTotal, setCartTotal] = useState(0)
    const [cartQuantity, setCartQuantity] = useState(0)

    
    function addItem (item, count) {
        

        
        const itemIndex = cartItems.findIndex(cartItem => cartItem.item[0].id === item[0].id)
        
        if(itemIndex === -1) {
        
        setCartItems([...cartItems, {item, count}])
        
        

    } else {   

        const newCartItems = [...cartItems]
        newCartItems[itemIndex].count += count
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
    
    useEffect(() => {
          
        
        const data = new Promise((resolve, reject) => {
            
            resolve(cartItems)
        }
        )
        data.then(data => { 
            let total = 0;
            let quantity = 0;
            data.forEach(item => {
                total += item.item[0].price * item.count
                quantity += item.count
                
            })
            setCartTotal(total)
            setCartQuantity(quantity)
    
            
            
        })
        data.catch(err => {
            console.log(err)
        })
            
        }, [cartItems])
   
       
    
    return(
        <CartContext.Provider value={{cartItems, setCartItems, addItem, removeItem, clearCart, cartQuantity, cartTotal }} >
            {children}
        </CartContext.Provider>
    )
    }    