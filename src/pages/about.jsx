import React, { Component } from 'react';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';

import { device } from '../sizes';
import Header from './header';
import Card from '../components/card';

import '../components/animation.css';

const Me = '/images/DSC_0414-low.jpg';
const Duke = '/images/orgs/duke.svg';
const Pingry = '/images/orgs/pingry.svg';
const Pendo = '/images/orgs/pendo.svg';
const Ul = '/images/orgs/ul.svg';
const Pearson = '/images/orgs/pearson.svg';


const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PageInfo = styled.div`
    width: 87.5vw;
    max-width: 1450px;
    height: 100px;
    margin: 75px 0 50px 0;
    font-family: HKGrotesk;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    animation: 1s fadeInUp cubic-bezier(0.3, 0, 0, 1);

    @media ${device.mobileL} { 
        margin-bottom: 0;
    }
`;

const Body1 = styled.div`
    width: 87.5vw;
    max-width: 1450px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: HKGrotesk;
    animation: 1s fadeInUp cubic-bezier(0.3, 0, 0, 1);

    @media ${device.laptop} { 
        flex-direction: column;
        margin: 0;
    }
`;

const Col1 = styled.div` 
    width: 40%;
    text-align: center;

    @media ${device.laptop} { 
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    @media ${device.mobileL} { 
        margin: 5vh 0 0 0;
    }
`;

const Avatar = styled.img`
    width: 100%;
    min-width: 300px;
    height: auto;

    @media ${device.laptop} { 
        width: 50%;
    }
    @media ${device.mobileL} { 
        min-width: 250px;
    }
`;

const Col2 = styled.div`
    width: 60%;
    margin: 0 5vw 0 3.5vw;

    @media ${device.laptop} {
        display: block;
        width: 80%;
        max-width: 100vw;
        margin: 0;
        padding: 5vh 5vw 7.5vh 10vw;
    }
`;

const Text = styled.div`
    font-size: 19px;
    font-weight: 500;
    line-height: 30px;
    
    @media ${device.mobileL} {
        font-size: 17.5px;
        line-height: 22.5px;
    }
`;

const Body2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: HkGrotesk;
    padding: 100px 0 0 0;

    @media ${device.laptop} {
        padding: 0;
    }
`;

const Group = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const Subgroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 72.5vw;
    max-width: 1450px;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: calc(100vw - 85vw);
    animation: 1s fadeInUp cubic-bezier(0.3, 0, 0, 1);

    @media ${device.desktop} {
        width: calc((100vw - 1450px)/2);
    }
    @media ${device.mobileL} {
        visibility: hidden;
    }
`;

const Title = styled.div`
    font-size: 40px;
    font-weight: 800;
    margin-left: auto;
    transform: rotate(270deg);
    letter-spacing: 3px;
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10vh;
`;

const Description = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-text: center;
    line-height: 45px;
`;

const Desc1 = styled.div`
    font-size: 40px;
    font-weight: 700;
    @media ${device.mobileL} {
        font-size: 1em;
    }
`;

const Desc2 = styled.div`
    font-size: 30px;
    font-weight: 500;
    opacity: 0.65;
`;

const Desc3 = styled.div`
    font-size: 30px;
    font-weight: 500;
    opacity: 0.65;
