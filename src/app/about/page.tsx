import Image from 'next/image'

const About = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex w-full justify-center md:w-1/2">
          <div className="relative h-[40vh] w-96 overflow-hidden rounded-sm">
            <Image
              src="/profile.jpg"
              alt="profile"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 py-4 text-center md:w-1/2 md:text-left">
          <p>
            Raymond Chen is an engineer and photographer based in San Francisco,
            California. He aims to capture the worlds of our planet, showcasing
            the life and beauty that exist in those microcosms.
          </p>
          <p>
            Raymond also specializes in food photography, capturing what is
            close to home for so many of us: the plates and dishes we eat.
          </p>
          <p>
            Available for hire. Reach out at{' '}
            <a href="mailto:hello@raymondchen.me" className="underline">
              hello@raymondchen.me
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
