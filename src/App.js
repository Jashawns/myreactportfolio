import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
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
          <Container fluid={true}>
            <p>Hi from Jashawn's React</p>
          
          </Container>
        </Router>

    );
  }
}

export default App;
