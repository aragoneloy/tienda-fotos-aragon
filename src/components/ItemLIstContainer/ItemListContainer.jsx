import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList.js';
import { prod } from '../../productos';

//React-bootstrap
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';




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

