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
                        Hello my name is Jashawn Stewart. I am a full stacks web developer with experience in MERN, APIs, Express, Javascript, 3rd Party APIs, Object-Oriented Programming, Mongo, and React. I'm a mediator turned full stacks web developer via the John Hopkins Full Stacks Web Development certification program.
                        </p>
  
                        <p>
                        My goal is to freelance as a web developer and to continue to learn new things as programming continues to evolve. Examples of projects I've personally developed or worked as a team developing can be found in my portfolio and/or the gitgub profile linked below.
                        </p>


                </Content>

        </div>
        
        );

};

export default AboutPage; 