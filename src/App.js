import React from 'react';
import styled from 'styled-components';
import './app.css';

import ResumeIcon from './icons/resume.svg';
import LinkedinIcon from './icons/linkedin.svg';
import GithubIcon from './icons/github.svg';
import TwitterIcon from './icons/twitter.svg';
import InstagramIcon from './icons/instagram.svg';

import FacebookLogo from './logos/facebook.svg';
import AndurilLogo from './logos/anduril.svg';
import PearLogo from './logos/pear.svg';
import ColdcallLogo from './logos/coldcall.svg';
import CapletLogo from './logos/caplet.svg';
import CubeLogo from './logos/cube.svg';
import DiigLogo from './logos/diig.svg';
import HackdukeLogo from './logos/hackduke.svg';
import PendoLogo from './logos/pendo.svg';
import UlLogo from './logos/ul.svg';
import HuangLogo from './logos/huang.svg';
import PearsonLogo from './logos/pearson.svg';
import ShuttlerankLogo from './logos/shuttlerank.svg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 5vw;
    max-width: 1100px;
    animation: fadeIn 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Row = styled.div`
    display: flex;
    color: #333333;
`;

const Link = styled.a`
    text-decoration: none;
`;

const Icon = styled.img`
    width: 35px;
    height: 35px;
    margin: 0 5px;
    cursor: pointer;
    transition: all 0.2s ease;
    :hover {
        transform: scale(0.975);
    }
    :active {
        transform: scale(0.95);
    }
`;

const T1 = styled.div`
    font-weight: 700;
    font-size: 55px;
`;

const T2 = styled.div`
    font-weight: 500;
    font-size: 35px;
`;

const T3 = styled.div`
    font-weight: 500;
    font-size: 30px;
    color: #555555;
`;

const T4 = styled.div`
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 25px;
`;

const Table = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

const Card = styled.div`
    min-height: 200px;
    min-width: 450px;
    flex-grow: 1;
    border-radius: 6px;
    margin: 0 25px 25px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    :hover {
        transform: scale(0.99);
    }
`;

const Image = styled.img`
    width: 60%;
    max-width: 500px;
    object-fit: cover;
`;

