import React from 'react';
import styled from 'styled-components';
import './app.css';

import LinkedinIcon from './icons/linkedin.svg';
import GithubIcon from './icons/github.svg';
import InstagramIcon from './icons/instagram.svg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 5vw;
    height: 90vh;
    max-width: 1100px;
    animation: fadeIn 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    @media (max-width: 768px) {
        margin: 0;
    }
`;

const Row = styled.div`
    display: flex;
    color: #333333;
    @media (max-width: 768px) {
        padding: 0 7.5vw;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: #333;
`;

const Icon = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
    opacity: 0.95;
    cursor: pointer;
    transition: all 0.2s ease;
    user-select: none;
    :hover {
        transform: scale(0.975);
    }
    :active {
        transform: scale(0.95);
    }
    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
        margin: 0 3px;
    }
`;

const T1 = styled.div`
    font-weight: 700;
    font-size: 45px;
    @media (max-width: 768px) {
        font-size: 37.5px;
    }
`;

const T2 = styled.div`
    font-weight: 500;
    font-size: 30px;
    line-height: 37.5px;
    @media (max-width: 768px) {
        font-size: 25px;
    }
`;

const T3 = styled.div`
    font-weight: 400;
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 25px;
    }
`;

function App() {
    return (
        <Container>
            <Row>
                <T1>
                    Hey! <span role="img" aria-label="wave">👋</span>
                    <br /> I'm Raymond!
                </T1>
            </Row>
            <Row style={{ margin: '20px 0 0 0' }}>
                <T2>
                    I’m a senior @{' '}
                    <Link href='https://duke.edu/' target='_blank'>
                        <span style={{ color: '#012169' }}>Duke</span>
                    </Link>{' '}
                    studying computer science and statistics. I was previously @{' '}
                    <Link href='https://www.anduril.com/' target='_blank'>
                        <span style={{ color: '#a3a3a3' }}>Anduril</span>
                    </Link>{' '} supporting data infra and perception, @{' '}
                    <Link href='https://www.facebook.com/' target='_blank'>
                        <span style={{ color: '#1778F2' }}>Facebook</span>
                    </Link>{' '} improving ad controls,
                    and @{' '}
                    <Link href='https://www.pendo.io/' target='_blank'>
                        <span style={{ color: '#EC2059' }}>Pendo</span>
                    </Link>{' '}
                    working on digital adoption.
                    I'm also a fellow @{' '}
                    <Link href='https://pear.vc/' target='_blank'>
                        <span style={{ color: '#bada55' }}>Pear</span>
                    </Link>,{' '}
                    <Link href='https://contrarycap.com/' target='_blank'>
                        <span style={{ color: '#4d53fe' }}>Contrary</span>
                    </Link>, and {' '}
                    <Link href='https://beondeck.com/' target='_blank'>
                        <span style={{ color: '#202c46' }}>OnDeck</span>
                    </Link>.
                    I'm building{' '}
                    <Link href='https://scope.so/' target='_blank'>
                        <span style={{ color: '#f76c6c' }}>Scope</span>
                    </Link>{' '}
                    in my free time.
                </T2>
            </Row>
            <Row style={{ margin: '20px 0 0 0' }}>
                <T3>
                    <Link
                        href='https://twitter.com/raymondhechen'
                        target='_blank'>
                        @raymondhechen
                    </Link>
                </T3>
            </Row>
            <Row style={{ margin: '20px 0 0 0' }}>
                <Link
                    href='https://www.linkedin.com/in/raymondhechen/'
                    target='_blank'>
                    <Icon src={LinkedinIcon} />
                </Link>
                <Link href='https://github.com/raymondhechen' target='_blank'>
                    <Icon src={GithubIcon} />
                </Link>
                <Link
                    href='https://www.instagram.com/raymondhechen/'
                    target='_blank'>
                    <Icon src={InstagramIcon} />
                </Link>
            </Row>
        </Container>
    );
}

export default App;
