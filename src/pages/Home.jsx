import React, { Component } from 'react';
import styled from 'styled-components';

import Text from '../components/Text';
import Row from '../components/Row'
import Link from '../components/Link'
import '../components/FadeIn.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    color: #222;
    animation: fadeIn 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export default class HomePage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Text type="h1">
                        <span role="img" aria-label="wave">👋</span>{' '}
                        Hey, I'm Raymond!
                    </Text>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                    <Text type="h2">
                        I'm an engineer at{' '}
                        <Link external to='https://retool.com/'>
                            <span style={{ color: '#6875d9' }}>Retool</span>
                        </Link>{' '}
                        from{' '}
                        <Link external to='https://duke.edu/' >
                            <span style={{ color: '#012169' }}>Duke</span>
                        </Link>.
                        I was previously at{' '}
                        <Link external to='https://www.charliehealth.com/' >
                            <span style={{ color: '#23a67f' }}>Charlie Health</span>
                        </Link> supporting growth,
                        {' '}
                        <Link external to='https://www.anduril.com/' >
                            <span style={{ color: '#a3a3a3' }}>Anduril</span>
                        </Link>{' '} supporting data infra and perception, {' '}
                        <Link external to='https://www.meta.com/' >
                            <span style={{ color: '#1778F2' }}>Meta</span>
                        </Link>{' '} improving ad controls,
                        and {' '}
                        <Link external to='https://www.pendo.io/' >
                            <span style={{ color: '#EC2059' }}>Pendo</span>
                        </Link>{' '}
                        working on digital adoption.
                        I was previously a partner at{' '}
                        <Link to='https://www.dormroomfund.com/' >
                            <span style={{ color: '#391463' }}>Dorm Room Fund</span>
                        </Link>, and I'm a fellow at{' '}
                        <Link external to='https://contrarycap.com/' >
                            <span style={{ color: '#4d53fe' }}>Contrary</span>
                        </Link>,{' '}
                        <Link external to='https://pear.vc/' >
                            <span style={{ color: '#bada55' }}>Pear</span>
                        </Link>, and {' '}
                        <Link external to='https://beondeck.com/' >
                            <span style={{ color: '#121a34' }}>OnDeck</span>
                        </Link>.
                        I'm building{' '}
                        <Link external to='https://scope.so/' >
                            <span style={{ color: '#f76c6c' }}>Scope</span>
                        </Link>{' '}
                        and {' '}
                        <Link external to='https://instagram.com/emp_connoisseurs' >
                            <span style={{ color: '#edac07' }}>Future Connoisseurs</span>
                        </Link>{' '}
                        in my free time.
                    </Text>
                </Row>
                <Row style={{ marginTop: '25px', flexDirection: "column" }}>
                    <Text type="b1">
                        <Link
                            style={{ textDecoration: "underline" }}
                            to='/writing'
                        >
                            Writing
                        </Link>
                    </Text>
                    <Text type="b1">
                        <Link
                            external
                            style={{ textDecoration: "underline" }}
                            to='https://www.linkedin.com/in/raymondhechen/'
                        >
                            LinkedIn
                        </Link>
                    </Text>
                    <Text type="b1">
                        <Link
                            external
                            style={{ textDecoration: "underline" }}
                            to='https://twitter.com/raymondhechen'
                        >
                            Twitter
                        </Link>
                    </Text>
                </Row>
            </Container>
        )
    }
}