import React from "react"
import s from "styled-components"
import { Title, Subtitle } from "./shared/Typography"

const LevelItem = s.div.attrs(() => ({
  className: "level-item has-text-centered"
}))`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const Level = s.div`
  margin-top: 2vw;
`

const PrizesLayout = ({ className }) => (
  <div className={`container is-fluid has-text-centered ${className}`}>
    <Subtitle>Dive into the most pressing environmental issues of today.</Subtitle>
    <Level className={`level is-mobile`}>
      <LevelItem>
        <Subtitle>First Place Grand Prize</Subtitle>
        <Title>$5000</Title>
      </LevelItem>
      <LevelItem>
        <Subtitle>Second</Subtitle>
        <Title>$2500</Title>
      </LevelItem>
      <LevelItem>
        <Subtitle>Third</Subtitle>
        <Title>$1250</Title>
      </LevelItem>
    </Level>
  </div>
)

export const Prizes = s(PrizesLayout)`
  margin-top: 10vw;
`