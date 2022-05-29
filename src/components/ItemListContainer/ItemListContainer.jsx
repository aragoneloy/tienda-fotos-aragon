import React, { useEffect, useContext, useState } from 'react';
import ItemList from '../ItemList/ItemList.js';


import { ItemsContext } from '../../Context/ItemContext.js';

//React-bootstrap
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
//material ui
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';




const ItemListContainer = () => {
    const { items, setItems } = useContext(ItemsContext)
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        
   
        const data = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items);
                }, 2000);

        });
        data.then(data => {
            setItems(data)}

        )
        data.catch(err =>{
            console.log(err)
        }
        )
        data.finally(() => {
            setLoading(false);
        })
    },[items] )
    
        
        
        
        return ( loading ? (<Box>    <LinearProgress /> </Box>
        ) : (
            <Container>
                <Row >
                   <ItemList items={items}/>
                </Row>
            </Container>)
            
        
    );
    }

export default ItemListContainer;

