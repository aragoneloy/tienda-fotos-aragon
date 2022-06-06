
import React from 'react';
import { useState, useEffect } from 'react';


import Item from '../../components/Item/Item';
//firebase
import { db } from '../../firebase/firebaseConfig'
import { collection, query, where, getDocs } from "firebase/firestore";
//react-router-dom
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
//material-ui
import { Box } from '@mui/system';
import { LinearProgress } from '@mui/material';
const Category = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const { category } = useParams();
     
    
  
    
    useEffect(() => {
       const getItems = async () => {
            const q = query(collection(db, "products"), where('category', "==", category));
            const docs = []
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
                setItems(docs);
                
            });  
             
        
    }
    getItems()
    
    setLoading(false);
    
    }, [category])
    console.log(items)

   return ( loading ? (
   
   <Box><LinearProgress/></Box>
   
   ) : (
        <div>
    {items.map(item => {
        return (
         <Link 
         to={`/detail/${item.id}`}
         key={item.id} 
         style={{textDecoration: 'none'}}
         >
           <Item  item={item} />
         </Link>
     )} )}
    </div>

)
)
}
export default Category;