import React from 'react';
import Container from 'react-bootstrap/Container';

function ResumePage(props) {

    return(
        <div className="bground">
        <Container>
          <h1>Projects</h1>
          <p><a href="https://drive.google.com/file/d/1ORPKVPYk3E-ADSNCHpznTWBO988Dh9_-/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download my Resume</a></p>

          <h1>Frontend Proficiencies</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>

          <h1>Backend Proficiencies</h1>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </Container>
      </div>
    );

}

export default ResumePage; 