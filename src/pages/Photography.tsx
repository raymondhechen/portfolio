import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text';
import Row from '../components/Row'
import Link from '../components/Link';
import Container from '../components/Container'

import WarriorsAlbum from './Albums/warriors.json'

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
        <div style={{ marginBottom: "25px" }}>
            <Row style={{ marginBottom: "20px", justifyContent: "space-between" }}>
                <Text type="h2">{album.title}</Text>
                <Text type="h2">{album.year} 🗓️</Text>
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
    console.log(WarriorsAlbum)

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
            <Row style={{ margin: '50px 0' }}>
                <Text type="h1">
                    📷 Photography
                </Text>
            </Row>
            <Row>
                {RenderAlbum(WarriorsAlbum)}
            </Row>
        </Container>
    )
}

export default PhotographyPage