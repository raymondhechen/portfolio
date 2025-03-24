import Image from 'next/image'
import Link from 'next/link'
import { WORLDS_ALBUMS } from './data'

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="text-2xl font-medium">worlds</div>
        <div>a journey through landscapes and places.</div>
      </div>
      <div className="flex w-full snap-x snap-mandatory items-center gap-4 overflow-x-auto overscroll-x-none">
        {WORLDS_ALBUMS.map((album) => (
          <Link
            href={`/worlds/${album.slug}`}
            key={album.title}
            className="flex shrink-0 flex-col gap-2 transition-all hover:opacity-80"
          >
            <div className="relative aspect-[2/3] h-[65vh] snap-center">
              <Image
                src={album.thumbnail}
                alt={album.title}
                fill
                sizes="(max-width: 768px) 80vh, 50vw"
                priority
                className="rounded-sm object-cover"
              />
            </div>
            <div>
              <h2 className="font-medium">{album.title}</h2>
              <p className="text-sm">{album.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
