import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { device } from '../sizes';

const Container = styled.div` 
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50vh;
    opacity: 1;
    cursor: pointer;
    color: #E2E2E2;

    @media ${device.mobileL} { 
        height: 25vh;
    }
`;

const Image = styled.img`
    position: absolute;
    width: 25vw;
    height: auto;
    opacity: 0.9;
    margin-left: auto;
    margin-right: auto;
    transition: transform 0.3s cubic-bezier(0.5, 0, 0, 1);

    @media ${device.laptop} { 
        width: 30vw;
    }

    @media ${device.mobileL} { 
        width: 32.5vw;
    }
`;

class Card extends Component {
    // handle click 
    handleClick() {
        // if path prop present
        if (this.props.path !== undefined) {
            this.props.history.push({
                pathname: this.props.path
            })
        }
        // if link prop used instead
        else {
            window.open(this.props.link, '_blank');
        }
    }

    // scale on hover
    scale(i) {
        if (i === 0) {
            document.getElementById(this.props.title).style.transform = "scale(1)";
            document.getElementById(this.props.title).style.width = this.props.imgWidth;
        }
        else if (i === 1) {
            document.getElementById(this.props.title).style.transform = "scale(1.075)";
            document.getElementById(this.props.title).style.width = this.props.imgWidth;
        }
    }

    render() {
        return (
            <Container 
                style={{minWidth: this.props.minWidth, width: this.props.width, height: this.props.height, backgroundColor: this.props.color, margin: this.props.margin, borderRadius: this.props.radius}} 
                onClick={e => this.handleClick(e)}
                onMouseEnter={() => this.scale(1)} onMouseLeave={() => this.scale(0)}
            >
                <Image 
                    id={this.props.title} 
                    style={{width: this.props.imgWidth}} 
                    src={this.props.file}
                />
            </Container>
        )
    }
}

export default withRouter(Card);