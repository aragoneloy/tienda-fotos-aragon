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
            
            <div className='cart-container'>
                    <h1>Carrito</h1>
                    {cartItems.map(item => {
                        return (
                            <div key={item.item.id}>
                                <p>Producto: {item.item.name}</p>
                                <p>Precio: {item.item.price}</p>
                                <p>Cantidad: {item.count}</p>
                                <h1><Button onClick={() => removeItem(item.item)} variant='outlined' color='warning'size='small'endIcon={<MdDelete/>}>Eliminar</Button></h1>
                            </div>
                        )} 
                    )}
            </div>
                <div className='cart-total'>
                    <h2>Total: {cartTotal}</h2>
                    <h2>Cantidad: {cartQuantity}</h2>
                    <Button onClick={clearCart}>Vaciar carrito</Button>
                </div>
                <div className='checkout-btn'>
                    <Link to='/checkout'><Button variant='contained' color='primary'>Checkout</Button></Link>

                </div>



        </> ) : (
        <div>
            <Link to='/'><Button variant='contained' >Ir a la tienda</Button></Link>
        </div>  )
     
)}
 
export default Cart;