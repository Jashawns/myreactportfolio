import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import Switch from 'react-bootstrap/Switch';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
// import Hero from './components/Hero';

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
        {title: 'Resume', path: '/resume'},
      ], 
      home: {
        title: 'Be Relentless',
        subTitle: 'Projects that make a difference',
        text: 'Checkout my projects below'
      }, 
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }, 
      resume: {
        title: 'Credentials'
      } 
    }
  }

  render() {
    return (
        <Router>
          <Container className="p-0" fluid={true}>
            <p>Hi from Jashawn's React</p>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <NavbarBrand>Testing Navbar</NavbarBrand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <NavbarCollapse id="navbar-toggle">
            {/* react router */}
              <Nav className="ms-auto">

                <Link className="nav-link" to="/">Home</Link> 
                <Link className="nav-link" to="/about">About</Link> 
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/resume">Resume</Link> 

              </Nav>
            </NavbarCollapse>

            </Navbar>

            <Switch>
            <Routes>
{/* 
            <Route exact path="/" element={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} /> */}
            <Route exact path="/" element={ <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/> } />

            <Route path="/about" element={ <AboutPage title={this.state.home.title} /> } />

            <Route path="/contact" element={ <ContactPage title={this.state.home.title} /> } />

            <Route path="/resume" element={ <ResumePage title={this.state.home.title} /> } />
            </Routes>
            </Switch>

        </Container>
            <Footer />


        </Router>

    );
  }
}

export default App;
