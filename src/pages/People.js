import React from "react"
import Helmet from "react-helmet"
import s from "styled-components"
import { Grid, Cell } from "styled-css-grid";
import "../pages/styles.scss"
import { Title, Text, Subtitle} from "../components/shared/Typography"
import { Navbar, Footer } from "../components"

import ArunMajumdar from '../images/arun_majumdar.jpeg'
import DennisWoodside from '../images/dennis woodside.jpg'
import ZhengxiaDou from '../images/zhengxia_dou.jpeg'
import DavdGalligan from '../images/david_galligan.jpeg'
import JamesHagan from '../images/james_hagan.jpeg'
import PeterPsarras from '../images/peter_psarras.jpeg'
import ArthurBenthem from '../images/arthur_benthem.jpeg'
import ESwann from '../images/e_swann.jpg'
import AlexBehar from '../images/alex_behar.jpeg'
import ShuoYang from '../images/shuo_yang.jpeg'
import AllyWarson from '../images/ally_warson.jpeg'
import KimberlyZou from '../images/kimberly_zou.jpeg'
import RyFisher from '../images/ry_fisher.jpeg'
import FranzHochstrasser from '../images/franz_hochstrasser.jpeg'
import CaitlynMcCloskey from '../images/caitlyn_mcCloskey.jpeg'
import BenMay from '../images/ben_may.jpeg'
import AkaashPadmanabha from '../images/akaash_padmanabha.jpeg'
import PEGLogo from '../images/peg.jpeg'
import SSAPLogo from '../images/ssap.png'
import PUCPLogo from '../images/pucp.jpeg'

const Headshot = s.img`
    width: 17vw;
    height: 17vw;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1vw;
    margin-top: 3vw;
`
const Caption = s.p`
    font-family: Roboto;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`

//keynote
const Keynote = () => {
  return (
    <div>
      <Subtitle>Keynote Speakers</Subtitle>
      <Grid columns={2} justifyContent="center">
        <Cell center>
          <Headshot src={ArunMajumdar} alt="Arun Majumdar" />
        </Cell>
        <Cell center>
          <Headshot src={DennisWoodside} alt="Dennis Woodside" />
        </Cell>

        <Cell center>
          <Caption>
            <b>Dr. Arun Majumdar</b>
            <br />
            <Text css={`text-align:center`}>Founder and Director of ARPA-E, 
              Former Head of Google Sustainability, Stanford Professor</Text>
          </Caption>
        </Cell>

        <Cell center>
          <Caption>
              <b>Dennis Woodside</b>
              <br />
              <Text css={`text-align:center`}>President of Impossible Foods</Text>
            </Caption>
        </Cell>
      </Grid>
    </div>
  )
}
//panelists
const Panelists = () => {
  return (
    <div>
      <Subtitle>Panelists</Subtitle>
      <Grid columns={3} gap= "5px" justifyContent="center">
        <Cell center>
          <Headshot src={ZhengxiaDou} alt="Dr. Zhengxia Dou" />
        </Cell>
        <Cell center>
          <Headshot src={DavdGalligan} alt="Dr. David T Galligan" />
        </Cell>
        <Cell center>
          <Headshot src={JamesHagan} alt="Dr. James R Hagan" />
        </Cell>
        <Cell center>
          <Caption>
            <b>Dr. Zhengxia Dou</b>
            <br />
            <Text>Professor, Agricultural Systems, 
              University of Pennsylvania
              School of Veterinary Medicine, 
              Department of Clinical Studies,
              New Bolton Center</Text>
          </Caption>
        </Cell>

        <Cell center>
          <Caption>
            <b>Dr. David T Galligan</b>
            <br />
            <Text>Professor of Animal Health
              Economics, University of 
              Pennsylvania, School of
              Veterinary Medicine</Text>
          </Caption>
        </Cell>

        <Cell>
          <Caption>
            <b>Dr. James R Hagan</b>
            <br />
            <Text>Graduate Student Advisor in the 
              Sustainability and Environmental 
              Policy concentrations, Former 
              Vice President of Sustainability and Environment
               at GlaxoSmithKline</Text>
          </Caption>
        </Cell>

        <Cell center>
          <Headshot src={PeterPsarras} alt="Dr. Peter Psarras" />
        </Cell>
        <Cell center>
          <Headshot src={ArthurBenthem} alt="Dr. Arthur van Benthem" />
        </Cell>
        <Cell center>
          <Headshot src={ESwann} alt="E. Mitchell Swann" />
        </Cell>
        <Cell center>
          <Caption>
            <b>Dr. Peter Psarras</b>
            <br />
            <Text>Research Assistant Professor, 
              Chemical and Biomolecular 
              Engineering</Text>
          </Caption>
        </Cell>

        <Cell center>
          <Caption>
            <b>Dr. Arthur van Benthem</b>
            <br />
            <Text>Associate Professor of Business
              Economics and Public Policy</Text>
          </Caption>
        </Cell>

        <Cell>
          <Caption>
            <b>E. Mitchell Swann</b>
            <br />
            <Text>Managing Director at 
              Resolution Management Consultants, 
              Philadelphia Energy Authority Board</Text>
          </Caption>
        </Cell>

        <Cell center>
          <Headshot src={AlexBehar} alt="Alex Behar" />
        </Cell>
        <Cell center>
          <Headshot src={ShuoYang} alt="Shuo Yang" />
        </Cell>
        <Cell center>
          <Headshot src={AllyWarson} alt="Ally Warson" />
        </Cell>
        <Cell center>
          <Caption>
            <b>Alex Behar</b>
            <br />
            <Text>Vice President at Cultivian Sandbox</Text>
          </Caption>
        </Cell>

        <Cell center>
          <Caption>
            <b>Shuo Yang</b>
            <br />
            <Text>Principal at Fifty Years</Text>
          </Caption>
        </Cell>

        <Cell>
          <Caption>
            <b>Ally Warson</b>
            <br />
            <Text>Senior Associate at UP Partners</Text>
          </Caption>
        </Cell>

        <Cell center>
          <Headshot src={KimberlyZou} alt="Kimberly Zou" />
        </Cell>
        <Cell center>
          <Headshot src={RyFisher} alt="Ry Storey-Fisher" />
        </Cell>
        <Cell center>
          <Headshot src={FranzHochstrasser} alt="Franz Hochstrasser" />
        </Cell>
        <Cell center>
          <Caption>
            <b>Kimberly Zou</b>
            <br />
            <Text>Founder of Climate Tech VC and Analyst at Energy Impact Partners</Text>
          </Caption>
        </Cell>

        <Cell center>
          <Caption>
            <b>Ry Storey-Fisher</b>
            <br />
            <Text>Senior Partnership Associate at Powerhouse</Text>
          </Caption>
        </Cell>

        <Cell>
          <Caption>
            <b>Franz Hochstrasser</b>
            <br />
            <Text>CEO and Co-founder of Raise Green and 
              New Haven Community Solar, Former Senior 
              Advisor to the Special Envoy for Climate 
              Change @ the US State Dept</Text>
          </Caption>
        </Cell>

      </Grid>
    </div>
  )
}

