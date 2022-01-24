import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';


function Hero(props) {

    return(
        
        <Container>
            <Row>
                <Col>
                    { props.title && <h1>{props.title}</h1> }
                    { props.subTitle && <h3>{props.subTitle}</h3> }
                    { props.text && <h3>{props.text}</h3> }                   
                </Col>
            </Row>
        </Container>
    );

}

export default Hero;