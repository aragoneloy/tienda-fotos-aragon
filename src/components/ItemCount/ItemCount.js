import React, { useState } from 'react';
import '../ItemCount/ItemCount.css'

//Material UI
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';


const ItemCount = ({item, stock, initial, onAdd}) => {
   
    
    const [count, setCount] = useState(initial)
      


    const plusClick = () => {
        setCount(count < stock ? count + 1 : count)
 
        
    }
    const minusClick = () => {
        setCount(count < 2 ? count : count - 1)
  
        
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

            <Button variant="contained" disabled={stock === 0}  onClick={() => onAdd(item, count)}>Agregar al carrito</Button>
        </div>
     );
    }
 
export default ItemCount;