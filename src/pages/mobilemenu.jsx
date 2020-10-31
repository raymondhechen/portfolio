import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

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
    width: 100vw;
    height: 100vh;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Path = styled(NavLink)` 
    text-decoration: none;
    color: #111111;
    font-weight: 700;
    font-size: 30px;
    opacity: 0.85;
    margin-bottom: 5vh;
`;

class Menu extends Component {

    goBack() {
        this.props.history.goBack();
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
                <Container>
                    <Path exact to="/">HOME</Path>
                    <Path exact to="/about">ABOUT</Path>
                    <Path exact to="/projects">PROJECTS</Path>
                    <Path exact to="/misc">PHOTOS</Path>
                </Container>
            </Page>
        )
    }
}

export default withRouter(Menu);