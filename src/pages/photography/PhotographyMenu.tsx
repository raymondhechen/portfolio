import Link from '../../components/Link'
import { Menu, MenuItem } from '../../modules/Menu'
import { createSlug } from '../../utilities/slugs'
import type { Album } from '../photography'

type Props = {
  albums: Album[]
  activeId?: string
}

const PhotographyMenu = ({ albums, activeId }: Props) => {
  return (
    <Menu>
      {albums.map((album) => {
        const dateString = new Date(album.date).toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
        const slug = createSlug(album.title)

        return (
          <Link key={album.id} url={`/photography/${slug}`}>
            <MenuItem title={album.title} subtitle={dateString} active={album.id === activeId} />
          </Link>
        )
      })}
    </Menu>
  )
}

export default PhotographyMenu
