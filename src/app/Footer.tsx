import Link from 'next/link'

const Footer = () => {
  return (
    <div className="mt-auto flex w-full justify-between px-6 py-4 text-xs text-gray-500 sm:px-12">
      <div>
        © {new Date().getFullYear()} Raymond Chen. All rights reserved.
      </div>
      <Link href="mailto:hello@raymondchen.me" className="hover:underline">
        hello@raymondchen.me
      </Link>
    </div>
  )
}

export default Footer
