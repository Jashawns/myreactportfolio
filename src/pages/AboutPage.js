import React from 'react';
import Hero from '../components/Hero'
// import Container from 'react-bootstrap/Container';
import { IoPersonCircleSharp } from "react-icons/io5";
import Content from '../components/Content';

function AboutPage(props) {

    return(

        <div>

            <Hero title={props.title} />

                <Content>
                
                    <h1>About me</h1>

                        <li><a href="https://workfeelsgood.com/wp-content/uploads/2018/11/shutterstock_1016302528_editorial-start-button-new-career-1200x628-768x402.jpg" target="_blank" rel="noopener noreferrer"><strong><IoPersonCircleSharp size="5rem" color=""></IoPersonCircleSharp></strong></a></li>
                       
                        <p>
                        I am a mediator turned full stacks web developer via the John Hopkins Full Stacks Web Development certification program. I currently hold a Masters in Public Administration and a Bachelors in Government and Politics. My full stacks web development certification is expected in August 2021.
                        </p>

                </Content>

        </div>
        
        );

};

export default AboutPage; 