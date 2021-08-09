import React from "react"
import s from "styled-components"
import { Subtitle, Text } from "./shared/Typography"
import { FOREST_GREEN, STEEL_BLUE, GREEN, FOCUS_GREEN, mediaMaxWidth } from "../utils/constants.js"
import Button from "../components/shared/Button"
import Headshot from "../components/shared/Headshot"

import Arun from "../images/2021/keynote/ArunMajumdar.jpg"
import Dennis from "../images/2021/keynote/DennisWoodside.jpg"
import Lidiya from "../images/2021/judges/LidiyaDervisheva.jpg"
import Seth from "../images/2021/judges/SethBannon.jpg"
import Marisa from "../images/2021/judges/MarisaSweeney.jpg"
import Sam from "../images/2021/judges/SamBursten.jpg"

const PeoplePhotos = s.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 2vw;
`

const Circle = s.a`
    background-color: ${FOREST_GREEN};
    color: white;
    font-family: roboto;
    font-size: 2rem;
    border-radius: 150px;
    width: 190px;
    height: 190px;
    text-align: center;
    line-height: 190px;
    margin: 15px 0;

    :hover{
        color: white;
    }
`

const LevelItem = s.div.attrs(() => ({
    className: "level-item has-text-centered"
  }))`
    flex-direction: column;
    width: 18vw;
    margin: 0 auto;
`
  
const Level = s.div`
    margin: 5px auto;
    display: flex;
    justify-content: center;
  
    ${mediaMaxWidth("768px")} {
      width: 100%;
      padding: 5%;
      flex-direction: column;
    }
`
  
const PrizeTitle = s(Text)`
      font-family: roboto;
      font-weight: bold;
      color: ${STEEL_BLUE};
      text-align: center;
      font-size: 1.3rem;
  `
  
const PrizeSubtitle = s(Text)`
      font-family: roboto;
      font-weight: bold;
      color: ${STEEL_BLUE};
      text-align: center;
      font-size: 3.5rem;
  `

const WinnersButton = s(Button)`
    background-color: ${GREEN};
    color: white;
    border: none;
    font-size: 2rem;
    text-align: center;
    width: 50vw;
    display: block;
    margin: 2vw auto;

    :hover{
        background-color: ${FOCUS_GREEN};
    }

`

const People = () => (
    <div>
        <Subtitle center>Mentors, Judges, & Speakers</Subtitle>
        <PeoplePhotos>
            <Headshot 
                imageSrc={Dennis} 
                imageAlt={"Dennis"} 
                name={"Dennis Woodside"} 
                description={<>President <br/> @ Impossible Foods</>}
                width="190px"/>
            <Headshot 
                imageSrc={Arun} 
                imageAlt={"Arun"} 
                name={"Dr. Arun Majumdar"} 
                description={<>Founding Director <br/> @ ARPA-E <br/> Former VP of Energy <br/> @ Google</>}
                width="190px"/>
            <Headshot 
                imageSrc={Marisa} 
                imageAlt={"Marisa"} 
                name={"Marisa Sweeney"} 
                description={<>Director <br/> @ Generate Capital</>}
                width="190px"/>
             <Headshot 
                imageSrc={Lidiya} 
                imageAlt={"Lidiya"} 
                name={"Lidiya Dervisheva"} 
                description={<>Partner <br/> @ Next47</>}
                width="190px"/>
            <Circle href="/people">+ more</Circle>
        </PeoplePhotos>
    </div>
)

const Prizes = () => (
    <div
        css={`border-style: solid;
            border-radius: 50px;
            width: 60vw;
            padding: 3vw;
            display: block;
            margin: 4vw auto 1vw`}>
        <Subtitle center>Prizes</Subtitle>
        <Level>
            <LevelItem>
                <PrizeTitle>First</PrizeTitle>
                <PrizeSubtitle>$1000</PrizeSubtitle>
            </LevelItem>
            <LevelItem>
                <PrizeTitle>Second</PrizeTitle>
                <PrizeSubtitle>$500</PrizeSubtitle>
            </LevelItem>
            <LevelItem>
                <PrizeTitle>Third</PrizeTitle>
                <PrizeSubtitle>$250</PrizeSubtitle>
            </LevelItem>
        </Level>
    </div>
)

const Finals = () => (
    <div css={`text-align: center;
                width: 70vw;
                padding: 3vw;
                display: block;
                margin: 1vw auto`}>
        <Text fontSize="2rem" roboto bold>Live Finals, 4/24 at 12 PM EST, <br/> with keynote from</Text>
        <div css={`display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 2vw;`}>
            <Headshot 
                imageSrc={Dennis} 
                imageAlt={"Dennis"} 
                name={"Dennis Woodside"} 
                description={"President of Impossible Foods"}/>
        </div>

        <Text fontSize="2rem" roboto bold>and judging by</Text>

        <PeoplePhotos>
            <Headshot 
                imageSrc={Lidiya} 
                imageAlt={"Lidiya Dervisheva"} 
                name={"Lidiya Dervisheva"} 
                description={<>Partner <br/> @ Next47</>}
                width="190px"/>
            <Headshot 
                imageSrc={Seth} 
                imageAlt={"Seth Bannon"} 
                name={"Seth Bannon"} 
                description={<>Founding Partner <br/> @ Fifty Years</>}
                width="190px"/>
            <Headshot 
                imageSrc={Marisa} 
                imageAlt={"Marisa Sweeney"} 
                name={"Marisa Sweeney"} 
                description={<>Director <br/> @ Generate Capital</>}
                width="190px"/>
            <Headshot 
                imageSrc={Sam} 
                imageAlt={"Sam Bursten"} 
                name={"Sam Bursten"} 
                description={<>Vice President <br/>@ Energy Impact Partners</>}
                width="190px"/>
        </PeoplePhotos>
    </div>
)


const Judging = () => (
    <div css={`padding: 0 10px`}>
        <People />
        <Prizes />
        <Finals />
        <WinnersButton href="/Winners2021">View 2021 PCV Prize Winning Pitches</WinnersButton>
        <Subtitle center>Registration Closed for 2021</Subtitle>
    </div>
)

export default Judging