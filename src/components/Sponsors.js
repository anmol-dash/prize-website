import React from "react"
import s from "styled-components"
import { SubText, Text, Link } from "./shared/Typography"
import { mediaMaxWidth } from "../utils/constants"

import RiskCenter from "../images/sponsors/RiskCenter.png"
import LSPower from "../images/sponsors/LSPower.png"

const LevelItem = s.div.attrs(() => ({
  className: "level-item has-text-left"
}))`
  // align-self: flex-start;
  // display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  width: 300px
`

const Level = s.div`
  margin: 2vw auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  
  ${mediaMaxWidth("768px")} {
    flex-direction: column;
    align-items: center;
  }
`

const Logo = s.img`
  max-width: 800px;
  margin: 20px;
`

const SponsorsLayout = ({ className }) => (
  <div className={`container has-text-centered ${className}`} css={`padding: 0 10px`}>
    <Text fontSize="1.5rem" roboto bold>This event could not have been possible without our sponsors.</Text>
    <Level className="level">
      <LevelItem>
        <SubText css={`text-align: center`}>
          <Link href="https://riskcenter.wharton.upenn.edu/"><Logo src={RiskCenter}/></Link>
          <br />
          <Link href="https://www.lspower.com/"><Logo src={LSPower}/></Link>
          <br />
        </SubText>
      </LevelItem>
    </Level>
  </div>
)

export const Sponsors = s(SponsorsLayout)`
  margin-top: 10vw;
  margin-bottom: 10vw;
`
