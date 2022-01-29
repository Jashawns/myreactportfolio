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
import PortfolioPage from './pages/Portfolio';
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
        {title: 'Portfolio', path: '/portfolio'},
        {title: 'Contact', path: '/contact'},
        {title: 'Resume', path: '/resume'},
      ], 
      home: {
        title: 'Be Relentless:',
        subTitle: 'Projects that make a difference',
      }, 
      about: {
        title: 'About Me:'
      },
      portfolio: {
        title: 'Knowledge Base:',
        subTitle: 'Projects that make a difference',
        text: 'Checkout my projects below'
      }, 
      contact: {
        title: 'Let\'s Talk:'
      }, 
      resume: {
        title: 'Credentials:'
      } 
    }
  }

  render() {
    return (
        <Router>
          <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg" >
            <NavbarBrand>Welcome to Jashawn's Page</NavbarBrand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" color="#fff" />
            <NavbarCollapse id="navbar-toggle">
            {/* react router */}
              <Nav className="ms-auto">

                <Link className="nav-link" to="/">Home</Link> 
                <Link className="nav-link" to="/about">About</Link> 
                <Link className="nav-link" to="/portfolio">Portfolio</Link> 
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/resume">Resume</Link> 

              </Nav>
            </NavbarCollapse>

            </Navbar>

            <Switch>
            <Routes>

            <Route exact path="/" element={ <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} /> } />

            <Route path="/about" element={ <AboutPage title={this.state.about.title} /> } />

            <Route path="/portfolio" element={ <PortfolioPage title={this.state.portfolio.title} subTitle={this.state.portfolio.subTitle} text={this.state.portfolio.text}/> } />

            <Route path="/contact" element={ <ContactPage title={this.state.contact.title} /> } />

            <Route path="/resume" element={ <ResumePage title={this.state.resume.title} /> } />
            </Routes>
            </Switch>

        </Container>
            <Footer />


        </Router>

    );
  }
}

export default App;
