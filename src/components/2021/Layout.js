import React from "react"
import s from "styled-components"
import { Subtitle, Text, mediaMaxWidth } from "../../components/shared/Typography"
import { GREEN } from "../../utils/constants"

export const Columns = s.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 15px auto;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`

export const Images = s.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 15px auto;
    text-align: center;
    flex-wrap: wrap;
`

export const Logo = s.img`
    display: block;
    margin: auto;
    padding-top: 2vw;
    padding-bottom: 2vw;
    width: ${({ width }) => width || `500px`};
`

export const Headshot = s.img`
    object-fit: cover;
    width: ${({ width }) => width || `180px`};
    height: ${({ height }) => height || `180px`};
`

export const Name = s.figcaption`
    font-family: roboto;
    font-weight: bold;
    color: ${GREEN};
    font-size: 20px;
    display: table-caption;
    caption-side: bottom;
    margin: -5px 2px 0 2px;
`

export const ColumnText = s.div`
    flex-basis: 50vw;
    padding-top: 10px;

    @media screen and (min-width: 900px) {
        ${({right}) => right ? `padding-left: 2vw` : `padding-right 2vw`}
    }
`

export const TeamSummary = s(Text)`
    font-family: roboto;
    font-weight: bold;
`

export const TeamSubtitle = s(Subtitle)`
    font-size: 1.4rem;
`

export const Figure = ({name, source, size}) => (
    <figure css={`padding: 5px 0; display: table;`}>
        <Headshot src={source} alt ={name} width={size} height={size}/>
        <Name>{name}</Name>
    </figure>
)