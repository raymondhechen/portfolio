'use client'

import React from 'react'
import styled from 'styled-components'
import Link from '../components/Link'
import Text from '../components/Text'
import Page from '../modules/Page'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 60px;
  height: 100%;
  width: 80%;
  // brute force margin so that Page component can be reused for writing posts too
  margin-left: 10px;
  color: ${(props) => props.theme.colors.gray12};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-left: 0;
    width: 100%;
  }
`

const Title = styled.div`
  margin-bottom: 20px;
`

const Section = styled.div`
  margin: 8px 0;
`

const HomePage = () => {
  return (
    <Page>
      <Content>
        <Title>
          <Text type="h1">Hey, I&apos;m Raymond!</Text>
        </Title>
        <Section>
          <Text type="h2">
            I&apos;m an engineer at{' '}
            <Link external url="https://retool.com/">
              <span style={{ color: '#6875d9' }}>Retool</span>
            </Link>{' '}
            from{' '}
            <Link external url="https://duke.edu/">
              <span style={{ color: '#005587' }}>Duke</span>
            </Link>
            . I&apos;m building{' '}
            <Link external url="https://futureconnoisseurs.com/">
              <span style={{ color: '#edac07' }}>Future Connoisseurs</span>
            </Link>{' '}
            in my free time.
          </Text>
        </Section>
        <Section>
          <Text type="h2">
            I was previously investing at{' '}
            <Link external url="https://www.dormroomfund.com/">
              <span style={{ color: '#6f2fb8' }}>Dorm Room Fund</span>
            </Link>
            , sustaining growth at{' '}
            <Link external url="https://www.charliehealth.com/">
              <span style={{ color: '#23a67f' }}>Charlie Health</span>
            </Link>
            , supporting data infra and perception at{' '}
            <Link external url="https://www.anduril.com/">
              <span style={{ color: '#7D7876' }}>Anduril</span>
            </Link>
            , improving ad controls at{' '}
            <Link external url="https://www.meta.com/">
              <span style={{ color: '#1778F2' }}>Meta</span>
            </Link>
            , and driving digital adoption at{' '}
            <Link external url="https://www.pendo.io/">
              <span style={{ color: '#EC2059' }}>Pendo</span>
            </Link>
            .
          </Text>
        </Section>
      </Content>
    </Page>
  )
}

export default HomePage
