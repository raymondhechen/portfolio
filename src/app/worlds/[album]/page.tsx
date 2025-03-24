import { WORLDS_ALBUMS } from '../data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const AlbumPage = async ({
  params,
}: {
  params: Promise<{ album: string }>
}) => {
  const { album } = await params
  const foundAlbumIndex = WORLDS_ALBUMS.findIndex((a) => a.slug === album)
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
        <Link href="/worlds" className="text-sm text-gray-500 hover:underline">
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
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-none pb-6">
          {foundAlbum.images?.map((image, index) => (
            <div key={index} className="flex-none snap-center">
              <div className="relative h-[65vh]">
                <Image
                  src={image.src}
                  alt={image.alt || foundAlbum.title}
                  width={1600}
                  height={1200}
                  className="h-full w-auto rounded-sm object-contain"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={index < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-between text-sm text-gray-500">
        {previousAlbum ? (
          <Link
            href={`/worlds/${previousAlbum.slug}`}
            className="hover:underline"
          >
            previous world
          </Link>
        ) : (
          <div />
        )}
        {nextAlbum ? (
          <Link href={`/worlds/${nextAlbum.slug}`} className="hover:underline">
            next world
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}

export default AlbumPage
