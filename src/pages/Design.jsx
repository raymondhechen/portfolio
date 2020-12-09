import React, { Component } from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';

import ColdcallDesign from '../images/coldcall-design.png';
import NatalDesign from '../images/natal-design.png';

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
    max-width: 100%;
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

const Image = styled.img`
    object-fit: cover;
`;

class DesignPage extends Component {
    render() {
        return (
            <Container>
            <Navbar/>
            <Content>
            <Row style={{ marginTop: '50px' }}>
                <T1>
                    Design
                </T1>
            </Row>
            <Row style={{ marginTop: '20px' }}>
                <T2>
                    Although I have a technical focus, I love design and great UI/UX.
                    Here are my own attempts at branding, prototypes, and photography.
                </T2>
            </Row>
            <Row style={{ marginTop: '50px', flexDirection: 'column' }}>
                <Image style={{width: '100%'}} src={ColdcallDesign} />
                <div style={{height: '50px' }} />
                <Image style={{width: '100%'}} src={NatalDesign} />
                <div style={{height: '50px' }} />
            </Row>
            </Content>
        </Container>
        )
    }
}

export default DesignPage;