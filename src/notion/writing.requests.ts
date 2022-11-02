import { Paragraph, Post } from '../pages/writing'
import { getBlocks, getDatabase, getPage } from './client'
import { WRITING_DATABASE_ID } from './constants'

export const fetchPosts = async () => {
  return getDatabase(WRITING_DATABASE_ID)
}

export const fetchPost = async (postId: string): Promise<Post> => {
  const page: any = await getPage(postId)

  const { id, properties } = page
  const { Name, Date, Coauthors } = properties

  const blocks = await getBlocks(page.id)
  const paragraphs = await Promise.all(
    blocks.map<Paragraph>((block: any) => {
      return {
        type: 'text',
        content: block.paragraph.rich_text[0].plain_text,
      }
    }),
  )

  return {
    id,
    title: Name.title[0]?.plain_text ?? '',
    coAuthors: [Coauthors.multi_select.map(({ name }: { name: string }) => name)] ?? [],
    date: Date.date?.start ?? '',
    paragraphs,
  } as Post
}
