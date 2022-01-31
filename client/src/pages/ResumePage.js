import React from 'react';
import { Container } from 'react-materialize';
// import Container from 'react-bootstrap/Container';
import Project from '../components/Project';

function ResumePage(props) {

    return(
        <div className="bground">
        <Container>
        <Project title={props.title} subTitle={props.subTitle} text={props.text} />
          <p><a href="https://drive.google.com/file/d/1ORPKVPYk3E-ADSNCHpznTWBO988Dh9_-/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download my Resume</a></p>

          <h1><u>Frontend Proficiencies</u></h1>
          <ul>
            <li>🔹 HTML</li>
            <li>🔹 CSS</li>
            <li>🔹 JavaScript</li>
            <li>🔹 JQuery</li>
            <li>🔹 Responsive Design</li>
            <li>🔹 React</li>
            <li>🔹 Bootstrap</li>
          </ul>

          <h1><u>Backend Proficiencies</u></h1>
          <ul>
            <li>🔹 APIs</li>
            <li>🔹 Node</li>
            <li>🔹 Express</li>
            <li>🔹 MySQL</li>
            <li>🔹 Sequelize</li>
            <li>🔹 MongoDB</li>
            <li>🔹 Mongoose</li>
            <li>🔹 REST</li>
            <li>🔹 GraphQL</li>
          </ul>
        </Container>
      </div>
    );

}

export default ResumePage; 