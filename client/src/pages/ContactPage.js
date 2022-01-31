import React from 'react';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import "materialize-css/dist/css/materialize.min.css";
// import Form from "react-forms-materialize-css";
import Project from '../components/Project';
import Content from '../components/Content';
import Axios from 'axios';
import { Button } from 'react-materialize';

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
    }
  }

  handleChange = (event) => {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value

    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
// prevent sending same email multiple times
    this.setState({
      disabled: true,

    });
    
    Axios.post('http://localhost:3030/api/email', this.state)
    .then(res => {
      if(res.data.success) {
        this.setState({
          disabled: false,
          emailSent: true

        });

      } else {

          this.setState({
              disabled: false,
              emailSent: false
            });
        }
    })

    .catch(err => {
      this.setState({
        disabled: false,
        emailSent: false
      });
    })
  }

  render() {
    return(
      <div>
        <Project title={this.props.title} />

        <Content>
        <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="name" style={{color: "black", 'font-size': '30px'}}>Full Name:</Form.Label>
              <Form.Control style={{'font-size': '20px'}} id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
            </Form.Group><br></br>
            
            <Form.Group>
              <Form.Label htmlFor="email" style={{color: "black", 'font-size': '30px'}}>Email:</Form.Label>
              <Form.Control style={{'font-size': '20px'}} id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
            </Form.Group><br></br>

            <Form.Group>
              <Form.Label htmlFor="message" style={{color: "black", 'font-size': '30px'}}>Message:</Form.Label>
              <Form.Control style={{'font-size': '20px'}} id="message" name="message" as="textarea" rows={5} cols={100} value={this.state.message} onChange={this.handleChange}/>
            </Form.Group><br></br>

            <Button 
              className="d-line-block" style={{'font-size': '20px'}} variant="primary" type="submit" disabled={this.state.disabled}>
              Send
            </Button>

            {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
            {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
          </Form>
        </Content>
      </div>
    );
  }

}

export default ContactPage;
 
