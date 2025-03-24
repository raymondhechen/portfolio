import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Carousel from '@/components/Carousel'
import { PLATES_ALBUMS } from '../data'

const PlatesPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params
  const foundAlbumIndex = PLATES_ALBUMS.findIndex((a) => a.slug === slug)
  const foundAlbum = PLATES_ALBUMS[foundAlbumIndex]
  if (!foundAlbum) {
    return notFound()
  }

  const previousAlbum =
    foundAlbumIndex > 0 ? PLATES_ALBUMS[foundAlbumIndex - 1] : null
  const nextAlbum =
    foundAlbumIndex < PLATES_ALBUMS.length - 1
      ? PLATES_ALBUMS[foundAlbumIndex + 1]
      : null

  return (
    <div className="flex flex-col gap-2">
      <div>
        <Link
          href="/plates"
          className="flex items-center gap-1 text-sm text-gray-500 hover:underline"
        >
          <ArrowLeft className="size-4" />
          back to all
        </Link>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-between">
          <div>
            <div className="text-2xl font-medium">{foundAlbum.title}</div>
            <div className="text-sm">{foundAlbum.location}</div>
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
            href={`/plates/${previousAlbum.slug}`}
            className="flex items-center gap-1 hover:underline"
          >
            <ArrowLeft className="size-4" />
            previous
          </Link>
        ) : (
          <div />
        )}
        {nextAlbum ? (
          <Link
            href={`/plates/${nextAlbum.slug}`}
            className="flex items-center gap-1 hover:underline"
          >
            next
            <ArrowRight className="size-4" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}

export default PlatesPage
