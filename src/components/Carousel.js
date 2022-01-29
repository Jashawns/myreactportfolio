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
import { Container } from 'react-bootstrap';


class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0, 
                    title: 'Dev Grub', 
                    subTitle: 'The cookbook for developers',
                    imgSrc: bookSearch, 
                    link: 'https://github.com/Jashawns/Book_Search_Engine/', 
                    selected: false
                },
                {
                    id: 1, 
                    title: 'Garrett Love', 
                    subTitle: 'YouTube channel',
                    imgSrc: bookworm, 
                    link: 'https://github.com/pgurung95/Boolean_Bookworm/', 
                    selected: false
                },
                {
                    id: 2, 
                    title: 'Evverest', 
                    subTitle: 'A social network for developers',
                    imgSrc: CodeQuiz, 
                    link: 'https://github.com/Jashawns/codeQuiz/', 
                    selected: false
                },
                {
                    id: 3, 
                    title: 'Dev Grub', 
                    subTitle: 'The cookbook for developers',
                    imgSrc: noteTaker, 
                    link: 'https://github.com/Jashawns/note_taker/', 
                    selected: false
                },
                {
                    id: 4, 
                    title: 'Garrett Love', 
                    subTitle: 'YouTube channel',
                    imgSrc: scheduler, 
                    link: 'https://github.com/Jashawns/workDayScheduler.git/', 
                    selected: false
                },
                {
                    id: 5, 
                    title: 'Evverest', 
                    subTitle: 'A social network for developers',
                    imgSrc: team, 
                    link: 'https://github.com/Jashawns/team_profile_generator/', 
                    selected: false
                },
                {
                    id: 6, 
                    title: 'Evverest', 
                    subTitle: 'A social network for developers',
                    imgSrc: weather, 
                    link: 'https://github.com/Jashawns/weather_dashboard/', 
                    selected: false
                },
                {
                    id: 7, 
                    title: 'Evverest', 
                    subTitle: 'A social network for developers',
                    imgSrc: workTracker, 
                    link: 'https://github.com/Jashawns/workout_tracker/', 
                    selected: false
                },
                {
                    id: 8, 
                    title: 'Evverest', 
                    subTitle: 'A social network for developers',
                    imgSrc: yoda, 
                    link: 'https://github.com/caitbopp/yoda-advice/', 
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
            <Container fluid={false}>
                <div class="d-flex justify-content-around">
                    {this.makeItems(this.state.items)}

                </div>
            </Container>
        );

    }
}

export default Carousel; 