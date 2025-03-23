'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
  {
    title: 'worlds',
  },
  {
    title: 'plates',
  },
  {
    title: 'about',
  },
]

const Header = () => {
  const pathname = usePathname()

  return (
    <div className="flex w-full items-center justify-between px-12 pt-6">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={20} height={20} />
        <h1 className="text-2xl">raymond</h1>
      </Link>
      <div className="flex gap-8 text-lg">
        {LINKS.map((link) => (
          <Link
            key={link.title}
            href={`/${link.title}`}
            className={clsx('hover:underline', {
              underline: pathname.startsWith(`/${link.title}`),
            })}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <Link
        href="https://instagram.com/ray.a.day"
        className="text-lg hover:underline"
        target="_blank"
      >
        instagram
      </Link>
    </div>
  )
}

export default Header
