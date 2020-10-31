import React, { Component } from 'react';
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components';

import { device } from '../sizes';
import Des1 from './Designs/1.svg';
import Des2 from './Designs/2.svg';
import Des3 from './Designs/3.svg';
import Des4 from './Designs/4.svg';
import Des5 from './Designs/5.svg';

const Container = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;

const ImageContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
`;

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 20 + 75}px,${y / 20 + 100}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 50}px,${y / 8 - 400}px,0)`
const trans3 = (x, y) => `translate3d(${x / 15 + 50}px,${y / 15}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`


export default function Design() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
        <Container onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <ImageContainer>
                <animated.img src={Des1} style={{ transform: props.xy.interpolate(trans1) }} />
                <animated.img src={Des4} style={{ transform: props.xy.interpolate(trans2) }} />
                <animated.img src={Des5} style={{ transform: props.xy.interpolate(trans3) }} />
            </ImageContainer>
        </Container>
    )
}