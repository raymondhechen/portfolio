import React, { Component } from 'react';
import Bar from '../components/bar';

import './about.css'

class About extends Component {
    render() {
        return (
            <div>
                <div className="desc">
                    <h1>Hey!</h1>
                    <p>
                    I'm a second-year Trinity student and Huang Fellow at Duke University from New Jersey. 
                    Academically, computer science, statistics, software engineering, and data science are my main focuses, although I'm also interested in business and medicine.
                    Outside the classroom, I am passionate about design, photography, and astronomy.
                    I am also a badminton player with over a decade of international competitive experience. 
                    Feel free to contact me with any comments or questions!
                    </p>
                </div>
                <div className="Aflex">
                    <div className="edu">
                        <h1>Education</h1>
                        <Bar link="https://www.duke.edu" img="/images/duke.png" text1="Duke University" text2="B.S. Computer Science" text3="2022"/>
                        <Bar link="https://www.pingry.org" img="/images/pingry.jpg" text1="Pingry School" text2="High School Diploma" text3="2018"/>
                    </div>
                    <div className="exp">
                        <h1>Experience</h1>
                        <Bar link="https://www.pendo.io/" img="/images/pendo.jpg" text1="Incoming Software Engineering Intern" text2="Pendo" text3="2020"/>
                        <Bar link="https://www.dukeimpact.org/" img="/images/diig.jpeg" text1="Project Manager" text2="Duke Impact Investing Group" text3="2020"/>
                        <Bar link="https://hackduke.org" img="/images/hackduke.png" text1="Developer" text2="HackDuke Planning Committee" text3="2020"/>
                        <Bar link="https://pearsonlab.github.io" img="/images/pearson.png" text1="Software Engineering Intern" text2="Pearson Lab" text3="2019"/>
                    </div>
                    <div className="extra">
                        <h1>Others</h1>
                        <Bar link="https://dukethecube.com/" img="/images/cube.png" text1="Member" text2="The Cube" text3="2020"/>
                        <Bar link="https://scienceandsociety.duke.edu/learn/undergraduate-programs/huang-fellows-program" img="/images/huang.png" text1="Huang Fellow" text2="Duke Science & Society" text3="2019"/>
                    </div>
                </div>
                <div className="footer"></div>
            </div>
        )
    }

    componentDidMount() {
        document.body.style.backgroundColor = "rgb(0, 128, 255)";    
    }
}

export default About;