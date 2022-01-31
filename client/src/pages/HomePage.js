import React from 'react';
import Project from '../components/Project';
import myImage from '../assets/images/myImage.jpeg';


function HomePage(props) {

    return(
        <div>
        <img src={myImage} alt="myImage" className="center"/>
        <Project title={props.title} subTitle={props.subTitle} text={props.text} />
      <div>
        
      </div>
    </div>

    );

}

export default HomePage; 