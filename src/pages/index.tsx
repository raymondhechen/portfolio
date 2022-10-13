import React from 'react'
import styled from 'styled-components'
import Link from '../components/Link'
import Text from '../components/Text'
import Page from '../modules/Page'

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 80%;
  align-items: center;
  color: ${(props) => props.theme.colors.gray12};
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
        <div>
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
                <span style={{ color: '#012169' }}>Duke</span>
              </Link>
              . I like taking photos, which I sell at{' '}
              <Link external url="https://paracosm.design/">
                <span style={{ color: '#7D7876' }}>Paracosm</span>
              </Link>
              .
            </Text>
          </Section>
          <Section>
            <Text type="h2">
              I was previously at{' '}
              <Link external url="https://www.charliehealth.com/">
                <span style={{ color: '#23a67f' }}>Charlie Health</span>
              </Link>{' '}
              sustaining growth,{' '}
              <Link external url="https://www.anduril.com/">
                <span style={{ color: '#7D7876' }}>Anduril</span>
              </Link>{' '}
              supporting data infra and perception,{' '}
              <Link external url="https://www.meta.com/">
                <span style={{ color: '#1778F2' }}>Meta</span>
              </Link>{' '}
              improving ad controls, and{' '}
              <Link external url="https://www.pendo.io/">
                <span style={{ color: '#EC2059' }}>Pendo</span>
              </Link>{' '}
              working on digital adoption. I was previously a partner at{' '}
              <Link external url="https://www.dormroomfund.com/">
                <span style={{ color: '#391463' }}>Dorm Room Fund</span>
              </Link>
              , and I&apos;m a fellow at{' '}
              <Link external url="https://contrarycap.com/">
                <span style={{ color: '#4d53fe' }}>Contrary</span>
              </Link>
              ,{' '}
              <Link external url="https://pear.vc/">
                <span style={{ color: '#bada55' }}>Pear</span>
              </Link>
              , and{' '}
              <Link external url="https://beondeck.com/">
                <span style={{ color: '#1b253d' }}>OnDeck</span>
              </Link>
              .
            </Text>
          </Section>
          <Section>
            <Text type="h2">
              I&apos;m building{' '}
              <Link external url="https://scope.so/">
                <span style={{ color: '#f76c6c' }}>Scope</span>
              </Link>{' '}
              and{' '}
              <Link external url="https://futureconnoisseurs.com/">
                <span style={{ color: '#edac07' }}>Future Connoisseurs</span>
              </Link>{' '}
              in my free time.
            </Text>
          </Section>
        </div>
      </Content>
    </Page>
  )
}

export default HomePage
