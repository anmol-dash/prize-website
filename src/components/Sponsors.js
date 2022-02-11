import React from "react"
import s from "styled-components"
import {Text, Link, Subtitle} from "./shared/Typography"

import RiskCenter from "../images/sponsors/RiskCenter.png"
import LSPower from "../images/sponsors/LSPower.png"
import SP2 from "../images/sponsors/SP2.png"

const silverSponsors = [
  {
    name: "Wharton Risk Management and Decision Process Center",
    link: "https://riskcenter.wharton.upenn.edu/",
    image: RiskCenter
  },
  {
    name: "Penn Social Policy & Practice",
    link: "https://www.sp2.upenn.edu/",
    image: SP2
  }
]

const bronzeSponsors = [
  {
    name: "LSPower",
    link: "https://www.lspower.com/",
    image: LSPower
  }
]

const alumSponsors = [
  {
    name: "David Wierz",
    info: "G89 G02"
  }
]

const CategoryTitle = s(Subtitle)`
  margin-top: 30px;
  margin-bottom: 15px;
`

const SponsorCategory = s.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`

const SponsorWrapper = s.div`
  margin: 20px;
  max-width: 600px;
`

export const Sponsors = ({ includeAlum }) => (
  <div className={`container has-text-centered`}>
    <Text fontSize="1.5rem" roboto bold css={{margin: `60px auto`}}>
      This event could not have been possible without our sponsors.
    </Text>

    <CategoryTitle>Silver</CategoryTitle>
    <SponsorCategory>
      {silverSponsors.map(sponsor => (
        <SponsorWrapper><Link href={sponsor.link}><img src={sponsor.image} alt={sponsor.name}/></Link></SponsorWrapper>
      )) }
    </SponsorCategory>

    <CategoryTitle>Bronze</CategoryTitle>
    <SponsorCategory>
      {bronzeSponsors.map(sponsor => (
        <SponsorWrapper><Link href={sponsor.link}><img src={sponsor.image} alt={sponsor.name}/></Link></SponsorWrapper>
      )) }
    </SponsorCategory>

    {includeAlum
      ? <>
        <CategoryTitle>Alum Sponsors</CategoryTitle>
        <SponsorCategory>
        {alumSponsors.map(sponsor => (
          <SponsorWrapper>{sponsor.name} {sponsor.info}</SponsorWrapper>
        )) }
        </SponsorCategory>
        </>
      : <></>
    }
  </div>
)

