import React, { useState, useContext } from 'react'
import './CheckOut.css'
import MessageSuccess from '../../components/MessageSuccess/MessageSuccess';
import { CartContext } from '../../Context/CartContext';
//react router
import { Link } from 'react-router-dom';
//firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';

//material ui
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';



const styles = {
    containerCheckout: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '20px',
    },
}
    
const CheckOut = () => {
    const { cartItems, clearCart } = useContext(CartContext)
    
    const initialState = {
    buyer: {
    name: '',
    email: '',
    phone: '',  
    },
    items: cartItems.map(item => {
        return {
            
            price: item.item.price,
            name: item.item.name,
            id: item.item.id,
            
        }
        }),
    date: new Date(),
    total: cartItems.reduce((total, item) => total + item.item.price * item.count, 0),
}
    

    const [values, setValues] = useState(initialState)
    const [purchaseID, setPurchaseID] = useState('')
   
   

    
    
    
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, 
            buyer: {...values.buyer, [name]: value}, 
            
                
            
        })
       
        
    }
    
    
    
    const onSubmit = async (e) => {
        e.preventDefault()
        
        const docRef = await addDoc(collection(db, "purchases"), {
            values,
        });
        
        setPurchaseID(docRef.id)
        setValues(initialState)
        clearCart()
        
    }
    return (
        <div style={styles.containerCheckout}>
            <form className='form-container' onSubmit={onSubmit}>
                <h4>Ultimo paso</h4>
                <TextField 
                    placeholder='example@example.com' 
                    style={{margin: 10, width: 400}}
                    required 
                    name='email'
                    type="email" 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined"
                    value={values.buyer.email}
                    onChange={handleOnChange}
                    
                />
                <TextField 
                    placeholder='John Doe' 
                    style={{margin: 10, width: 400}}
                    required 
                    name='name' 
                    id="outlined-basic" 
                    label="Nombre" 
                    variant="outlined" 
                    value={values.buyer.name}
                    onChange={handleOnChange}
                />
                <TextField 
                    placeholder='0341-1234567' 
                    style={{margin: 10, width: 400}}
                    required 
                    name='phone' 
                    id="outlined-basic" 
                    label="Telefono" 
                    variant="outlined" 
                    value={values.buyer.phone}
                    onChange={handleOnChange}
                    
                />
                <Button type='sumbit' variant="contained" color='success' endIcon={<SendIcon />}>
                    Comprar
                </Button>
                {purchaseID && <div><MessageSuccess purchaseID={purchaseID} /> <Link to='/'><Button variant='contained' >Volver a la tienda</Button></Link></div>}
            </form>
            
        </div>

  )
}

export default CheckOut