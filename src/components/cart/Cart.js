import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "././cart.css"
import { CartContext } from '../../Context/CartContext';
import { MdDelete } from 'react-icons/md';
import { Button } from '@mui/material';
const Cart = () => {
    const { cartItems, removeItem, clearCart } = useContext(CartContext);
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

    
    
    return ( cartItems.length !== 0 ? (
        <>
           <div className='cart-container'>
                <h1>Carrito</h1>
                {cartItems.map(item => {
                    return (
                        <div key={item.item.id}>
                            <p>Producto: {item.item.name}</p>
                            <p>Precio: {item.item.price}</p>
                            <p>Cantidad: {item.count}</p>
                            <h4><Button onClick={() => removeItem(item.item)} size='large'><MdDelete/></Button></h4>
                        </div>
                    )} 
                )}
            </div>
            <div className='cart-total'>
                <h2>Total: {cartTotal}</h2>
                <h2>Quantity: {cartQuantity}</h2>
                <Button onClick={clearCart}>Vaciar carrito</Button>
            </div>
            

        
        </> ) : (
        <div>
            <Link to={'/'}><Button variant='contained' >Ir a la tienda</Button></Link>
        </div>  )
     
)}
 
export default Cart;