`;

class About extends Component {

    componentDidMount() {
       document.body.style.backgroundColor = "#FFFFFF";
    }

    render() {
        return (
            <div>
                <Header/>
                <BodyContainer>
                    <PageInfo>
                        <div style={{fontSize: "35px", fontWeight: "800"}}>About</div>
                        <div style={{fontSize: "25px", fontWeight: "400", opacity: "0.7"}}>Me</div>
                    </PageInfo>
                    <Body1>
                        <Col1>
                            <Avatar src={Me}/>
                        </Col1>
                        <Col2>
                            <Text>
                                I'm a rising junior at Duke University from New Jersey. 
                                Academically, computer science and statistics are my focuses, and I aspire to have a career in technology as either a software engineer or data scientist.
                                I am also a member of The Cube, Duke's premier entpreneurship organization, along with the Huang Fellows, a fellowship designed to integrate societal issues with scientific research.
                                <br/>
                                <br/>
                                Outside the classroom, I am passionate about design, photography, medicine, and venture capitalism. 
                                I am also a badminton player with over a decade of international competitive experience. 
                                <br/>
                                <br/>
                                Feel free to contact me with any comments or questions!
                            </Text>
                        </Col2>
                    </Body1>
                    
                    <Body2>
                        <Group>
                            <TitleContainer>
                                <Title>Education</Title>
                            </TitleContainer>
                            <Subgroup>
                                <Reveal effect="fadeInUp">
                                    <Row>
                                        <Card 
                                            minWidth="60%"
                                            height= "35vh"
                                            margin="0 auto 0 0"
                                            radius="2.5px"
                                            color="#163C9C" 
                                            title="Duke University" 
                                            description="B.S. Computer Science, Statistics" 
                                            year="2022" 
                                            file={Duke} 
                                            link="https://duke.edu/"
                                        />
                                        <Description style={{marginLeft: "5vw"}}>
                                            <Desc1>Duke University</Desc1>
                                            <Desc2>B.S. Computer Science, Statistics</Desc2>
                                            <Desc3>2022</Desc3>
                                        </Description>
                                    </Row>
                                    <Row>
                                        <Description style={{marginLeft: "7.5vw"}}>
                                            <Desc1>Pingry School</Desc1>
                                            <Desc2>High School Diploma</Desc2>
                                            <Desc3>2018</Desc3>
                                        </Description>
                                        <Card 
                                            minWidth="60%"
                                            height="35vh"
                                            margin="0 0 0 auto"
                                            radius="2.5px"
                                            color="#074FB0" 
                                            title="Pingry School" 
                                            description="High School Diploma" 
                                            year="2018" 
                                            file={Pingry} 
                                            link="https://www.pingry.org/"
                                        />
                                    </Row>
                                </Reveal>
                            </Subgroup>
                        </Group>

                        <Group>
                            <TitleContainer>
                                <Title>Experience</Title>
                            </TitleContainer>
                            <Subgroup>
                            <Reveal>
                                <Row>
                                    <Card 
                                        minWidth="60%"
                                        height= "35vh"
                                        margin="0 auto 0 0"
                                        radius="2.5px"
                                        color="#FF4677" 
                                        title="Pendo" 
                                        description="Software Engineering Intern" 
                                        year="2020" 
                                        file={Pendo} 
                                        link="https://www.pendo.io/"
                                    />
                                    <Description style={{marginLeft: "5vw"}}>
                                        <Desc1>Pendo</Desc1>
                                        <Desc2>Software Engineering Intern</Desc2>
                                        <Desc3>2020</Desc3>
                                    </Description>
                                </Row>
                                <Row>
                                    <Description style={{marginLeft: "7.5vw"}}>
                                        <Desc1>UL</Desc1>
                                        <Desc2>Data Science Intern</Desc2>
                                        <Desc3>2020</Desc3>
                                    </Description>
                                    <Card 
                                        minWidth="60%"
                                        height= "35vh"
                                        margin="0 0 0 auto"
                                        radius="2.5px"
                                        color="#BE0F34" 
                                        title="UL" 
                                        description="Data Science Intern" 
                                        year="2020" 
                                        file={Ul} 
                                        link="https://www.ul.com/"
                                    />
                                </Row>
                                <Row>
                                    <Card 
                                        minWidth="60%"
                                        height= "35vh"
                                        margin="0 auto 0 0"
                                        radius="2.5px"
                                        color="#315B9C" 
                                        title="Pearson Lab" 
                                        description="Research Intern" 
                                        year="2019" 
                                        file={Pearson} 
                                        link="https://pearsonlab.github.io/"
                                    />
                                    <Description style={{marginLeft: "5vw"}}>
                                        <Desc1>Pearson Lab</Desc1>
                                        <Desc2>Research Intern</Desc2>
                                        <Desc3>2019</Desc3>
                                    </Description>
                                </Row>
                            </Reveal>
                        </Subgroup>
                    </Group>
                    </Body2>
                </BodyContainer>
            </div>
        )
    }
}

export default About;