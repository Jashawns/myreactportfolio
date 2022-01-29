import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
   
    return (
        <Navbar bg="primary" expand="lg" variant="dark full" className="header">
            <Container style={{padding: '30px'}}>
                <Navbar.Brand href="/" style={{fontSize: '24px'}}>Jashawn Stewart</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/">About Me</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header;

