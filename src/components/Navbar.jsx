import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import LinkedinIcon from '../icons/linkedin.svg';
import GithubIcon from '../icons/github.svg';
import TwitterIcon from '../icons/twitter.svg';
import InstagramIcon from '../icons/instagram.svg';

const Container = styled.div`
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
    @media (max-width: 768px) {
        padding: 0 7.5vw;
    }
`;

const StyledLink = styled(NavLink)`
    font-size: 25px;
    font-weight: 500;
    margin-right: 25px;
    text-decoration: none;
    color: #333;
    transition: all 0.2s ease;
    &:hover {
        color: #555;
    }
    @media (max-width: 768px) {
        margin-right: 15px;
        font-size: 20px;
    }
`;

const Link = styled.a`
    text-decoration: none;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 30px;
    height: 30px;
    margin: 0 4px;
    cursor: pointer;
    transition: all 0.2s ease;
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

class Navbar extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <StyledLink exact to='/' activeStyle={{ color: 'rgb(30, 115, 232)' }}>Home</StyledLink>
                    <StyledLink exact to='/blog' activeStyle={{ color: 'rgb(30, 115, 232)' }}>Blog</StyledLink>
                </Row>
                <Row>
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
            </Container>
        )
    }
}

export default Navbar;