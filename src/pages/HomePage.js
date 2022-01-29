// import { Carousel } from 'bootstrap';
import React from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import myImage from '../assets/images/myImage.jpeg';
import { Col} from 'react-bootstrap';


function HomePage(props) {

    return(
        <div>
        <img src={myImage} alt="myImage" className="center"/>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        </div>
    );

}

export default HomePage; 