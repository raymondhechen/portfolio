import styled from 'styled-components'
import Link from '../components/Link'
import Text from '../components/Text'
import { Post } from '../pages/writing'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 30px 40px;
  box-sizing: border-box;
`

const Block = styled.div`
  padding: 8px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

const WritingPost = ({ post }: { post: Post }) => {
  const authors = post.coAuthors.map((author) => {
    const handleIndex = author.indexOf('@')
    const handle = author.substring(handleIndex + 1)

    return (
      <Link key={handle} external url={`https://twitter.com/${handle}`}>
        {author.substring(0, handleIndex - 1)}
      </Link>
    )
  })

  return (
    <Container>
      <Text type="h2" weight={500}>
        {post.title}
      </Text>
      <Block>
        <Text type="h6" weight={500}>
          Co-authored by&nbsp;{authors}
        </Text>
      </Block>
      <Block>
        {post.paragraphs.map((paragraph, index) => (
          <Block key={index}>
            <Text type="b1">{paragraph.content}</Text>
          </Block>
        ))}
      </Block>
    </Container>
  )
}

export default WritingPost
