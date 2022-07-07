import React, { Component } from 'react';

import Text from '../components/Text';
import Row from '../components/Row'
import Link from '../components/Link';
import Container from '../components/Container'

const PostList = [
    // "Duke: The Last Dance",
    // "Hedging Your Life",
    // "How to Build Community",
    // "Your Expected Value",
    // "Pervasivness of Restaurant Group",
    // "test"
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
                        🖊️ Writing
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