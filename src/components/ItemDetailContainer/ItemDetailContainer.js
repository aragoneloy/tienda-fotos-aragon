import React from 'react';
import { useState, useEffect } from 'react';
import { prod } from '../../productos.js';
import ItemDetail from '../ItemDetail/ItemDetail'
//React-bs components
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => { 
    
    let id = useParams();
    
    let itemID = id.id - 1
    
    


    const [item, getItem] = useState([])
    useEffect(() => {
        
        setTimeout(() => {
    
            const data = new Promise((resolve, reject) => {
                resolve(prod[itemID]);
            })
            data.then(data => {
                getItem(data)}

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
           <ItemDetail item={item}/>
        </Row>
    </Container>

)

}


