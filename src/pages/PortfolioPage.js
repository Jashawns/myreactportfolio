// import { Carousel } from 'bootstrap';
import React from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';

function PortfolioPage(props) {

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
        <Carousel />
        </div>
    );

}

export default PortfolioPage; 