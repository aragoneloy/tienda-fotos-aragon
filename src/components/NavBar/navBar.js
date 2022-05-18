import '../NavBar/navBar.css'

import React, { Component } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import CartWidget from '../cart/CartWidget'
import { Link } from 'react-router-dom'

export default class NavbarComp extends Component {
    
    render() { 
        return (
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
                            
                        </Nav>
                       
                        <CartWidget></CartWidget>
                        
                        </Navbar.Collapse>
                    </Container>
                </Navbar> 
            </div>
        );
    }
}
 
