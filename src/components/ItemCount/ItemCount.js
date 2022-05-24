import React, { useState, useContext } from 'react';
import '../ItemCount/ItemCount.css'
import { CartContext } from '../../Context/CartContext';
//Material UI
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';


const ItemCount = ({item, stock, initial, onAdd}) => {
    const { addItem } = useContext(CartContext)
    
    const [count, setCount] = useState(initial)
      


    const plusClick = () => {
        setCount(count < stock ? count + 1 : count)
 
        
    }
    const minusClick = () => {
        setCount(count < 1 ? count : count - 1)
  
        
    }

    
    
    function handleAdd() {
        return(
            onAdd(count)
            

        )
        
    } 
    
    
    return ( 
        <div className='item-count'>
            <ButtonGroup disableElevation variant="contained" aria-label="item-count" className='button-group'>
                <IconButton  onClick={minusClick} aria-label="restar producto">
                    <RemoveIcon />
                </IconButton>
                
                <p className='item-quantity' >{count}</p>
                <IconButton onClick={plusClick} aria-label="agregar producto">
                    <AddIcon />
                </IconButton>
            </ButtonGroup>

            <Button variant="contained" disabled={stock === 0}  onClick={handleAdd}>Agregar al carrito</Button>
        </div>
     );
}
 
export default ItemCount;