import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav'

// navbar
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Jashawn Stewart',
      headerlinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
      ], 
      home: {
        title: 'Be Relentless',
        subtitle: 'Projects that make a difference',
        text: 'Checkout my projects below'
      }, 
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      } 
    }
  }

  render() {
    return (
        <Router>
          <Container className="p-0" fluid={true}>
            <p>Hi from Jashawn's React</p>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Testing Navbar</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
            {/* react router */}
              <Nav className="ms-auto">

                <Link className="nav-link" to="/">Home</Link> 
                <Link className="nav-link" to="/about">About</Link> 
                <Link className="nav-link" to="/contact">Contact</Link> 

              </Nav>
            </Navbar.Collapse>
            </Navbar>
          </Container>
        </Router>

    );
  }
}

export default App;