function App() {
    return (
        <Container>
            <Row style={{ margin: '20px 0 0 auto' }}>
                <Link>
                    <Icon src={ResumeIcon} />
                </Link>
                <Link
                    href='https://www.linkedin.com/in/raymondhechen/'
                    target='_blank'>
                    <Icon src={LinkedinIcon} />
                </Link>
                <Link href='https://github.com/raymondhechen' target='_blank'>
                    <Icon src={GithubIcon} />
                </Link>
                <Link href='https://twitter.com/raymondhechen' target='_blank'>
                    <Icon src={TwitterIcon} />
                </Link>
                <Link
                    href='https://www.instagram.com/raymondhechen/'
                    target='_blank'>
                    <Icon src={InstagramIcon} />
                </Link>
            </Row>
            <Row style={{ margin: '15px 0 0 0' }}>
                <T1>
                    Hey! <br /> I'm Raymond!
                </T1>
            </Row>
            <Row style={{ margin: '20px 0 0 0' }}>
                <T2>
                    I’m a junior @{' '}
                    <Link href='https://duke.edu/' target='_blank'>
                        <span style={{ color: '#012169' }}>Duke</span>
                    </Link>{' '}
                    studying computer science and statistics. I co-founded{' '}
                    <Link href='https://www.coldcall.co/' target='_blank'>
                        <span style={{ color: '#1E73E8' }}>Coldcall</span>
                    </Link>
                    . Try this out:{' '}
                    <Link href='https://mural.so/' target='_blank'>
                        <span
                            style={{
                                color: '#25BF75',
                                textDecoration: 'underline',
                            }}>
                            mural.so
                        </span>
                    </Link>
                </T2>
            </Row>
            <Row style={{ margin: '20px 0 0 0' }}>
                <T3>
                    Check out what I'm working on and some of the people I’ve
                    worked with below:
                </T3>
            </Row>
            <Row style={{ margin: '50px 0 0 0' }}>
                <T4>Incoming</T4>
            </Row>
            <Row>
                <Table>
                    <Card
                        style={{ backgroundColor: '#4267B2' }}
                        onClick={() => {
                            window.open('https://www.facebook.com/');
                        }}>
                        <Image style={{ width: '50%' }} src={FacebookLogo} />
                    </Card>
                    <Card
                        style={{ backgroundColor: '#111111' }}
                        onClick={() => {
                            window.open('https://www.anduril.com/');
                        }}>
                        <Image style={{ width: '50%' }} src={AndurilLogo} />
                    </Card>
                </Table>
            </Row>
            <Row style={{ margin: '50px 0 0 0' }}>
                <T4>Current</T4>
            </Row>
            <Row>
                <Table>
                    <Card
                        style={{ backgroundColor: '#1E73E8' }}
                        onClick={() => {
                            window.open('http://coldcall.co/');
                        }}>
                        <Image style={{ width: '60%' }} src={ColdcallLogo} />
                    </Card>
                    <Card
                        style={{ backgroundColor: '#b6e305' }}
                        onClick={() => {
                            window.open('https://www.pear.vc/');
                        }}>
                        <Image style={{ width: '40%' }} src={PearLogo} />
                    </Card>
                    <Card
                        style={{ backgroundColor: '#E4564D' }}
                        onClick={() => {
                            window.open('https://caplet.io/');
                        }}>
                        <Image style={{ width: '50%' }} src={CapletLogo} />
                    </Card>
                    <Card
                        style={{ backgroundColor: '#54ADFF' }}
                        onClick={() => {
                            window.open('https://dukethecube.com/');
                        }}>
                        <Image style={{ width: '20%' }} src={CubeLogo} />
                    </Card>
                    <Card
                        style={{ backgroundColor: '#ECECEC' }}
                        onClick={() => {
                            window.open('https://www.dukeimpact.org/');
                        }}>
                        <Image style={{ width: '32.5%' }} src={DiigLogo} />
                    </Card>
                    <Card
                        style={{ backgroundColor: '#3c257d' }}
                        onClick={() => {
                            window.open('https://hackduke.org/');
                        }}>
                        <Image style={{ width: '50%' }} src={HackdukeLogo} />
                    </Card>
                </Table>
            </Row>
            <Row style={{ margin: '50px 0 0 0' }}>
                <T4>2020</T4>
            </Row>
            <Row>
                <Table>
                    <Card
                        style={{ backgroundColor: '#FF4677' }}
                        onClick={() => {
                            window.open('https://www.pendo.io/');
                        }}>
                        <Image style={{ width: '50%' }} src={PendoLogo} />
                    </Card>
                    <Card
                        style={{ backgroundColor: '#BE0F34' }}
                        onClick={() => {
                            window.open('https://www.ul.com/');
                        }}>
                        <Image style={{ width: '20%' }} src={UlLogo} />
                    </Card>
                </Table>
            </Row>
            <Row style={{ margin: '50px 0 0 0' }}>
                <T4>2019</T4>
            </Row>
            <Row style={{ marginBottom: '50px' }}>
                <Table>
                    <Card
                        style={{ backgroundColor: '#E15709' }}
                        onClick={() => {
                            window.open(
                                'https://scienceandsociety.duke.edu/learn/undergraduate-programs/huang-fellows-program/'
                            );
                        }}>
                        <Image style={{ width: '17.5%' }} src={HuangLogo} />
                    </Card>
                    <Card
                        style={{ backgroundColor: '#315B9C' }}
                        onClick={() => {
                            window.open('https://pearsonlab.github.io/');
                        }}>
                        <Image style={{ width: '50%' }} src={PearsonLogo} />
                    </Card>
                    <Card
                        style={{ backgroundColor: '#031A6D' }}
                        onClick={() => {
                            window.open('http://shuttlerank.com/');
                        }}>
                        <Image
                            style={{ width: '37.5%' }}
                            src={ShuttlerankLogo}
                        />
                    </Card>
                </Table>
            </Row>
        </Container>
    );
}

export default App;
