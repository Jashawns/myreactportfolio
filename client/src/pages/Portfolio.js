// import { Carousel } from 'bootstrap';
import React from 'react';
import Carousel from '../components/Carousel';
import Project from '../components/Project';

function PortfolioPage(props) {

    return(
        <div>
        <Project title={props.title} subTitle={props.subTitle} text={props.text}/>
        <Carousel />
        </div>
    );

}

export default PortfolioPage; 