import React from 'react';
// import {Row, Col, Form} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ContactPage(props) {

    return(
        <div className = "bground">
        <Container>
          <Row>
            <Col xs={6}>
              <Form className="ml-auto w-40 p-3">
              <h1>Contact</h1>
              <Form.Group>
                <Form.Label for="name" style={{color: "white"}}>Name:</Form.Label>
                <Form.Control type="text" name="name"/>
              </Form.Group><br></br>
              <Form.Group>
                <Form.Label for="email" style={{color: "white"}}>Email Address:</Form.Label>
                <Form.Control type="email" name="email"/>
              </Form.Group><br></br>
              <Form.Group>
                <Form.Label for="abstract" style={{color: "white"}}>Message:</Form.Label>
                <Form.Control as="textarea" required rows={4} cols={100}/>
              </Form.Group>
              <br></br>
              <Button variant="secondary" type="submit">Submit</Button>
            </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );

}

export default ContactPage; 