import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "././cart.css"
import { CartContext } from '../../Context/CartContext';
import { MdDelete } from 'react-icons/md';
import { Button } from '@mui/material';
const Cart = () => {
    const { cartItems, removeItem, clearCart, cartTotal, cartQuantity } = useContext(CartContext);
    

    
    
    return ( cartItems.length !== 0 ? (
        <>
            <div></div>
            <div className='cart-container'>
                    <h1>Carrito</h1>
                    {cartItems.map(item => {
                        return (
                            <div key={item.item.id}>
                                <p>Producto: {item.item[0].name}</p>
                                <p>Precio: {item.item[0].price}</p>
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