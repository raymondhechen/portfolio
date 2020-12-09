import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Emoji from 'a11y-react-emoji'

import Navbar from '../components/Navbar';
import ScopeIcon from '../icons/scope.png';
import ColdcallIcon from '../icons/coldcall.png';
import PendoIcon from '../icons/pendo.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 5vw;
    max-width: 1100px;
    @media (max-width: 768px) {
        margin: 0;
    }
`;

const Content = styled.div`
    animation: fadeIn 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Row = styled.div`
    display: flex;
    color: #333333;
    @media (max-width: 768px) {
        padding: 0 7.5vw;
    }
`;

const T1 = styled.div`
    font-weight: 700;
    font-size: 50px;

    @media (max-width: 768px) {
        font-size: 37.5px;
    }
`;

const T2 = styled.div`
    font-weight: 500;
    font-size: 30px;
    color: #333;
    line-height: 40px;
    @media (max-width: 768px) {
        font-size: 25px;
        line-height: 30px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    width: 100%;
    max-width: 100%;
    font-weight: 500;
    font-size: 25px;
    color: #555555;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.2s ease;
    @media (max-width: 768px) {
        font-size: 20px;
    }
    &:hover {
        opacity: 0.8;
    }
`;

const Align = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 25px;
    height: 25px;
`;

class BlogPage extends Component {
    render() {
        return (
            <Container>
            <Navbar/>
            <Content>
            <Row style={{ marginTop: '50px' }}>
                <T1>
                    Blog
                </T1>
            </Row>
            <Row style={{ marginTop: '20px' }}>
                <T2>
                    My writing is medicore, and I want to get better. 
                    I also have a ton of questions I want answers to. 
                    Here are my inquisitions into the world.
                </T2>
            </Row>
            <Row style={{ marginTop: '50px', flexDirection: 'column' }}>
                <StyledLink><Align><Emoji symbol='🎲' label='dice'/> <div style={{ width: '15px'}} /> Explaining Bayesian vs. Frequentist statistics</Align><Align>Nov 20</Align></StyledLink>
                <StyledLink><Align><Icon src={ScopeIcon} /> <div style={{ width: '15px'}} /> Making of Scope</Align><Align>Nov 20</Align></StyledLink>
                <StyledLink><Align><Icon src={ColdcallIcon} /> <div style={{ width: '15px'}} /> Making of Coldcall</Align><Align>Nov 20</Align></StyledLink>
                <StyledLink><Align><Icon src={PendoIcon} /> <div style={{ width: '15px'}} /> My remote internship experience @ Pendo</Align><Align>Nov 20</Align></StyledLink>
                <StyledLink><Align><Emoji symbol='💸' label='coin'/><div style={{ width: '15px'}} /> Blockchain and cryptocurrencies</Align><Align>Nov 20</Align></StyledLink>
                <StyledLink><Align><Emoji symbol='⚛️' label='react'/><div style={{ width: '15px'}} /> Single page applications (SPAs): an intro</Align><Align>Nov 20</Align></StyledLink>
                <StyledLink><Align><Emoji symbol='💹' label='stock'/><div style={{ width: '15px'}} /> What are Wall Street Bets's beloved options?</Align><Align>Nov 20</Align></StyledLink>
                <StyledLink><Align><Emoji symbol='💉' label='syringe'/><div style={{ width: '15px'}} /> How and why do mRNA vaccines work?</Align><Align>Nov 20</Align></StyledLink>
                <StyledLink><Align><Emoji symbol='⏬' label='compress'/><div style={{ width: '15px'}} /> Methods of digital compression</Align><Align>Nov 20</Align></StyledLink>
                <StyledLink><Align><Emoji symbol='🌀' label='cyclone'/><div style={{ width: '15px'}} /> The beauty of support vector machines (SVMs)</Align><Align>Nov 20</Align></StyledLink>
                <StyledLink><Align><Emoji symbol='🦄' label='unicorn'/><div style={{ width: '15px'}} /> My startup wishlist</Align><Align>Nov 20</Align></StyledLink>
                <StyledLink><Align><Emoji symbol='🥺' label='eyes'/><div style={{ width: '15px'}} /> The anime industry's production pipeline</Align><Align>Nov 20</Align></StyledLink>
            </Row>
            <div style={{height: '50px' }} />
            </Content>
        </Container>
        )
    }
}

export default BlogPage;