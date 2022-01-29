import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Hero from '../components/Hero';
import Content from '../components/Content';

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
  }

  render() {
    return(
      <div>
        <Hero title={this.props.title} />

        <Content>
        <Form onSubmit={this.handleSubmit}>
            <h1>Contact Information</h1><br></br>
            <Form.Group>
              <Form.Label htmlFor="name" style={{color: "black"}}>Full Name:</Form.Label>
              <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
            </Form.Group><br></br>
            
            <Form.Group>
              <Form.Label htmlFor="email" style={{color: "black"}}>Email:</Form.Label>
              <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
            </Form.Group><br></br>

            <Form.Group>
              <Form.Label htmlFor="message" style={{color: "black"}}>Message:</Form.Label>
              <Form.Control id="message" name="message" as="textarea" rows={5} cols={100} value={this.state.message} onChange={this.handleChange}/>
            </Form.Group><br></br>

            <Button 
              className="d-line-block" variant="primary" type="submit" disabled={this.state.disabled}>
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
 
//     return(
//         <div className = "bground">
//         <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
//         <Container>
//           <Row>
//             <Col xs={6}>
            //   <Form className="ml-auto w-40 p-3">
            //   <h1>Contact</h1>
            //   <Form.Group>
            //     <Form.Label for="name" style={{color: "black"}}>Name:</Form.Label>
            //     <Form.Control type="text" name="name"/>
            //   </Form.Group><br></br>
            //   <Form.Group>
            //     <Form.Label for="email" style={{color: "black"}}>Email Address:</Form.Label>
            //     <Form.Control type="email" name="email"/>
            //   </Form.Group><br></br>
            //   <Form.Group>
            //     <Form.Label for="abstract" style={{color: "black"}}>Message:</Form.Label>
            //     <Form.Control as="textarea" required rows={4} cols={100}/>
            //   </Form.Group>
            //   <br></br>
            //   <Button variant="secondary" type="submit">Submit</Button>
            // </Form>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );

// }

// export default ContactPage; 