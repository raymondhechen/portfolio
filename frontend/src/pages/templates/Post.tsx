import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import Text from '../../components/Text';
import Row from '../../components/Row'
import Link from '../../components/Link';
import Container from '../../components/Container'

const ImageRenderer = (props) => {
    console.log(window.location.origin + "/" + props.src)
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <img alt="" src={window.location.origin + "/" + props.src} style={{ width: "75%" }} />
        </div>
    )
}


const PostPage = () => {
    const [markdownText, setMarkdownText] = useState(null);
    const { postname } = useParams()

    useEffect(() => {
        const loadData = async () => {
            fetch(`../blog/${postname}/${postname}.md`)
                .then((data) => data.text())
                .then((text) => {
                    setMarkdownText(text)
                })
        }

        loadData();
    }, [postname])

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
                    linkTarget="_blank"
                    components={{
                        h1: ({ node, ...props }) => <Text type="h1" {...props} style={{ marginBottom: "15px" }} />,
                        h2: ({ node, ...props }) => <Text type="h2" {...props} style={{ marginBottom: "15px" }} />,
                        h3: ({ node, ...props }) => <Text type="h3" {...props} style={{ marginBottom: "15px" }} />,
                        p: ({ node, ...props }) => <Text type="b1" {...props} />,
                        br: ({ node, ...props }) => <span {...props} style={{ height: "20px" }} />,
                        img: ({ node, ...props }) => ImageRenderer(props),
                        blockquote: ({ node, ...props }) => <Text type="b1" {...props} style={{ color: "#555", margin: "20px 0 20px 30px" }} />,
                    }}
                />
            </Row>
            <Row style={{ marginTop: '80px' }} />
        </Container>
    )
}

export default PostPage;