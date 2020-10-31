import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { device } from '../sizes';
import Header from './header';

import Design from '../components/Design2';

const Email = '/images/icons/emailWhite.svg';
const Github = '/images/icons/githubWhite.svg';
const Linkedin = '/images/icons/linkedinWhite.svg';
const Resume = '/images/icons/resumeWhite.svg';


const Body = styled.div` 
    margin: 15vh 0 0 0;
    height: 77.5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: HKGrotesk;
`;

const fadeIn = keyframes`
    from {opacity: 0;}
    to {opacity: 0.7;}
`

const fadeInUp = keyframes`
    from {
        transform: translate3d(0,40px,0);
        opacity: 0;
    }
    to {
        transform: translate3d(0,0,0);
        opacity: 1
    }
`

const Text = styled.div` 
    position: relative;
    z-index: 99;
    width: 60%;
    margin: 5vh 0 0 10vw;
    font-size: 80px;
    font-weight: 700;
    color: #c4c4c4;
    cursor: default;
    animation: ${fadeInUp} 1s cubic-bezier(0.5, 0, 0, 1);
    transition: transform 0.2s cubic-bezier(0.5, 0, 0, 1);

    :hover {
        transform: scale(1.025);
    }

    @media ${device.laptop} { 
       font-size: 50px;
    }
    @media ${device.mobileL} { 
        font-size: 32.5px;
    }
`;

const Icons = styled.div` 
    display: flex;
    margin-left: 10vw;
    position: relative;
    z-index: 99;
`;

const IconCont = styled.a`
    width: 5vh;
    height: 5vh;
    margin: 5vh 0.5vw 0 0.5vw;

    @media ${device.laptop} { 
        margin: 5vh 0.75vw 0 0.75vw;
    }
    @media ${device.mobileL} { 
        margin: 5vh 1.5vw 0 1.5vw;
    }
`;

const Icon = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0.7;
    animation: ${fadeIn} 1s cubic-bezier(0.5, 0, 0, 1);
    transition: opacity 0.15s ease-in-out, transform 0.2s cubic-bezier(0.5, 0, 0, 1);

    :hover {
        transform: scale(1.1);
        opacity: 0.8
    }
`;


class Home extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = "#074FB0";
        document.getElementById("nav1").style.color = "#FFFFFF";
        document.getElementById("nav2").style.color = "#FFFFFF";
        document.getElementById("nav2bar").style.borderBottom = "0";
        document.getElementById("nav3").style.color = "#FFFFFF";
        document.getElementById("nav3bar").style.borderBottom = "0";
        document.getElementById("nav4").style.color = "#FFFFFF";
        document.getElementById("nav4bar").style.borderBottom = "0";
    }

    render() {
        return (
            <div style={{width: "100vw", height: "100vh", overflow: "hidden"}}>
                <Header/>
                <Design/>
                <Body>
                    <Text>
                        <span style={{fontWeight: "900", color: "#FFFFFF"}}>Hey!</span> <br/> 
                        <span style={{fontSize: "0.8em", color: "#fafafa"}}>My name is <span style={{fontWeight: "800"}}>Raymond Chen</span>.</span>
                    </Text>
                    <Text style={{marginTop: "2.5vh", fontSize: "35px"}}>
                        I'm a <span id="1" style={{color: "#FFFFFF"}}>student</span> at <span id="2" style={{fontWeight: "800", color: "#FFFFFF"}}>Duke University</span>, 
                        learning to develop <span id="3'" style={{color: "#FFFFFF"}}>software</span> and <span id="4" style={{color: "#FFFFFF"}}>AI</span> algorithms. 
                        My passions focus on <span id="5" style={{color: "#FFFFFF"}}>medicine</span> and <span id="6" style={{color: "#FFFFFF"}}>entrepreneurship</span>.
                    </Text>
                    <Icons>
                        <IconCont href="mailto:rc284@duke.edu" target="_blank" rel="noopener noreferrer">
                            <Icon src={Email} />
                        </IconCont>
                        <IconCont href="mailto:rc284@duke.edu" target="_blank" rel="noopener noreferrer">
                            <Icon src={Resume} />
                        </IconCont>
                        <IconCont href="https://www.linkedin.com/in/raymondhechen/" target="_blank" rel="noopener noreferrer">
                            <Icon src={Linkedin} />
                        </IconCont>
                        <IconCont href="https://github.com/raymondhechen" target="_blank" rel="noopener noreferrer">
                            <Icon src={Github}/>
                        </IconCont>
                    </Icons>
                </Body>
            </div>
        )
    }
}

export default Home;