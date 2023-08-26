'use client'

import Page from '@/modules/Page'
import { DarkModeContext } from '@/styles/DarkModeProvider'
import { tweetComponents } from '@/tweets/TweetComponents'
import { useContext } from 'react'
import { Tweet } from 'react-tweet'
import { styled } from 'styled-components'
import '@/tweets/Tweet.css'

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  width: 100%;
  height: 50%;
`

const TweetContainer = styled.div`
  width: 100%;
  height: 50%;
`

const ThreadsPage = () => {
  const isDarkTheme = useContext(DarkModeContext)
  console.log({ isDarkTheme })

  return (
    <Page>
      <Content>
        <TweetContainer className={isDarkTheme ? 'dark' : 'light'}>
          <Tweet id="1694424219902443583" components={tweetComponents} />
        </TweetContainer>
      </Content>
    </Page>
  )
}

export default ThreadsPage
