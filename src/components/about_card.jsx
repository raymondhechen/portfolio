import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import { device } from '../sizes';

const fadeInUp = keyframes`
    from {
        // transform: translate3d(0,30px,0);
        opacity: 0;
    }

    to {
        // transform: translate3d(0,0,0);
        opacity: 0.9;
    }
`

const Container = styled.div` 
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50vh;
    opacity: 0.9;
    cursor: pointer;
    color: #E2E2E2;
    animation: ${fadeInUp} 0.5s cubic-bezier(0.2, 0, 0, 1);
    transition: opacity 0.3s ease-in-out;

    :hover {
        opacity: 1;
    }

    @media ${device.mobileL} { 
        height: 25vh;
    }
`;

const Image = styled.img`
    position: absolute;
    z-index: 98;
    width: 25vw;
    height: auto;
    opacity: 0.8;
    display: block;
    margin-left: auto;
    margin-right: auto;

    @media ${device.laptop} { 
        width: 30vw;
    }

    @media ${device.mobileL} { 
        width: 32.5vw;
    }
`;

const Text = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;

    :hover {
        opacity: 1;
    }
`;

const Title = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 0 7.5vh 2.5vw;
    font-family: HKGrotesk;
    font-size: 30px;
    font-weight: 700;

    @media ${device.laptop} {
        font-size: 25px;
        padding: 0 0 6vh 2.5vw;
    }
`;

const Year = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 2.5vw 2.5vh 0;
    font-family: HKGrotesk;
    font-weight: 600;
    font-size: 25px;

    @media ${device.laptop} {
        font-size: 20px;
        padding: 0 2.5vw 6vh 0;
    }
`;

const Description = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 0 2.5vh 2.5vw;
    font-family: HKGrotesk;
    font-weight: 500;
    font-size: 25px;

    @media ${device.laptop} {
        font-size: 15px;
    }
`;

class AboutCard extends Component {
    openLink() {
        window.open(this.props.link, '_blank');
    }

    render() {
        return (
            <Container style={{width: this.props.size, backgroundColor: this.props.color}} onClick={e => this.openLink(e)}>
                <Image src={this.props.file}/>
                <Text>
                    <Title>{this.props.title}</Title>
                    <Year>{this.props.year}</Year>
                    <Description>{this.props.description}</Description>
                </Text>
            </Container>
        )
    }
}

export default AboutCard;