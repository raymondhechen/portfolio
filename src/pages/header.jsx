import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

import { device } from '../sizes';

const Menu = "/images/icons/menu.svg";

const Nav = styled.div`
    position: absolute;
    top: 0;
    height: 100px;
    width: 100%;
    z-index: 98;
    display: flex;
    font-family: HKGrotesk;

    @media ${device.mobileL} { 
        height: 10vh;
    }
`;

const Name = styled.div` 
    position: absolute;
    left: 2.5vw;
    top: 20px;
    z-index: 99;
    font-weight: 800;
    font-size: 30px;

    @media ${device.laptop} { 
        font-size: 25px;
    }

    @media ${device.mobileL} { 
        top: 30%;
        left: 7.5%;
    }
`;

const HomeLink = styled(NavLink)`
    text-decoration: none;
    color: black;
`;

const List = styled.ul` 
    position: absolute;
    right: 1vw;
    top: 25px;
    list-style-type: none;
    margin: 0;
    overflow: hidden;
`;

const Path = styled(NavLink)` 
    text-decoration: none;
    color: #111111;
    float: right;
    margin: 0 20px;
    font-weight: 500;
    font-size: 20px;
    opacity: 0.85;
    transition: border-bottom 0.25s cubic-bezier(0.5, 0, 0, 1);

    :hover {
        border-bottom: 3px solid rgb(7, 79, 176);
    }
`;

const MenuIcon = styled.img`
    position: absolute;
    width: 25px;
    height: 25px;
    right: 0;
    padding: 3vh 0 0 0;
`;

class Header extends Component {

    openMenu() {
        this.props.history.push("/menu");
    }

    render() {
        var viewSize = window.matchMedia(device.mobileL);
        
        if (viewSize.matches) {
            return (
                <Nav>
                    <Name>
                        <HomeLink exact to="/" activeStyle={{cursor: 'default', pointerEvents: 'none'}}>RC</HomeLink>
                    </Name>
                    <MenuIcon src={Menu} onClick={() => this.openMenu()}/>
                </Nav>
            )
        }
        else {
            return (
                <Nav>
                    <Name>
                        <HomeLink exact to="/"><span id="nav1">RC</span></HomeLink>
                    </Name>
                    <List>
                        <Path id="nav2bar" to="/misc" activeStyle={{borderBottom: '3px solid rgb(7, 79, 176)', cursor: 'default', pointerEvents: 'none'}}><span id="nav2">Photos</span></Path>
                        <Path id="nav3bar" to="/projects" activeStyle={{borderBottom: '3px solid rgb(7, 79, 176)', cursor: 'default', pointerEvents: 'none'}}><span id="nav3">Projects</span></Path>
                        <Path id="nav4bar" to="/about" activeStyle={{borderBottom: '3px solid rgb(7, 79, 176)', cursor: 'default', pointerEvents: 'none'}}><span id="nav4">About</span></Path>
                    </List>
                </Nav>
            )
        }
    }
}

export default withRouter(Header);