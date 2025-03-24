import { WORLDS_ALBUMS } from './data'
import Carousel from '@/components/Carousel'

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="text-2xl font-medium">worlds</div>
        <div>a journey through landscapes and places.</div>
      </div>
      <Carousel
        verticalOnly
        items={WORLDS_ALBUMS.map((album) => ({
          href: `/worlds/${album.slug}`,
          imgSrc: album.thumbnail,
          imgAlt: album.title,
          title: album.title,
          description: album.year.toString(),
        }))}
      />
    </div>
  )
}
