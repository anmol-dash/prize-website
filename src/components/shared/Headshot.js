import React from "react"
import s from "styled-components"
import { Text } from "./Typography"

const ImageSize = `13vw`;

const Image = s.img`
    width: ${ImageSize};
    height: ${ImageSize};
    object-fit: cover;
    border-radius: 50%;
    margin: 1vw;
`

const Caption = s.figcaption`
    font-family: roboto;
    font-size: 1.4rem;
    text-align: center;
`

const Headshot = ({imageSrc, imageAlt, name, description}) => (
    <figure>
        <Image src={imageSrc} alt={imageAlt}/>
        <Caption>
            <b>{name}</b>
            <br/>
            <Text>{description}</Text>
        </Caption>
    </figure>
)

export default Headshot