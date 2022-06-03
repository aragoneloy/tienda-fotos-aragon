import React, { useContext, useState } from 'react';
import './ItemDetail.css'
import { CartContext } from '../../Context/CartContext';

//material imports
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

//react-bootstrap imports
import Image from 'react-bootstrap/Image'

import ItemCount from '../ItemCount/ItemCount';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    
    const [{ name, price, stock, image, description }] = item;
    
    const [addedToCart, setAddedToCart] = useState(false);



    const onAdd = (item, count) => {
        setAddedToCart(true)
        addItem(item, count)
    }
    
   

    
    
    return (
        <Box sx={{
            margin: 10,
        }}>
            <Container className='item-detail-container'>
                <Grid container spacing={2} className='item-detail-grid'>
                    <Grid item xs={12} md={6}>
                        <Image fluid className='item-detail-image' src={image} alt={name}/>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid container item direction="column" justifyContent="center" xs={12} md={4} className='item-description' >
                        <h1>{name}</h1>
                        <h3>${price}</h3>            
                        <p>{description}</p>
                        
                        <div>
                            { addedToCart ? 
                            (<Link to='/cart'><Button variant="outlined" color="success" className='finish-sale-btn'  >Terminar compra</Button></Link>
                            ) : ( 
                            <ItemCount item={ item } initial={1} stock={stock} onAdd={onAdd}  />) }
                            
                        </div>
                        
                    </Grid>    

                </Grid>
            </Container>
        </Box>  
    )
}

export default ItemDetail;
