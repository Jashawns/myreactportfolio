import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
// import Carousel from "../components/Carousel";
// import { Col, Container, Image, Row } from "react-bootstrap";


function CardInfo(props) {

    const style = motion({opacity: 1, from: {opacity: 0}});

    return( 
        <AnimatePresence.div className="j-card-info" style={style}>
            <p className="j-card-title">{props.title}</p>
            <p className="j-card-subTitle">{props.subTitle}</p>
            <a> href="{props.link}" target="_blank" rel="noopener noreferrer">View</a>
        </AnimatePresence.div>
    );

}

export default CardInfo;