import React, { Component } from 'react';
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components';

import { device } from '../sizes';

const Container = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;

const Letters = styled(animated.div)`
    font-size: 35em;
    font-weight: 900;
    line-height: 415px;
    color: rgba(0,0,0,0.3);
    position: absolute;
    right: 0;
    top: 0;
    height: 90vh;
    user-select: none;
    margin-top: 10vh;
    font-family: HKGrotesk;
    z-index: 50;
    will-change: transform;
    @media ${device.laptopL} { 
        font-size: 30em;
        line-height: 350px;
    }
    @media ${device.tablet} { 
        font-size: 25em;
        line-height: 325px;
    }
`;

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;


export default function Design() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
        <Container onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <Letters style={{ transform: props.xy.interpolate(trans1) }} >
                <span style={{marginLeft: "0"}}>R</span>
                <br/>
                <span style={{paddingLeft: "10vw"}}>C</span>
            </Letters>
        </Container>
    )
}