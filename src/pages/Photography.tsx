import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Text from '../components/Text';
import Row from '../components/Row'
import Link from '../components/Link';
import Container from '../components/Container'
import { ALBUM_NAMES } from '../sources';

const AlbumGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 5vw);
    grid-gap: 15px;
    @media (max-width: 800px) {
        grid-gap: 10px;
    }
    @media (max-width: 400px) {
        grid-gap: 5px;
    }
`

const AlbumImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
`

const RenderAlbum = (album) => {
    return (
        <div style={{ marginBottom: "50px", width: "100%" }}>
            <Row style={{ marginBottom: "20px", justifyContent: "space-between" }}>
                <Text type="h2" monospace>{album.title}</Text>
                <Text type="h2" monospace>{album.year}</Text>
            </Row>
            <AlbumGrid>
                {album.images.map((image) =>
                    <AlbumImage
                        src={image.src}
                        alt={image.name}
                        style={{
                            gridColumnStart: image.colStart,
                            gridColumnEnd: image.colEnd,
                            gridRowStart: image.rowStart,
                            gridRowEnd: image.rowEnd,
                        }}
                    />
                )}
            </AlbumGrid>
        </div>
    )
}


const PhotographyPage = () => {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        const fetchAlbums = async () => {
            let fetchedAlbums = []
            for (const albumName of ALBUM_NAMES) {
                const res = await fetch(`albums/${albumName}.json`)
                const jsonData = await res.json()
                fetchedAlbums.push(jsonData)
            }
            setAlbums(fetchedAlbums)
        }
        fetchAlbums()
    }, [])


    return (
        <Container>
            <Row style={{ flexDirection: "column" }}>
                <Text type="b1">
                    <Link
                        style={{ textDecoration: "underline" }}
                        to="/">
                        Home
                    </Link>
                </Text>
            </Row>
            <Row style={{ margin: '15px 0 50px 0' }}>
                <Text type="h1">
                    📷 Photography
                </Text>
            </Row>
            {albums.map((album) =>
                <Row>
                    {RenderAlbum(album)}
                </Row>
            )}
        </Container>
    )
}

export default PhotographyPage