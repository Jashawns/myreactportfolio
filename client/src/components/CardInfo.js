import React from 'react';
import { useSpring, animated } from 'react-spring';
import { AiFillGithub } from "react-icons/ai";
// import { motion, AnimatePresence } from "framer-motion";
// import Carousel from "../components/Carousel";
// import { Col, Container, Image, Row } from "react-bootstrap";


function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return( 
        <animated.div className="j-card-info" style={style}>
            <p className="j-card-title">{props.title}</p>
            <p className="j-card-subTitle">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer"><strong><AiFillGithub size="3rem" className="social-icons"></AiFillGithub></strong></a>
        </animated.div>
    );

}

export default CardInfo;