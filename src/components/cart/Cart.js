import { Button } from '@mui/material';
import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../Context/CartContext';

const Cart = () => {
    const { cartItems, setCartItems, addItem, removeItem, clearCart } = useContext(CartContext);
    const [cartTotal, setCartTotal] = useState(0)
    const [cartQuantity, setCartQuantity] = useState(0)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
      setLoading(true);
    
      const data = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cartItems)}, 1000)
        
      
    }, )
    data.then(data => { 
        let total = 0;
        let quantity = 0;
        data.forEach(item => {
            total += item.item.price * item.count
            quantity += item.count
            
        })
        setCartTotal(total)
        setCartQuantity(quantity)
        
        
        
    })
    data.catch(err => {
        console.log(err)
    })
    data.finally(() => {
        setLoading(false)
    })

    }, [cartItems])

   console.log()
    
    
    return ( 
        <>

        <h1>Cart</h1>
        {cartItems.map(item => {
           return (
            <div>
                <p>Producto: {item.item.name}</p>
                <p>Precio: {item.item.price}</p>
                <p>Cantidad: {item.count}</p>
                <Button onClick={() => removeItem(item.item)}>-</Button>
            </div>
        )} )}

        <h2>Total: {cartTotal}</h2>
        <h2>Quantity: {cartQuantity}</h2>
        <Button onClick={clearCart}>Vaciar carrito</Button>
           

        
        </>
     );
}
 
export default Cart;