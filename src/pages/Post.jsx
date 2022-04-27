import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

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

const PostPage = () => {
    const [markdownText, setMarkdownText] = useState(null);
    const { postname } = useParams()

    useEffect(() => {
        const loadData = async () => {
            fetch(`../blog/${postname}.md`)
                .then((data) => data.text())
                .then((text) => {
                    console.log(text)
                    setMarkdownText(text)
                })
        }

        loadData();
    }, [])

    return (
        <Container>
            <Row>
                <Text type="b1">
                    <Link
                        style={{ textDecoration: "underline" }}
                        to="/writing">
                        Back
                    </Link>
                </Text>
            </Row>
            <Row style={{ marginTop: '75px', flexDirection: "column" }}>
                <ReactMarkdown
                    children={markdownText}
                    components={{
                        h1: ({ node, ...props }) => <Text type="h1" {...props} style={{ marginBottom: "15px" }} />,
                        h2: ({ node, ...props }) => <Text type="h2" {...props} style={{ marginBottom: "15px" }} />,
                        h3: ({ node, ...props }) => <Text type="h3" {...props} style={{ marginBottom: "15px" }} />,
                        p: ({ node, ...props }) => <Text type="b1" {...props} />,
                        br: ({ node, ...props }) => <div {...props} style={{ height: "20px" }} />
                    }}
                />
            </Row>
            <Row style={{ marginTop: '80px' }} />
        </Container>
    )
}

export default PostPage;