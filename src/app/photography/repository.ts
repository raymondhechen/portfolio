type Photo = {
  src: string
  alt: string
  colStart: number
  colEnd: number
  rowStart: number
  rowEnd: number
}

export const santaMonica: Photo[] = [
  {
    src: '/santamonica-1.jpg',
    alt: 'Santa Monica Pier',
    colStart: 1,
    colEnd: 3,
    rowStart: 1,
    rowEnd: 30,
  },
  {
    src: '/santamonica-2.jpg',
    alt: 'Santa Monica Pier',
    colStart: 3,
    colEnd: 5,
    rowStart: 19,
    rowEnd: 30,
  },
  {
    src: '/santamonica-3.jpg',
    alt: 'Santa Monica Pier',
    colStart: 3,
    colEnd: 5,
    rowStart: 1,
    rowEnd: 19,
  },
  {
    src: '/santamonica-4.jpg',
    alt: 'Santa Monica Pier',
    colStart: 1,
    colEnd: 5,
    rowStart: 30,
    rowEnd: 50,
  },
]

export const sequoia: Photo[] = [
  {
    src: '/sequoia-1.jpg',
    alt: 'Sequoia National Park',
    colStart: 1,
    colEnd: 3,
    rowStart: 1,
    rowEnd: 30,
  },
  {
    src: '/sequoia-2.jpg',
    alt: 'Sequoia National Park',
    colStart: 3,
    colEnd: 5,
    rowStart: 1,
    rowEnd: 15,
  },
  {
    src: '/sequoia-3.jpg',
    alt: 'Sequoia National Park',
    colStart: 3,
    colEnd: 5,
    rowStart: 15,
    rowEnd: 30,
  },
]
