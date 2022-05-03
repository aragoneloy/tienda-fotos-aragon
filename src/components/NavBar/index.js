import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import { CartWidget } from '../cart/CartWidget'


export default class NavbarComp extends Component {
    
    render() { 
        return (
            <div>
                <Navbar bg="dark" expand="lg" variant='dark'>
                    <Container fluid>
                        <Navbar.Brand href="#">LightPaints</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            
                            <Nav.Link href="#action2">Bio</Nav.Link>
                            <NavDropdown title="Tienda de fotos" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Eventos</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Decorativas</NavDropdown.Item>
                            
                            </NavDropdown>
                            <Nav.Link href="#" >
                            Contacto
                            </Nav.Link>
                        </Nav>
                       
                        <CartWidget></CartWidget>
                        
                        </Navbar.Collapse>
                    </Container>
                </Navbar> 
            </div>
        );
    }
}
 
