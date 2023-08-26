'use client'

import Page from '@/modules/Page'
import { DarkModeContext } from '@/styles/DarkModeProvider'
import { tweetComponents } from '@/tweets/TweetComponents'
import { useContext } from 'react'
import { Tweet } from 'react-tweet'
import { styled } from 'styled-components'
import '@/tweets/Tweet.css'
import { threads } from './repository'

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding: 30px;
  width: 100%;
  height: 100%;
`

const TweetContainer = styled.div``

const ThreadsPage = () => {
  const isDarkTheme = useContext(DarkModeContext)

  return (
    <Page>
      <Content>
        {threads.map((thread) => (
          <TweetContainer className={isDarkTheme ? 'dark' : 'light'}>
            <Tweet id={thread.src} components={tweetComponents} />
          </TweetContainer>
        ))}
      </Content>
    </Page>
  )
}

export default ThreadsPage
