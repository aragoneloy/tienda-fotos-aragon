import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { ItemsContext } from '../../Context/ItemContext';
import ItemDetail from '../ItemDetail/ItemDetail'


//React-bs components
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// mui components
import { Box } from '@mui/system';
import { LinearProgress } from '@mui/material';


const ItemDetailContainer = () => { 
    const { items } = useContext(ItemsContext);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});
    const { id } = useParams();
     //le resto 1 ya que los indices de arrays de objetos comienzan en 0.
    
  
    
    useEffect(() => {
        setLoading(true);
        
        const data = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items[id - 1]);
            }, 1000);
        });
                
            
            data.then(data => {
                setItem(data)}

            )
            data.catch(err =>{
                console.log(err)
            }
            )
            data.finally(() => {
                setLoading(false);
            })
            
        }, [id]);
    

   return ( loading ? (
   
   <Box><LinearProgress/></Box>
   
   ) : (
   
   <Container>
        <Row >
           <ItemDetail item={item}/>
        </Row>
    </Container>) 


)

}

export default ItemDetailContainer;
