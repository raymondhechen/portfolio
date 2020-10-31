import React, { Component } from 'react';
import styled from 'styled-components';

import { device } from '../sizes';

import Header from './header';
import Card from '../components/card';

import '../components/animation.css';

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

const Body = styled.div`
    width: 87.5vw;
    max-width: 1450px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: HKGrotesk;
`;

const ProjectContainer = styled.div`
    width: 47.5%;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    animation: 1s fadeInUp cubic-bezier(0.3, 0, 0, 1);
    @media ${device.tablet} { 
        margin-bottom: 25px;
    }
`;

const ProjectInfo = styled.div`
    width: 100%;
    margin: 2.5vh 0 0 0;
    font-size: 35px;
    display: flex;
    flex-direction: row;
`;

const ProjectInfoLeft = styled.div`
    width: 80%;
`;

const Title = styled.div`
    font-family: RobotoMono;
    font-weight: 700;
    margin-bottom: 5px;
    @media ${device.laptop} { 
        font-size: 0.9em;
    }
    @media ${device.tablet} { 
        font-size: 0.7em;
    }
`;

const Tagline = styled.div`
    font-size: 0.8em;
    font-weight: 500; 
    opacity: 0.7;
    @media ${device.laptop} { 
        font-size: 0.7em;
    }
    @media ${device.tablet} { 
        font-size: 0.5em;
    }
`;

const ProjectInfoRight = styled.div`
    width: 20%;
    font-weight: 600;
    text-align: right;
    @media ${device.laptop} { 
        font-size: 0.8em;
    }
    @media ${device.tablet} { 
        display: none;
    }
`;

class Projects extends Component {
    
    componentDidMount() {
        document.body.style.backgroundColor = "#FFFFFF";
    }

    render() {
        return (
            <div>
                <Header/>
                <BodyContainer>
                    <PageInfo>
                        <div style={{fontSize: "35px", fontWeight: "800"}}>Projects</div>
                        <div style={{fontSize: "25px", fontWeight: "400", opacity: "0.7"}}>Software and Data Science</div>
                    </PageInfo>
                    <Body>
                        <ProjectContainer>
                                <Card 
                                    width="100%"
                                    height="20vw"
                                    color="#1DD3B0" 
                                    imgWidth="20%"
                                    radius="2.5px"
                                    title="Position" 
                                    file='/images/projects/position.svg' 
                                    path="/projects/position" 
                                />
                                <ProjectInfo>
                                    <ProjectInfoLeft>
                                        <Title>position</Title>
                                        <Tagline>Capitalizing the curve</Tagline>
                                    </ProjectInfoLeft>
                                    <ProjectInfoRight>
                                        2020
                                    </ProjectInfoRight>
                                </ProjectInfo>
                            </ProjectContainer>
                            <ProjectContainer>
                                <Card 
                                    width="100%"
                                    height="20vw"
                                    color="#ad424c" 
                                    imgWidth="20%"
                                    radius="2.5px"
                                    title="nomenclature" 
                                    file='/images/projects/nomenclature.svg' 
                                    path="/projects/nomenclature" 
                                />
                                <ProjectInfo>
                                    <ProjectInfoLeft>
                                        <Title>nomenclature</Title>
                                        <Tagline>Graphing regular expressions</Tagline>
                                    </ProjectInfoLeft>
                                    <ProjectInfoRight>
                                        2020
                                    </ProjectInfoRight>
                                </ProjectInfo>
                            </ProjectContainer>
                            <ProjectContainer>
                                <Card 
                                    width="100%"
                                    height="20vw"
                                    imgWidth="20%"
                                    radius="2.5px"
                                    color="#1E73E8" 
                                    title="coldcall" 
                                    file='/images/projects/coldcall.svg' 
                                    path="/projects/coldcall" 
                                />
                                <ProjectInfo>
                                    <ProjectInfoLeft>
                                        <Title>coldcall</Title>
                                        <Tagline>Empowering the students</Tagline>
                                    </ProjectInfoLeft>
                                    <ProjectInfoRight>
                                        2020
                                    </ProjectInfoRight>
                                </ProjectInfo>
                            </ProjectContainer>
                            <ProjectContainer>
                                <Card 
                                    width="100%"
                                    height="20vw"
                                    imgWidth="20%"
                                    radius="2.5px"
                                    color="#031A6D" 
                                    title="shuttlerank" 
                                    file='/images/projects/shuttlerank.png' 
                                    path="/projects/shuttlerank" 
                                />
                                <ProjectInfo>
                                    <ProjectInfoLeft>
                                        <Title>shuttlerank</Title>
                                        <Tagline>Badminton ELO system</Tagline>
                                    </ProjectInfoLeft>
                                    <ProjectInfoRight>
                                        2019
                                    </ProjectInfoRight>
                                </ProjectInfo>
                            </ProjectContainer>
                            <ProjectContainer>
                                <Card 
                                    width="100%"
                                    height="20vw"
                                    imgWidth="20%"
                                    radius="2.5px"
                                    color="#6400A1" 
                                    title="improv" 
                                    file='/images/projects/improv.svg' 
                                    path="/projects/improv" 
                                />
                                <ProjectInfo>
                                    <ProjectInfoLeft>
                                        <Title>improv</Title>
                                        <Tagline>Adaptive neuroscience experiments</Tagline>
                                    </ProjectInfoLeft>
                                    <ProjectInfoRight>
                                        2019
                                    </ProjectInfoRight>
                                </ProjectInfo>
                            </ProjectContainer>
                            <ProjectContainer>
                                <Card 
                                    width="100%"
                                    height="20vw"
                                    imgWidth="20%"
                                    radius="2.5px"
                                    color="#4a4a4a" 
                                    title="portfolio" 
                                    file='/images/projects/portfolio.svg' 
                                    path="/projects/portfolio" 
                                />
                                <ProjectInfo>
                                    <ProjectInfoLeft>
                                        <Title>portfolio</Title>
                                        <Tagline>Personal website</Tagline>
                                    </ProjectInfoLeft>
                                    <ProjectInfoRight>
                                        2018
                                    </ProjectInfoRight>
                                </ProjectInfo>
                            </ProjectContainer>
                    </Body>
                </BodyContainer>
            </div>
        )
    }
}

export default Projects;