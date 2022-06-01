import React, {useContext, useState} from 'react';
import { CartContext } from '../../Context/CartContext';

//Import reactbootstrap y react-icons
import { Button } from 'react-bootstrap';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const { cartItems } = useContext(CartContext);

    
    return ( 
        <>
            <Link to='/cart'><Button><MdShoppingCart/>{cartItems.length}</Button></Link>
        </>
     );
}
 
export default CartWidget;


