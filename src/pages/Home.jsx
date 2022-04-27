import React, { Component } from 'react';
import styled from 'styled-components';

import Text from '../components/Text';
import '../components/FadeIn.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 5vw;
    height: 90vh;
    max-width: 1100px;
    color: #222;
    animation: fadeIn 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    @media (max-width: 768px) {
        margin: 0 3vw;
    }
`;

const Row = styled.div`
    display: flex;
    @media (max-width: 768px) {
        padding: 0 7.5vw;
    }
`;

const ExternalLink = styled.a`
    text-decoration: none;
    color: #222;
`;

export default class HomePage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Text type="h1">
                        Hey! <span role="img" aria-label="wave">👋</span>
                        <br /> I'm Raymond!
                    </Text>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                    <Text type="h2">
                        I'm an engineer at{' '}
                        <ExternalLink href='https://retool.com/' target='_blank'>
                            <span style={{ color: '#6875d9' }}>Retool</span>
                        </ExternalLink>{' '}
                        from{' '}
                        <ExternalLink href='https://duke.edu/' target='_blank'>
                            <span style={{ color: '#012169' }}>Duke</span>
                        </ExternalLink>.
                        I was previously at{' '}
                        <ExternalLink href='https://www.charliehealth.com/' target='_blank'>
                            <span style={{ color: '#23a67f' }}>Charlie Health</span>
                        </ExternalLink> supporting growth,
                        {' '}
                        <ExternalLink href='https://www.anduril.com/' target='_blank'>
                            <span style={{ color: '#a3a3a3' }}>Anduril</span>
                        </ExternalLink>{' '} supporting data infra and perception, {' '}
                        <ExternalLink href='https://www.meta.com/' target='_blank'>
                            <span style={{ color: '#1778F2' }}>Meta</span>
                        </ExternalLink>{' '} improving ad controls,
                        and {' '}
                        <ExternalLink href='https://www.pendo.io/' target='_blank'>
                            <span style={{ color: '#EC2059' }}>Pendo</span>
                        </ExternalLink>{' '}
                        working on digital adoption.
                        I was previously a partner at{' '}
                        <ExternalLink href='https://www.dormroomfund.com/' target='_blank'>
                            <span style={{ color: '#391463' }}>Dorm Room Fund</span>
                        </ExternalLink>, and I'm a fellow at{' '}
                        <ExternalLink href='https://contrarycap.com/' target='_blank'>
                            <span style={{ color: '#4d53fe' }}>Contrary</span>
                        </ExternalLink>,{' '}
                        <ExternalLink href='https://pear.vc/' target='_blank'>
                            <span style={{ color: '#bada55' }}>Pear</span>
                        </ExternalLink>, and {' '}
                        <ExternalLink href='https://beondeck.com/' target='_blank'>
                            <span style={{ color: '#121a34' }}>OnDeck</span>
                        </ExternalLink>.
                        I'm building{' '}
                        <ExternalLink href='https://scope.so/' target='_blank'>
                            <span style={{ color: '#f76c6c' }}>Scope</span>
                        </ExternalLink>{' '}
                        and {' '}
                        <ExternalLink href='https://instagram.com/emp_connoisseurs' target='_blank'>
                            <span style={{ color: '#edac07' }}>Future Connoisseurs</span>
                        </ExternalLink>{' '}
                        in my free time.
                    </Text>
                </Row>
                <Row style={{ marginTop: '25px', flexDirection: "column" }}>
                    <Text type="b1">
                        <ExternalLink
                            style={{ textDecoration: "underline" }}
                            href='https://raymondchen.notion.site/Raymond-Chen-s-Writing-3ac1cca001f84cf79b3cc4aeca5e32fb'
                            target='_blank'>
                            Writing
                        </ExternalLink>
                    </Text>
                    <Text type="b1">
                        <ExternalLink
                            style={{ textDecoration: "underline" }}
                            href='https://www.linkedin.com/in/raymondhechen/'
                            target='_blank'>
                            LinkedIn
                        </ExternalLink>
                    </Text>
                    <Text type="b1">
                        <ExternalLink
                            style={{ textDecoration: "underline" }}
                            href='https://twitter.com/raymondhechen'
                            target='_blank'>
                            Twitter
                        </ExternalLink>
                    </Text>
                </Row>
            </Container>
        )
    }
}