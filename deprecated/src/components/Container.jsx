import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #222;
`;

const TemplateContainer = (props) => {
    return <Container style={props.style}>{props.children}</Container>
}

export default TemplateContainer