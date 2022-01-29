import React from 'react';

import Card from '../components/Card';
import bookSearch from '../assets/images/bookSearch.png';
import bookworm from '../assets/images/bookworm.png';
import CodeQuiz from '../assets/images/CodeQuiz.png';
import noteTaker from '../assets/images/noteTaker.png';
import scheduler from '../assets/images/scheduler.png';
import team from '../assets/images/team.png';
import weather from '../assets/images/weather.png';
import workTracker from '../assets/images/workTracker.png';
import yoda from '../assets/images/yoda.png';
import passwordGen from '../assets/images/passwordGen.png';
import { Container } from 'react-bootstrap';


class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0, 
                    title: 'Book Search Engine', 
                    subTitle: 'MERN',
                    imgSrc: bookSearch, 
                    link: 'https://github.com/Jashawns/Book_Search_Engine/', 
                    selected: false
                },
                {
                    id: 1, 
                    title: 'Bookclub Website', 
                    subTitle: 'Node.js, Sequelize ORM, HTML, CSS, JavaScript, Normalize, Bootstrap, JSON API, Bcrypt, Connect-Session-Sequelize, Dotenv, Express-Handlebars, Express-Session, MySql, MySql2, Sequelize, Underscore',
                    imgSrc: bookworm, 
                    link: 'https://github.com/pgurung95/Boolean_Bookworm/', 
                    selected: false
                },
                {
                    id: 2, 
                    title: 'Code Quiz', 
                    subTitle: 'Web APIs',
                    imgSrc: CodeQuiz, 
                    link: 'https://github.com/Jashawns/codeQuiz/', 
                    selected: false
                },
                {
                    id: 3, 
                    title: 'Note Taker', 
                    subTitle: 'Express.js',
                    imgSrc: noteTaker, 
                    link: 'https://github.com/Jashawns/note_taker/', 
                    selected: false
                },
                {
                    id: 4, 
                    title: 'Work Day Scheduler', 
                    subTitle: '3rd Party APIs',
                    imgSrc: scheduler, 
                    link: 'https://github.com/Jashawns/workDayScheduler.git/', 
                    selected: false
                },
                {
                    id: 5, 
                    title: 'Team Profile Generator', 
                    subTitle: 'Object-Oriented Programming',
                    imgSrc: team, 
                    link: 'https://github.com/Jashawns/team_profile_generator/', 
                    selected: false
                },
                {
                    id: 6, 
                    title: 'Weather Dashboard', 
                    subTitle: 'Server-Side APIs',
                    imgSrc: weather, 
                    link: 'https://github.com/Jashawns/weather_dashboard/', 
                    selected: false
                },
                {
                    id: 7, 
                    title: 'Workout Tracker', 
                    subTitle: 'Mongo and Express',
                    imgSrc: workTracker, 
                    link: 'https://github.com/Jashawns/workout_tracker/', 
                    selected: false
                },
                {
                    id: 8, 
                    title: 'Yoda Advice Generator', 
                    subTitle: 'HTML, CSS, JS, JQuery, MaterializeCSS, Fun Translations API, Advice Slip JSON API',
                    imgSrc: yoda, 
                    link: 'https://github.com/caitbopp/yoda-advice/', 
                    selected: false
                },
                {
                    id: 9, 
                    title: 'Password Generator', 
                    subTitle: 'HTML, JavaScript and CSS',
                    imgSrc: passwordGen, 
                    link: 'https://github.com/Jashawns/Password-Generator.git/', 
                    selected: false
                },
            ]
            

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });

    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <div className="d-flex flex-wrap">
                    {this.makeItems(this.state.items)}
                </div>
            </Container>
        );

    }
}

export default Carousel; 