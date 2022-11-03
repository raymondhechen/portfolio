import Link from '../components/Link'
import { Menu, MenuItem } from './Menu'
import { createSlug } from '../utilities/slugs'
import { parseDate } from '../utilities/dates'
import type { Album } from '../pages/photography'

type Props = {
  albums: Album[]
  activeId?: string
}

const PhotographyMenu = ({ albums, activeId }: Props) => {
  return (
    <Menu title="Albums">
      {albums.map(({ date, title, id }) => {
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

export default PhotographyMenu
