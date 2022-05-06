import React, { useState } from 'react';
import { ButtonGroup, Button } from "react-bootstrap";


export function ItemCount({stock, initial, onAdd}) {

    const [count, setCount] = useState(0)


    const plusClick = () => {
        setCount(count < stock ? count + 1 : count)
    }
    const minusClick = () => {
        setCount(count < 1 ? count : count - 1)
    }

    let itemNum = parseInt(initial) + parseInt(count)
 

    return(
        <div>
            <ButtonGroup aria-label="item-count">
                <Button variant="secondary" onClick={minusClick}>-</Button>
                <p>{itemNum}</p>
                <Button variant="secondary" onClick={plusClick}>+</Button>
            </ButtonGroup>

            <Button variant='primary' onClick={onAdd}>Agregar al carrito</Button>
        </div>
       
    )
}

