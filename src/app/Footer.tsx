import Link from 'next/link'

const Footer = () => {
  return (
    <div className="mt-auto flex w-full justify-between px-6 py-4 text-xs text-gray-500 sm:px-12">
      <div>
        © {new Date().getFullYear()} Raymond Chen. All rights reserved.
      </div>
      <Link href="mailto:hello@ray.day" className="hover:underline">
        hello@ray.day
      </Link>
    </div>
  )
}

export default Footer
