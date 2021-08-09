import React from "react"
import s from "styled-components"
import { Text, Link } from "./Typography"

const ImageSize = `190px`;


const Image = s.img`
    width: ${ImageSize};
    height: ${ImageSize};
    object-fit: cover;
    border-radius: 50%;
    margin: 0 1vw;
`

const Caption = s.figcaption`
    width: ${({ width }) => width || `350px`};
    font-family: roboto;
    font-size: 1.4rem;
    text-align: center;
`

const Headshot = ({imageSrc, imageAlt, name, description, linkedIn, width}) => (
    <figure css={`text-align: center; padding: 15px 5px;`}>
        {linkedIn 
            ? <Link href={linkedIn} target="_blank" rel="noopener noreferrer">
                <Image src={imageSrc} alt={imageAlt}/>
            </Link> 
            : <Image src={imageSrc} alt={imageAlt}/>}
        <Caption width={width}>
            <b>{name}</b>
            <br/>
            <Text>{description}</Text>
        </Caption>
    </figure>
)

export default Headshot