import React, { Component } from 'react';
import Card from '../components/card';

import './items.css';

class Projects extends Component {
    render() {
        return (
            <div>
                 <div className="flex">
                    <Card 
                        img="/images/project4.jpg" 
                        text1="Cold Call" 
                        text2="Empowering the Students" 
                        text3="2020"
                        linkW="https://coldcall-frontend.herokuapp.com/"
                        linkG="https://github.com/raymondhechen/coldcall" 
                    />
                    <Card 
                        img="/images/project2.png" 
                        text1="ShuttleRank" 
                        text2="Web App for Duke Badminton" 
                        text3="2019"
                        linkW="http://rank.dukebadminton.org"
                        linkG="https://github.com/raymondhechen/shuttlerank" 
                    />
                    <Card 
                        img="/images/project1.jpeg"
                        text1="Portfolio" 
                        text2="Personal Website" 
                        text3="2018"
                        linkW="https://www.raymondhechen.com"
                        linkG="https://github.com/raymondhechen/raymondhechen.github.io" 
                    />
                </div>
                <div className="footer"></div>
            </div>
        )
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#e65461";
    }
}

export default Projects;