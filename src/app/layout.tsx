import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Header from './Header'
import Footer from './Footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Raymond Chen',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} flex min-h-screen flex-col gap-4 antialiased`}
      >
        <Header />
        <div className="w-full flex-1 px-6 py-2 sm:px-12 sm:py-4">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
