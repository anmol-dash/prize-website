import React from "react"
import s from "styled-components"
import {Text, Link, Subtitle} from "./shared/Typography"

import RiskCenter from "../images/sponsors/RiskCenter.png"
import LSPower from "../images/sponsors/LSPower.png"
import SP2 from "../images/sponsors/SP2.png"
import PennLPS from "../images/sponsors/PennLPS.png"
import Kleinman from "../images/sponsors/Kleinman.jpg"
import TheYieldLab from "../images/sponsors/TheYieldLab.png"

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
  },
  {
    name: "Kleinman Center for Energy Policy",
    link: "https://kleinmanenergy.upenn.edu/",
    image: Kleinman
  }
]

const bronzeSponsors = [
  {
    name: "LSPower",
    link: "https://www.lspower.com/",
    image: LSPower
  },
  {
    name: "Penn LPS",
    link: "https://www.lps.upenn.edu/",
    image: PennLPS
  },
  {
    name: "The Yield Lab",
    link: "https://www.theyieldlab.com/",
    image: TheYieldLab,
    short: true
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

    {includeAlum && <CategoryTitle>Silver</CategoryTitle>}
    <SponsorCategory>
      {silverSponsors.map(sponsor => (
        <SponsorWrapper><Link href={sponsor.link}><img src={sponsor.image} alt={sponsor.name} style={{height: "100px", objectFit: "contain"}}/></Link></SponsorWrapper>
      )) }
    </SponsorCategory>

    {includeAlum && <CategoryTitle>Bronze</CategoryTitle>}
    <SponsorCategory>
      {bronzeSponsors.map(sponsor => (sponsor.short ? 
        <SponsorWrapper><Link href={sponsor.link}><img src={sponsor.image} alt={sponsor.name} style={{height: "140px"}}/></Link></SponsorWrapper>
        : <SponsorWrapper><Link href={sponsor.link}><img src={sponsor.image} alt={sponsor.name} style={{height: "100px", objectFit: "contain"}}/></Link></SponsorWrapper>
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

