import React from 'react';
import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import { prod } from '../../productos'

import { Row } from 'react-bootstrap';


import ItemList from '../ItemList/ItemList.js';

const ItemListContainer = () => {
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
        
    );
    }

export default ItemListContainer;

