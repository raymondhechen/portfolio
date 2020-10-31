import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { withRouter } from 'react-router-dom';

import { device } from '../sizes';

const fadeInUp = keyframes`
    from {
        transform: translate3d(0,30px,0);
        opacity: 0;
    }

    to {
        transform: translate3d(0,0,0);
        opacity: 1;
    }
`

const Container = styled.div` 
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.33%;
    height: 50vh;
    opacity: 1;
    cursor: pointer;
    color: #E2E2E2;
    animation: opacity 1.25s cubic-bezier(0.4, 0, 0, 1) 0s, ${fadeInUp} 1s cubic-bezier(0.4, 0, 0, 1) 0s;
    transition: opacity 0.3s ease-in-out;

    :hover {
        opacity: 0.95;
    }

    @media ${device.mobileL} { 
        width: 50%;
        height: 40vh;
    }
`;

const Image = styled.img`
    position: absolute;
    z-index: 99;
    width: 15vh;
    height: 15vh;
    opacity: 0.8;
    display: block;
    margin-left: auto;
    margin-right: auto;
    transition: transform 0.2s cubic-bezier(0.5, 0, 0, 1);

    @media ${device.laptop} { 
        width: 12.5vh;
        height: 12.5vh;
    }

    @media ${device.mobileL} { 
        width: 10vh;
        height: 10vh;
    }
`;

const Title = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 0 6.5vh 1.5vw;
    font-family: RobotoMono;
    font-size: 35px;

    @media ${device.laptop} { 
        font-size: 27.5px;
        padding: 0 0 7.5vh 2.5vw;
    }

    @media ${device.mobileL} { 
        font-size: 22.5px;
        padding: 0 0 5.5vh 3.25vw;
    }
`;

const Year = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 1.5vw 2.5vh 0;
    font-family: RobotoMono;
    font-weight: 600;
    font-size: 25px;

    @media ${device.laptop} { 
        left: 0;
        fpnt-size: 20px;
        padding: 0 0 2.5vh 2.5vw;
    }

    @media ${device.mobileL} { 
        font-size: 17.5px;
        left: 0;
        padding: 0 0 2.5vh 3.25vw;
    }
`;

const Description = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 0 2.5vh 1.5vw;
    font-family: HKGrotesk;
    font-weight: 400;
    font-size: 20px;

    @media ${device.laptop} { 
        display: none;
    }

    @media ${device.mobileL} { 
        display: none;
    }
`;

class LongCard extends Component {

    click() {
        this.props.history.push({
            pathname: this.props.path
        })
    }

    scale(i) {
        if (i === 0) {
            document.getElementById(this.props.title).style = "transform: scale(1)"
        }
        else if (i === 1) {
            document.getElementById(this.props.title).style = "transform: scale(1.075)"
        }
    }

    render() {
        return (
            <Container style={{backgroundColor: this.props.color}} onClick={e => this.click(e)} onMouseEnter={() => this.scale(1)} onMouseLeave={() => this.scale(0)}>
                <Image id={this.props.title} src={this.props.file}/>
                <Title>{this.props.title}</Title>
                <Year>{this.props.year}</Year>
                <Description>{this.props.description}</Description>
            </Container>
        )
    }
}

export default withRouter(LongCard);