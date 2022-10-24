import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { fetchAlbum, fetchAlbums } from '../notion/photography.requests'
import { createSlug } from '../utilities/slugs'

export type Album = {
  id: string
  title: string
  date: string
  location: string
  photos: string[]
}

const PhotographyPage = ({ destination }: { destination: string }) => {
  const router = useRouter()

  useEffect(() => {
    router.replace(destination)
  }, [router, destination])

  return null
}

export const getServerSideProps = async () => {
  const albumDatabase = await fetchAlbums()
  const albums = await Promise.all(albumDatabase.map((page) => fetchAlbum(page.id)))

  const slug = createSlug(albums[0].title)

  return {
    props: {
      destination: `/photography/${slug}`,
    },
  }
}

export default PhotographyPage
