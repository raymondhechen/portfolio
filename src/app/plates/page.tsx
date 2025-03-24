import Carousel from '@/components/Carousel'
import { PLATES_ALBUMS } from './data'

export default function PlatesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="text-2xl font-medium">plates</div>
        <div>a collection of meals.</div>
      </div>
      <Carousel
        verticalOnly
        items={PLATES_ALBUMS.map((album) => ({
          href: `/plates/${album.slug}`,
          imgSrc: album.thumbnail,
          imgAlt: album.title,
          title: album.title,
          description: album.location,
        }))}
      />
    </div>
  )
}
