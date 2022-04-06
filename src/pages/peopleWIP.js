import React from "react"
import s from "styled-components"
import "./styles.scss"
import { Title, Text, Subtitle} from "../components/shared/Typography"
import { Navbar, Footer } from "../components"
import Headshot from "../components/shared/Headshot"

import ArunMajumdar from "../images/2021/keynote/ArunMajumdar.jpg"
import DennisWoodside from "../images/2021/keynote/DennisWoodside.jpg"

import ZhengxiaDou from "../images/2021/panelists/ZhengxiaDou.jpg"

import CaitlynMcCloskey from "../images/2021/moderators/CaitlynMcCloskey.jpg"

import SEO from "../components/seo";

const GridLayout = s.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

//keynote
const Keynote = () => {
  return (
    <div>
      <Subtitle>Keynote Speakers</Subtitle>
      <GridLayout>
        {/* <Headshot
          imageSrc={ArunMajumdar}
          imageAlt="Arun Majumdar"
          name="Arun Majumdar"
          description={<>Jay Precourt Professor of Mechanical Engineering and Photon Science and by courtesy, of Materials Science and Engineering, Stanford University</>}/> */}
      </GridLayout>
    </div>
  )
}

//panelists
const Panelists = () => {
  return (
    <div>
      <Subtitle>Panelists</Subtitle>
      <GridLayout>
        {/* <Headshot
          imageSrc={ZhengxiaDou}
          imageAlt="Dr. Zhengxia Dou"
          name="Dr. Zhengxia Dou"
          description="Professor, Agricultural Systems, University of Pennsylvania School of Veterinary Medicine, Department of Clinical Studies, New Bolton Center" /> */}
      </GridLayout>
    </div>
  )
}

//judges
const Judges = () => {
  return (
    <div>
      <Subtitle>Judges</Subtitle>
      <GridLayout>
      </GridLayout>
    </div>
  )
}

//moderators
const Moderators = () => {
  return (
    <div>
      <Subtitle>Moderators</Subtitle>
      <GridLayout>
        {/* <Headshot
          imageSrc={CaitlynMcCloskey}
          imageAlt="Caitlyn McCloskey"
          name="Caitlyn McCloskey"
          description={<>Executive member of the <br/> Penn Environmental Group</>} /> */}
      </GridLayout>
    </div>
  )
}

//PCV team, advisors, and other core members
const PCVTeam = () => {
  return (
    <div>
      <Subtitle>PCV Team</Subtitle>
      <Text>
        Andrew Yu - Management <br />
        Mark Wasuwanich - Management <br />
        Aliris Tang - Management <br />
        Marina Dauer - Prize Lead <br />
        Shalini Majumdar - Fellowships Lead <br />
        Angela Sun - Events Coordinator <br />
        Yi-An Hsieh - Events Coordinator, Design <br />
        Nicole Chau - Design
      </Text>
      <br />
      <Subtitle>PCV Advisors</Subtitle>
      <Text>
        Clara Lyle - Weitzman School of Design, MA Environmental Planning <br />
        Helen Wiley - Wharton Risk Center <br />
        Ben Thomas - Wharton Risk Center <br />
      </Text>
    </div>
  )
}

const People = () => {
  return (
    <>
      <SEO title="2021 People" defer={false} />
      <Navbar />
      <div css={`padding: 90px 12vw;`}>
        <Title css={`margin-bottom: 15px`}>People (2022)</Title>
        <Keynote/>
        <br />
        <Panelists/>
        <br />
        <Judges/>
        <br/>
        <Moderators/>
        {/* <br />
        <PCVTeam/> */}
      </div>
      <Footer />
    </>
  )
}

export default People;
