import Link from '../components/Link'
import { Menu, MenuItem } from './Menu'
import { createSlug } from '../utilities/slugs'
import { Post } from '../pages/writing'

type Props = {
  posts: Post[]
  activeId?: string
}

const WritingMenu = ({ posts, activeId }: Props) => {
  return (
    <Menu title="Albums">
      {posts.map((post) => {
        const dateString = new Date(post.date).toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
        const slug = createSlug(post.title)

        return (
          <Link key={post.id} url={`/photography/${slug}`}>
            <MenuItem title={post.title} subtitle={dateString} active={post.id === activeId} />
          </Link>
        )
      })}
    </Menu>
  )
}

export default WritingMenu
