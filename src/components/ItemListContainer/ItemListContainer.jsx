import React, { useEffect, useContext, useState } from 'react';
import ItemList from '../ItemList/ItemList.js';


import { ItemsContext } from '../../Context/ItemContext.js';

//React-bootstrap
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
//material ui
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

//firebase
import { db } from '../../firebase/firebaseConfig'
import { collection, query, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
    const { items, setItems } = useContext(ItemsContext);
    const [loading, setLoading] = useState(true);
    
   
    useEffect(() => {
        const getItems = async () => {
            const q = query(collection(db, "products"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            
            querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id});
            setItems(docs);
            
        });   
        console.log(docs)
    }
    getItems()
    setTimeout(() => {
        setLoading(false);
    }, 1000);
    }, [setItems]);

        
        
        
        return ( loading ? (<Box>    <LinearProgress /> </Box>
        ) : (
            <Container>
                <h1>Tienda</h1>
                <Row >
                   <ItemList items={items}/>
                </Row>
            </Container>)
            
        
    );
    }

export default ItemListContainer;

