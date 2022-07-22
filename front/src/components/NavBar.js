import React from "react";
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import '../styles/NavBar.css'
const NavBar = ()=>{
    return (
        <Navbar expand='lg'>
            <Container>
                <Navbar.Brand href='/'>CovMan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id = 'basic-navbar-nav'>
                    <Nav className="me-auto">
                        <Nav.Link href="/about">A propos</Nav.Link>
                        <Nav.Link href='/contacus'>Contactez-nous</Nav.Link>
                    </Nav><Nav> 
                        <Nav.Link href='/login'>Se connecter</Nav.Link>
                        <Button variant="outline-primary" href='/register'>S'inscrire</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;