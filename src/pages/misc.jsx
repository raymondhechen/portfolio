import React, { Component } from 'react';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';

import Loader from "../components/ImageLoader";
import { device } from '../sizes';
import Header from './header';

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
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Col = styled.div`
    flex: 33.33%;
    max-width: 32%;

    @media ${device.mobileL} { 
        flex: 50%;
        max-width: 42.5%;
    }
`;

const Footer = styled.div`
    height: 10vh;

    @media ${device.mobileL} { 
        height: 5vh;
    }
`;

const Photo = styled.img`
    margin: 8px 0;
    vertical-align: middle;
    width: 100%;
`;


class Misc extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = "#FFFFFF";
    }

    render() {
        var viewSize = window.matchMedia(device.mobileL)

        if (viewSize.matches) {
            return (
                <div>
                    <Header/>
                    <Body>
                        <Row>
                            <Col>
                                <Reveal effect="fadeInUp">
                                    <Photo src="/images/photos/DSC_0601.JPG"/>
                                    <Photo src="/images/photos/20191018_180008.jpg"/>
                                    <Photo src="/images/photos/IMG_1442.jpg"/>
                                    <Photo src="/images/photos/20190629_190428.jpg"/>
                                    <Photo src="/images/photos/DSC_0290.JPG"/>
                                    <Photo src="/images/photos/DSC_0255.JPG"/>
                                </Reveal>
                            </Col>
                            <Col>
                                <Reveal effect="fadeInUp">
                                    <Photo src="/images/photos/20190816_232708.jpg"/>
                                    <Photo src="/images/photos/DSC_0332.JPG"/>
                                    <Photo src="/images/photos/IMG_6599.jpg"/>
                                    <Photo src="/images/photos/IMG_7195.png"/>
                                    <Photo src="/images/photos/20190623_192407.png"/>
                                </Reveal>
                            </Col>
                        </Row>
                    </Body>
                    <Footer/>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Header/>
                    <BodyContainer>
                    <PageInfo>
                        <div style={{fontSize: "35px", fontWeight: "800"}}>Photos</div>
                        <div style={{fontSize: "25px", fontWeight: "400", opacity: "0.7"}}>Albums of my Life</div>
                    </PageInfo>
                    <Body>
                        <Row>
                            <Col>
                                <Reveal effect="fadeInUp">
                                <Loader src="/images/photos/DSC_0601.JPG"/>
                                <Loader src="/images/photos/20191018_180008.jpg"/>
                                <Loader src="/images/photos/20190623_192407.png"/>
                                <Loader src="/images/photos/DSC_0290.JPG"/>
                                </Reveal>
                            </Col>
                            <Col>
                                <Reveal effect="fadeInUp">
                                <Loader src="/images/photos/20190816_232708.jpg"/>
                                <Loader src="/images/photos/IMG_6599.jpg"/>
                                <Loader src="/images/photos/20190629_190428.jpg"/>
                                </Reveal>
                            </Col>
                            <Col>
                                <Reveal effect="fadeInUp">
                                <Loader src="/images/photos/DSC_0255.JPG"/>
                                <Loader src="/images/photos/DSC_0332.JPG"/>
                                <Loader src="/images/photos/IMG_7195.png"/>
                                <Loader src="/images/photos/IMG_1442.jpg"/>
                                </Reveal>
                            </Col>
                        </Row>
                    </Body>
                    </BodyContainer>
                    <Footer/>
                </div>    
            )
        }
    }
}

export default Misc;