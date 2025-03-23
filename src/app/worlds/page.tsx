import Image from 'next/image'
import Link from 'next/link'

const ALBUMS = [
  {
    title: 'fjords',
    cover: '/fjords.jpg',
    year: 2025,
  },
  {
    title: 'ocean beach',
    cover: '/oceanbeach.jpg',
    year: 2024,
  },
  {
    title: 'mendocino',
    cover: '/mendocino.jpg',
    year: 2024,
  },
  {
    title: 'sequoia',
    cover: '/sequoia.jpg',
    year: 2023,
  },
  {
    title: "o'ahu",
    cover: '/oahu.jpg',
    year: 2023,
  },
  {
    title: 'santorini',
    cover: '/santorini.jpg',
    year: 2022,
  },
]

export default function Home() {
  return (
    <main className="flex h-screen flex-1 items-center overflow-hidden">
      <div className="flex w-full items-center gap-4 overflow-x-auto overscroll-x-none px-12 py-8">
        {ALBUMS.map((album) => (
          <Link
            href={`/worlds/${album.title}`}
            key={album.title}
            className="flex shrink-0 flex-col gap-2 transition-all hover:opacity-80"
          >
            <div className="relative aspect-[2/3] h-[80vh]">
              <Image
                src={album.cover}
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
    </main>
  )
}
