import React from "react"
import s from "styled-components"
import { Text, SubText, Link } from "./Typography"

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
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`

const Biography = s.details`
    font-size:${({ fontSize }) => fontSize || `1.2rem`};
    font-family: ${({roboto}) => roboto ? `Roboto` : `Avenir`};
    color: ${({fontColor}) => fontColor || `black`};
    ${({bold}) => bold && `font-weight: bold`};
`

const Headshot = ({imageSrc, imageAlt, name, description, linkedIn, width, bio}) => (
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
        {bio
            && 
            <Biography>
                <summary> Biography </summary>
                <SubText>{bio}</SubText>
            </Biography>
        }
    </figure>
)

export default Headshot