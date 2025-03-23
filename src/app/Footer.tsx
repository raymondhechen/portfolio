import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex w-full justify-between px-12 py-4 text-xs text-gray-500">
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
