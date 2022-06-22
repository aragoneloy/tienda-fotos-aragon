import '../NavBar/navBar.css'

import React, { useContext } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import CartWidget from '../cart/CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { Button } from '@mui/material';
import  { MenuItem } from '@mui/material';
import { Menu } from '@mui/material';

const NavbarComp = () => {
    const { cartItems } = useContext(CartContext);
   
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return ( cartItems.length > 0 ? (
        <div>
                        <Navbar bg="dark" expand="lg" variant='dark'>
                            <Container fluid>
                                <Navbar.Brand><Link className='nav-link' to="/">LightPaints</Link></Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    
                                    <Nav.Link href="#action2"><Link className='nav-link' to="/about">Bio</Link></Nav.Link>
                                    
                                    
                                    <Nav.Link><Link className='nav-link' to="/contact">Contacto</Link></Nav.Link>   
                                    <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    Categorias
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Link to='/category/nature' className='nav-link' >
                                            Naturaleza
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link to='/category/urban' className='nav-link'>
                                            Street photography
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link to='/category/abstract' className='nav-link'>
                                            Abstracto
                                        </Link>
                                    </MenuItem>
                                </Menu>
                               
                                </Nav>
                                

                                <CartWidget></CartWidget>
                                
                                </Navbar.Collapse>
                            </Container>
                        </Navbar> 
                    </div>
              ) : (
                <Navbar bg="dark" expand="lg" variant='dark'>
                <Container fluid>
                    <Navbar.Brand><Link className='nav-link' to="/">LightPaints</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                        <Nav.Link href="#action2"><Link className='nav-link' to="/about">Bio</Link></Nav.Link>
                        
                        
                        <Nav.Link><Link className='nav-link' to="/contact">Contacto</Link></Nav.Link>   
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Categorias
                    </Button>
                    <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link to='/category/nature' className='nav-link'>
                                    Naturaleza
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to='/category/urban' className='nav-link'>
                                    Street photography
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to='/category/abstract' className='nav-link'>
                                    Abstracto
                                </Link>
                            </MenuItem>
                    </Menu>
                    </Nav>
                
                    
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar> )
     );
}
 
export default NavbarComp;


 
