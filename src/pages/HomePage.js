// import { Carousel } from 'bootstrap';
import React from 'react';
import Hero from '../components/Hero';
import myImage from '../assets/images/myImage.jpeg';


function HomePage(props) {

    return(
        <div>
        <img src={myImage} alt="myImage" className="center"/>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        </div>
    );

}

export default HomePage; 