import React from 'react';
import logo from './logo.svg';
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
        <div>Hello From Jashawn</div>

    );
  }
}

export default App;
