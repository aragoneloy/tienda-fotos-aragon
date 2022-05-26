import React, { useEffect, useContext } from 'react';
import ItemList from '../ItemList/ItemList.js';


import { ItemsContext } from '../../Context/ItemContext.js';

//React-bootstrap
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';




const ItemListContainer = () => {
    const [items, setItems] = useContext(ItemsContext)

    useEffect(() => {
        setTimeout(() => {
   
        const data = new Promise((resolve, reject) => {
            resolve(items);
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
        
        console.log('data', items)
        
        return (
            <Container>
                <Row >
                   <ItemList items={items}/>
                </Row>
            </Container>
        
    );
    }

export default ItemListContainer;

