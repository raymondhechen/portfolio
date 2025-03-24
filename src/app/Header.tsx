'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex w-full items-center justify-between px-6 pt-6 sm:px-12">
      <Link href="/" className="flex items-center gap-2">
        {/* <Image src="/logo.png" alt="logo" width={20} height={20} /> */}
        <h1 className="text-xl">raymond chen</h1>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden gap-8 text-lg sm:flex">
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
        <Link
          href="https://instagram.com/ray.a.day"
          className="text-lg hover:underline"
          target="_blank"
        >
          instagram
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="sm:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 z-50 h-screen w-full bg-white p-6">
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image src="/logo.png" alt="logo" width={20} height={20} />
              <h1 className="text-2xl">raymond</h1>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-6 text-xl">
            {LINKS.map((link) => (
              <Link
                key={link.title}
                href={`/${link.title}`}
                className={clsx('hover:underline', {
                  underline: pathname.startsWith(`/${link.title}`),
                })}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href="https://instagram.com/ray.a.day"
              className="text-lg hover:underline"
              target="_blank"
              onClick={() => setIsMenuOpen(false)}
            >
              instagram
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
