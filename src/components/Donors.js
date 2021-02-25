import React from "react"
import s from "styled-components"
import { SubText, Text } from "./shared/Typography"

const LevelItem = s.div.attrs(() => ({
  className: "level-item has-text-left"
}))`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 18%;
`

const Level = s.div`
  margin-top: 2vw;
`

const DonorsLayout = ({ className }) => (
  <div className={`container is-fluid has-text-centered ${className}`}>
    <b><Text>This event could not have been possible without the support of:</Text></b>
    <Level className="level">
      <LevelItem>
        <SubText>Penn Partners: Wharton Risk Center, Wharton Energy Network, Climate Leaders @ Penn, Penn Environmental Group</SubText>
      </LevelItem>
      <LevelItem>
        <SubText>Donors: BIG MONEY PEOPLE GO HERE. NAMES NAMES NAMES AND MORE NAMES. PEOPLE NAMES. THING NAMES. BIG NAMES.</SubText>
      </LevelItem>
      <LevelItem>
      <SubText>Donors: BIG MONEY PEOPLE GO HERE. NAMES NAMES NAMES AND MORE NAMES. PEOPLE NAMES. THING NAMES. BIG NAMES.</SubText>
      </LevelItem>
      <LevelItem>
      <SubText>Donors: BIG MONEY PEOPLE GO HERE. NAMES NAMES NAMES AND MORE NAMES. PEOPLE NAMES. THING NAMES. BIG NAMES.</SubText>
      </LevelItem>
    </Level>
  </div>
)

export const Donors = s(DonorsLayout)`
  margin-top: 10vw;
`