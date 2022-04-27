import React, { Component } from 'react';
import styled from 'styled-components';

import Text from '../components/Text';
import Row from '../components/Row'
import Link from '../components/Link';
import '../components/FadeIn.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #222;
    animation: fadeIn 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const PostList = [
    "Duke: The Last Dance",
    "How to Build Community",
    "Expected Value of Lifelines",
    "Pervasivness of Restaurant Group",
    "test"
]

function transformSlug(str) {
    return str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

export default class WritingPage extends Component {
    render() {
        return (
            <Container>
                <Row style={{ flexDirection: "column" }}>
                    <Text type="b1">
                        <Link
                            style={{ textDecoration: "underline" }}
                            to="/">
                            Home
                        </Link>
                    </Text>
                </Row>
                <Row style={{ marginTop: '50px' }}>
                    <Text type="h1">
                        🖊️ Raymond's Writing
                    </Text>
                </Row>
                <Row style={{ marginTop: '40px', flexDirection: "column" }}>
                    {PostList.map((postName) =>
                        <Text monospace type="h3" style={{ marginBottom: "10px" }}>
                            <Link to={"/writing/" + transformSlug(postName)}>
                                {postName}
                            </Link>
                        </Text>
                    )}
                </Row>
            </Container>
        )
    }
}