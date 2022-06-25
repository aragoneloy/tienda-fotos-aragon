import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import "././cart.css"
import { CartContext } from '../../Context/CartContext';

//material ui
import { MdDelete } from 'react-icons/md';
import { Button, Paper } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import {CardContent} from '@mui/material';
import {Typography} from '@mui/material';
import Card from '@mui/material/Card'; 
import CardActions from '@mui/material/CardActions';

const Cart = () => {
    const { cartItems, removeItem, clearCart, cartTotal, cartQuantity } = useContext(CartContext);
    

    
    
    return ( cartItems.length !== 0 ? (
        <>
            
            <div className='cart-container'>
                    <h1>Carrito</h1>
                    {cartItems.map(item => {
                        return (
                            <div key={item.item.id}>
                                <Paper elevation={4}>
                                <Card sx={{ 
                                        width: '70vw',
                                        height: '15vh',
                                        margin: '15px', 
                                        display: 'flex',
                                        flexDirection: 'row',

                                        
                                        }}>
                                    <CardMedia
                                        component="img"
                                        alt={item.item.name}
                                        height="140"
                                        image={item.item.image}
                                        sx={{ 
                                            maxWidth: 150,
                                            
                                            }}
                                    />
                                    <CardContent sx={{ 
                                            display: 'flex',
                                            flexGrow: 1,
                                            justifyContent: 'space-around',
                                            alignItems: 'center',
                                            
                                            }}>
                                        <Typography  variant="h6" component="div">
                                            {item.item.name}
                                        </Typography>
                                        <Typography variant="body1" >
                                            Cantidad: {item.count}
                                        </Typography>
                                        <Typography variant="body1" >
                                            ${item.item.price}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => removeItem(item.item)} variant='outlined' color='warning'size='small'endIcon={<MdDelete/>}>Quitar</Button>
                                        
                                    </CardActions>
                                    </Card>
                               
                                
                            </Paper>    
                            </div>
                        )} 
                    )}
                <Button variant='contained' color='error' size='small' onClick={clearCart}>Vaciar carrito</Button>
            </div>
            
                
                <div className='cart-total'>
                    <h4>Total de compra ${cartTotal}</h4>
                    <h4>Cantidad de articulos: {cartQuantity}</h4>
                    <Link to='/checkout'><Button variant='contained' color='primary'>Continuar compra</Button></Link> 
                    
                </div>
                



        </> ) : (
            <div className='cart-container'>
                <div className='cart-empty'>
                    <h3>Parece que no hay fotos agregadas al carrito</h3>
                    <Link to='/'><Button variant='contained' >Ir a la tienda</Button></Link>
                </div>
            </div>  )
     
)}
 
export default Cart;