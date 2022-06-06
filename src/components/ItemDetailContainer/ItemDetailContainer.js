import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { ItemsContext } from '../../Context/ItemContext';
import ItemDetail from '../ItemDetail/ItemDetail'

//firebase
import { db } from '../../firebase/firebaseConfig'
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
//React-bs components
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// mui components
import { Box } from '@mui/system';
import { LinearProgress } from '@mui/material';


const ItemDetailContainer = () => { 
    
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState([]);
    const { id } = useParams();
     
    
  
    
    useEffect(() => {
       const getItem = async () => {
            const q = query(collection(db, "products"), where(documentId(), "==", id));
            const docs = []
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
                setItem(docs);
                
            });  
             
        
    }
    getItem()
    setTimeout(() => {
        setLoading(false);
    }, 1000);
    }, [id])
    

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
