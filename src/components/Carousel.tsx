import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type CarouselItemType = {
  href?: string
  imgSrc: string
  imgAlt: string
  title?: string
  description?: string
}

const CarouselItem: FC<
  CarouselItemType & { index: number; verticalOnly?: boolean }
> = ({ index, href, imgSrc, imgAlt, title, description, verticalOnly }) => {
  const content = (
    <>
      <div
        className={clsx('relative h-[65vh] snap-center', {
          'aspect-[2/3]': verticalOnly,
        })}
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={1600}
          height={1200}
          className={clsx('h-full w-auto rounded-sm object-contain', {
            'object-cover': verticalOnly,
          })}
          sizes="(max-width: 768px) 100vw, 800px"
          priority={index < 2}
        />
      </div>
      <div>
        {title && <h2 className="font-medium">{title}</h2>}
        {description && <p className="text-sm">{description}</p>}
      </div>
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className="flex shrink-0 flex-col gap-2 transition-all hover:opacity-80"
      >
        {content}
      </Link>
    )
  }

  return (
    <div className="flex shrink-0 flex-col gap-2 transition-all hover:opacity-80">
      {content}
    </div>
  )
}
const Carousel: FC<{
  items: CarouselItemType[]
  verticalOnly?: boolean
}> = ({ items, verticalOnly = false }) => {
  return (
    <div className="flex w-full snap-x snap-mandatory items-center gap-4 overflow-x-auto overscroll-x-none">
      {items.map((item, index) => (
        <CarouselItem
          key={item.imgSrc}
          index={index}
          verticalOnly={verticalOnly}
          {...item}
        />
      ))}
    </div>
  )
}

export default Carousel
