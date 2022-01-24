import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-5">
        <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
        <Col xs lg="2">
          <li><a href="https://github.com/Jashawns/" target="_blank" rel="noopener noreferrer"><strong><AiFillGithub size="3rem" className="social-icons"></AiFillGithub></strong></a></li>
            
          </Col>
          <Col xs lg="2">
          <li><a href="https://www.linkedin.com/in/jashawn-stewart-89a153206/" target="_blank" rel="noopener noreferrer"><strong><AiFillLinkedin
              size="3rem"
              className="social-icons"
            ></AiFillLinkedin></strong></a></li>
            
          </Col>
          <Col xs lg="2">
          <li><a href="https://stackoverflow.com/users/15171296/jashawns?tab=profile/" target="_blank" rel="noopener noreferrer"><strong>            <FaStackOverflow
              size="3rem"
              className="social-icons"
          ></FaStackOverflow></strong></a></li>

          </Col>
        </Row>
        <Col className="p-0 d-flex justify-content-end" lg={6}>
                        This site was made by Jashawn Stewart.
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;