import React from 'react';

//Import reactbootstrap y react-icons
import { Button } from 'react-bootstrap';
import { MdShoppingCart } from 'react-icons/md';


const CartWidget = () => {
    return ( 
        <>
            <Button><MdShoppingCart/></Button>
        </>
     );
}
 
export default CartWidget;


