import Image from 'next/image'

const About = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <div className="flex w-full justify-center md:w-1/2">
          <div className="relative h-64 w-64 overflow-hidden rounded-full">
            <Image
              src="/profile-photo.jpg"
              alt="Profile Photo"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 text-center md:w-1/2 md:text-left">
          <p>
            Raymond Chen is an engineer and photographer based in San Francisco,
            California. He aims to capture the worlds of our planet, showcasing
            the life and beauty that exist in those microcosms.
          </p>
          <p>
            Raymond also specializes in food photography, aiming to capture what
            is close to home and so many of us: the plates and dishes we eat.
          </p>
          <p>
            Available for hire. Reach out at{' '}
            <a href="mailto:hello@ray.day" className="underline">
              hello@ray.day
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
