import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { withRouter } from 'react-router-dom';

const fadeIn = keyframes`
    from {
        opacity: 0.5;
    }
    to {
        opacity: 1
    }
`

const Page = styled.div`
    animation: ${fadeIn} 0.65s cubic-bezier(0.3,0.2,.5,1);
`;

const Header = styled.div`
    position: relative;
    display: flex;
    height: 32.5vh;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 15vh;
    height: 15vh;
    opacity: 0.8;
    transition: transform 0.2s cubic-bezier(0.5, 0, 0, 1);
`;

const X = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    padding: 5vh 5vw 0 0;
    height: 5vh;
    cursor: pointer;
    transition: opacity 0.2s linear;

    :hover {
        opacity: 0.8;
    }
`;

const Body = styled.div`
    padding: 7.5vh 10vw 0 10vw;
    display: flex;
    flex-direction: column;

    font-family: HKGrotesk;
`;

const Title = styled.div`
    width: 100%
    height: 30vh;
    font-size: 55px;

    font-family: RobotoMono;
`;

const Description = styled.div`
    width: 100%
    height: 30vh;
    font-size: 30px;
`;

const IconRow = styled.div`
    position: absolute;
    right: 12.5vw;
`;

const Icon = styled.img`
    width: 45px;
    height: 45px;
    padding: 0.5vh 0.75vw 0 0.75vw;
    transition: opacity 0.15s ease-in-out;

    :hover {
        cursor: pointer;
        opacity: 0.75;
    }
`;

class Writeup extends Component {

    goBack() {
        this.props.history.push("/projects");
    }

    scale(i) {
        if (i === 0) {
            document.getElementById("image").style = "transform: scale(1)"
        }
        else if (i === 1) {
            document.getElementById("image").style = "transform: scale(1.075)"
        }
    }

    render() {
        return (
            <Page>
                <Header style={{backgroundColor: this.props.color}} onMouseEnter={() => this.scale(1)} onMouseLeave={() => this.scale(0)}>
                    <Image id="image" src={this.props.file} />
                    <X src="/images/icons/x.svg" onClick={e => this.goBack(e)} />
                </Header>
                <Body>
                    <Title>{this.props.title}</Title>
                    <Description>{this.props.year}</Description>
                    <IconRow>
                        <a href={this.props.website} target="_blank" rel="noopener noreferrer">
                            <Icon src="/images/icons/website.svg"/>
                        </a>
                        <a href={this.props.github} target="_blank" rel="noopener noreferrer">
                            <Icon src="/images/icons/github.svg"/>
                        </a>
                    </IconRow>
                </Body>
            </Page>
        )
    }
}

export default withRouter(Writeup);