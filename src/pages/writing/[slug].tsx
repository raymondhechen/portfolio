import { createSlug, createSlugMap, IParams } from '../../utilities/slugs'
import styled from 'styled-components'
import Head from 'next/head'
import { fetchPost, fetchPosts } from '../../notion/writing.requests'
import { Post } from '../writing'
import WritingMenu from '../../modules/WritingMenu'
import WritingPost from '../../modules/WritingPost'
import Page from '../../modules/Page'

const FullContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

type Props = {
  postId: string
  posts: Post[]
}

const PhotographyAlbumPage = ({ postId, posts }: Props) => {
  const post = posts.find((post) => post.id === postId)
  if (!post) return <WritingMenu posts={posts} activeId={postId} />

  return (
    <FullContainer>
      <Head>
        <title>{post.title}</title>
      </Head>
      <WritingMenu posts={posts} activeId={postId} />
      <WritingPost post={post} />
    </FullContainer>
  )
}

export const getStaticProps = async ({ params }: { params: IParams }) => {
  const writingDatabase = await fetchPosts()
  const posts = await Promise.all(writingDatabase.map((page) => fetchPost(page.id)))
  const slugMap = createSlugMap(posts)

  const { slug } = params
  const postId = slugMap[slug]

  return {
    props: {
      postId,
      posts,
    },
  }
}

export const getStaticPaths = async () => {
  const writingDatabase = await fetchPosts()
  const posts = await Promise.all(writingDatabase.map((page) => fetchPost(page.id)))
  const paths = posts.map((post) => ({ params: { slug: createSlug(post.title) } }))
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export default PhotographyAlbumPage
