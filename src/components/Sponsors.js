import React from "react"
import s from "styled-components"
import {Text, Link, Subtitle} from "./shared/Typography"

import RiskCenter from "../images/sponsors/RiskCenter.png"
import LSPower from "../images/sponsors/LSPower.png"
import SP2 from "../images/sponsors/SP2.png"
import PennLPS from "../images/sponsors/PennLPS.png"
import Kleinman from "../images/sponsors/Kleinman.jpg"
import TheYieldLab from "../images/sponsors/TheYieldLab.png"
import JeromeFisher from "../images/sponsors/JeromeFisher.jpg"
import Blackhorn from "../images/sponsors/Blackhorn.png"
import Banyan from "../images/sponsors/Banyan.png"
import Headshot from "../components/shared/Headshot"
import DavidWertz from "../images/sponsors/DavidWertz.jpg"

const goldSponsors = [
  {
    name: "Banyan Infrastructure",
    link: "https://www.banyaninfrastructure.com/",
    image: Banyan,
    short: true
  }
]

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
  },
  {
    name: "Blackhorn Ventures",
    link: "https://blackhornvc.com/",
    image: Blackhorn,
    short: true
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
  },
  {
    name: "Jerome Fisher Program",
    link: "https://fisher.wharton.upenn.edu/",
    image: JeromeFisher,
    short: true
  },
]

const alumSponsors = [
  {
    name: "David Wierz",
    info: "G89 G02",
    image: DavidWertz
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
    {includeAlum && <CategoryTitle>Gold</CategoryTitle>}
    <SponsorCategory>
      {goldSponsors.map(sponsor => (sponsor.short ?
        <SponsorWrapper><Link href={sponsor.link}><img src={sponsor.image} alt={sponsor.name} style={{height: "140px"}}/></Link></SponsorWrapper>
        : <SponsorWrapper><Link href={sponsor.link}><img src={sponsor.image} alt={sponsor.name} style={{height: "100px", objectFit: "contain"}}/></Link></SponsorWrapper>
      )) }
    </SponsorCategory>
    {includeAlum && <CategoryTitle>Silver</CategoryTitle>}
    <SponsorCategory>
      {silverSponsors.map(sponsor => (sponsor.short ?
        <SponsorWrapper><Link href={sponsor.link}><img src={sponsor.image} alt={sponsor.name} style={{height: "140px"}}/></Link></SponsorWrapper>
        : <SponsorWrapper><Link href={sponsor.link}><img src={sponsor.image} alt={sponsor.name} style={{height: "100px", objectFit: "contain"}}/></Link></SponsorWrapper>
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
          <SponsorWrapper>
            {sponsor.image && <Headshot imageSrc={sponsor.image} imageAlt="Image"/>}
            <Text>{sponsor.name} {sponsor.info}</Text>
          </SponsorWrapper>
        )) }
        </SponsorCategory>
        </>
      : <></>
    }
  </div>
)

