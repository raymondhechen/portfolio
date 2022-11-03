import Link from '../components/Link'
import { Post } from '../pages/writing'
import { Menu, MenuItem } from './Menu'
import { createSlug } from '../utilities/slugs'
import { parseDate } from '../utilities/dates'

type Props = {
  posts: Post[]
  activeId?: string
}

const WritingMenu = ({ posts, activeId }: Props) => {
  return (
    <Menu title="Writing">
      {posts.map(({ date, title, id }) => {
        const dateString = parseDate(date)
        const slug = createSlug(title)
        return (
          <Link key={id} url={`/photography/${slug}`}>
            <MenuItem title={title} subtitle={dateString} active={id === activeId} />
          </Link>
        )
      })}
    </Menu>
  )
}

export default WritingMenu
