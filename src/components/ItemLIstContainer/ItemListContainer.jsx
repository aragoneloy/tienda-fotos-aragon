import React from 'react';
import { useState, useEffect } from 'react';
import { prod } from '../../productos.js';
import Container from 'react-bootstrap/Container';

import ItemList from '../ItemList/ItemList.js';
import { Row } from 'react-bootstrap';




export const ItemListContainer = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setTimeout(() => {
   
        const data = new Promise((resolve, reject) => {
            resolve(prod);
        })
        data.then(data => {
            setItems(data)}

        )
        data.catch(err =>{
            console.log(err)
        }
        )
    }, 2000)
    },[]);
        
        
        
        return (
            <Container>
                <Row >
                   <ItemList items={items}/>
                </Row>
            </Container>
        
    )
    }

   

