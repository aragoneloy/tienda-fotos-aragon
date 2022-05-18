import React from 'react';
import './ItemDetail.css'

//material imports
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

//react-bootstrap imports
import Image from 'react-bootstrap/Image'

import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = ({ item }) => {
    const { name, price, image, description} = item;
    
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
                        <ItemCount initial={1} stock={10}/>
                    </Grid>    

                </Grid>
            </Container>
        </Box>  
    )
}

export default ItemDetail;
