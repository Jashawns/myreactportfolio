// import { Carousel } from 'bootstrap';
import React from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';

function HomePage(props) {

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
        </div>
    );

}

export default HomePage; 