//moderators
const Moderators = () => {
  return (
    <div>
      <Subtitle>Moderators</Subtitle>
      <Grid columns={3} gap="20px" justifyContent="center">
        <Cell center>
          <Headshot src={CaitlynMcCloskey} alt="Caitlyn McCloskey" />
        </Cell>
        <Cell center>
          <Headshot src={BenMay} alt="Ben May" />
        </Cell>
        <Cell center>
          <Headshot src={AkaashPadmanabha} alt="Akaash Padmanabha" />
        </Cell>
        <Cell center>
          <Caption>
            <b>Caitlyn McCloskey</b>
            <br />
            <Text>Executive member of Penn Environmental Group</Text>
          </Caption>
        </Cell>

        <Cell center>
          <Caption>
            <b>Ben May</b>
            <br />
            <Text>Founder of ThinkOcean,
              Former Co-Chair of SSAP,
              Former UA Director of
              Sustainability and Community
              Impact</Text>
          </Caption>
        </Cell>

        <Cell>
          <Caption>
            <b>Akaash Padmanabha</b>
            <br />
            <Text>Chair of Penn Dining Advisory Board</Text>
          </Caption>
        </Cell>
      </Grid>
    </div>
  )
}

//event co-sponsors
const CoSponsors = () => {
  return (
    <div>
      <Subtitle>Event Co-Sponsors</Subtitle>
      <Grid columns={3} justifyContent="center">
        <Cell center>
          <Headshot src={PEGLogo} alt="Penn Environmental Group" />
        </Cell>
        <Cell center>
          <Headshot src={SSAPLogo} alt="Student Sustainability Association at Penn (SSAP)" />
        </Cell>
        <Cell center>
          <Headshot src={PUCPLogo} alt="Penn Undergraduate Capital Partners" />
        </Cell>
        <Cell center>
        <Caption>
            <b>Penn Environmental Group</b>
            <br />
            <Text>Penn's oldest and largest 
              environmental group, addressing
              environmental issues and increasing
              environmental awareness both at a
              community and global level
			      </Text>
          </Caption>
        </Cell>

        <Cell center>
         <Caption>
            <b>Student Sustainability Association at Penn (SSAP)</b>
            <br />
            <Text>The official umbrella group of
              environmental sustainability student
              groups on Penn's campus
			      </Text>
          </Caption>
        </Cell>

        <Cell>
        <Caption>
            <b>Penn Undergraduate Capital Partners</b>
            <br />
            <Text>Student-led organization that is
              changing the way venture capital 
              interacts with universities in 
              Philadelphia and beyond.</Text>
          </Caption>
        </Cell>
      </Grid>
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
      <br />
      <Subtitle>SparkTeen Team</Subtitle>
      <Text>
        Kyler Wang<br />
        Kai Fine<br />
        Angel More <br />
        Andrew Gao<br />
        Jodi Sy<br />
        Aiko Ma<br />
        Sumner Rahr<br />
        Kevin Wang<br />
        Rayan Garg <br />
      </Text>
    </div>
  )
}

const People = () => {
  return (
    <>
      <Helmet defaultTitle="PCV Prize" titleTemplate="%s | PCV Prize" defer={false}>
        <Title>People</Title>
        <meta charSet="utf-8" />
        <link rel="canonical" href={"https://www.prize.pennclimateventures.org/people"} />
        <meta name="description" content="Penn Climate Ventures official prize people." />
      </Helmet>
      <Navbar />
      <div css={`padding: 8vw 16vw;`}>
        <Title>People</Title>
        <Keynote/>
        <br />
        <Panelists/>
        <br />
        <Moderators/>
        <br />
        <CoSponsors/>
        <br />
        <PCVTeam/>
      </div>
      <Footer />
    </>
  )
}

export default People;