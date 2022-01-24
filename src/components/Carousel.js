import React from 'react';
import bookSearch from '../assets/images/bookSearch.png';
import bookworm from '../assets/images/bookworm.png';
import CodeQuiz from '../assets/images/CodeQuiz.png';

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
                    link: 'https://github.com/Jashawns/Book_Search_Engine', 
                    selected: false
                },
                {
                    id: 1, 
                    title: 'Garrett Love', 
                    subTitle: 'YouTube channel',
                    imgSrc: bookworm, 
                    link: 'https://github.com/pgurung95/Boolean_Bookworm', 
                    selected: false
                },
                {
                    id: 2, 
                    title: 'Evverest', 
                    subTitle: 'A social network for developers',
                    imgSrc: CodeQuiz, 
                    link: 'https://github.com/Jashawns/codeQuiz', 
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

    render() {
        return(
            <p>Carousel Works!</p>
        );

    }
}

export default Carousel; 