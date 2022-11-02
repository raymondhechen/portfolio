import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { fetchPost, fetchPosts } from '../notion/writing.requests'
import { createSlug } from '../utilities/slugs'

export type Post = {
  id: string
  title: string
  date: string
  coAuthors: string[]
  paragraphs: Paragraph[]
}

export type Paragraph = {
  type: 'text' | 'image'
  content: string
}

const WritingPage = ({ destination }: { destination: string }) => {
  const router = useRouter()

  useEffect(() => {
    router.replace(destination)
  }, [router, destination])

  return null
}

export const getStaticProps = async () => {
  const albumDatabase = await fetchPosts()
  const albums = await Promise.all(albumDatabase.map((page) => fetchPost(page.id)))

  const slug = createSlug(albums[0].title)

  return {
    props: {
      destination: `/writing/${slug}`,
    },
  }
}

export default WritingPage
