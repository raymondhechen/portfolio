import { WORLDS_ALBUMS } from '../data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Carousel from '@/components/Carousel'

const AlbumPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const foundAlbumIndex = WORLDS_ALBUMS.findIndex((a) => a.slug === slug)
  const foundAlbum = WORLDS_ALBUMS[foundAlbumIndex]
  if (!foundAlbum) {
    return notFound()
  }

  const previousAlbum =
    foundAlbumIndex > 0 ? WORLDS_ALBUMS[foundAlbumIndex - 1] : null
  const nextAlbum =
    foundAlbumIndex < WORLDS_ALBUMS.length - 1
      ? WORLDS_ALBUMS[foundAlbumIndex + 1]
      : null

  return (
    <div className="flex flex-col gap-2">
      <div>
        <Link
          href="/worlds"
          className="flex items-center gap-1 text-sm text-gray-500 hover:underline"
        >
          <ArrowLeft className="size-4" />
          back to worlds
        </Link>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-between">
          <div>
            <div className="text-2xl font-medium">{foundAlbum.title}</div>
            <div className="text-sm">
              Shot in {foundAlbum.location}, {foundAlbum.year}
            </div>
          </div>
          <div className="w-full text-left text-sm leading-snug sm:w-2/5 sm:text-right">
            {foundAlbum.description}
          </div>
        </div>
        <Carousel
          items={foundAlbum.images?.map((image) => ({
            href: image.src,
            imgSrc: image.src,
            imgAlt: image.alt || foundAlbum.title,
          }))}
        />
      </div>
      <div className="flex w-full justify-between text-sm text-gray-500">
        {previousAlbum ? (
          <Link
            href={`/worlds/${previousAlbum.slug}`}
            className="flex items-center gap-1 hover:underline"
          >
            <ArrowLeft className="size-4" />
            previous world
          </Link>
        ) : (
          <div />
        )}
        {nextAlbum ? (
          <Link
            href={`/worlds/${nextAlbum.slug}`}
            className="flex items-center gap-1 hover:underline"
          >
            next world
            <ArrowRight className="size-4" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}

export default AlbumPage
