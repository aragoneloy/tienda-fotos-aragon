import React from 'react';
import './ItemDetail.css'
//material imports
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Image from 'react-bootstrap/Image'
const ItemDetail = ({ item }) => {
    const { name, price, image, description} = item;
    
    return (
        <Box sx={{
            margin: 10,
        }}>
            <Container className='item-detail'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Image fluid className='item-detail-image' src={image} alt={name}/>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <h1>{name}</h1>
                        <h3>${price}</h3>            
                        <p>{description}</p>
                        <Button variant="contained">Comprar</Button>
                    </Grid>    
                        
                    
                    
                
                </Grid>
            </Container>
        </Box>  
    )
}

export default ItemDetail;
