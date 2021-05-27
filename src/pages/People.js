import React from "react"
//import { StyleSheet, View } from "react-native";
import Helmet from "react-helmet"
import "../pages/styles.scss"
import s from "styled-components"
import { Title, Text, Subtitle, Link } from "../components/shared/Typography"
import ArunMajumdar from '../images/arun_majumdar.jpeg'
import DennisWoodside from '../images/dennis woodside.jpg'


import { Navbar, Footer } from "../components"

const Headshot = s.img`
    width: 13vw;
    height: 13vw;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1vw;
    margin-left: 4vw;
`
//    

const Caption = s.figcaption`
    font-family: Roboto;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    
`
//margin-bottom: 0vw;
// margin-left: 4vw;
// margin-right: 5vw;
const Columns = s.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2vw;
`

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     alignItems: 'flex-start' // if you want to fill rows left to right
//   },
//   item: {
//     width: '50%' // is 50% of container width
//   }
// })

//keynote
const Keynote = () => {
  return (
    <div>
      <Subtitle>Keynote Speakers</Subtitle>

      {/* <View style={styles.container}>
        <View style={styles.item}><Text>{'item1'}</Text></View>
        <View style={styles.item}><Text>{'item2'}</Text></View>
        <View style={styles.item}><Text>{'item4'}</Text></View>

      </View> */}

      <div css={`display: flex;
                      justify-content: center;
                      align-items: center;
                      padding: 5vw;`}> 
        <Columns>
        <figure>
          <Headshot src={ArunMajumdar} alt="Arun Majumdar" />
          <Caption>
            <b>Dr. Arun Majumdar</b>
            <br />
            <Text css={`text-align:center`}>Founder and Director of ARPA-E, <br />
              Former Head of Google Sustainability, <br />
              Stanford Professor</Text>
          </Caption>
        </figure>

        <figure>
          <Headshot src={DennisWoodside} alt="Dennis Woodside" />
          <Caption>
            <b>Dennis Woodside</b>
            <br />
            <Text css={`text-align:center`}>President of Impossible Foods</Text>
          </Caption>
        </figure>
        </Columns>
      </div>


      <Subtitle>Panelists</Subtitle>
      <Columns>
        <figure>
          <Headshot src={ArunMajumdar} alt="Dr. Zhengxia Dou" />
          <Caption>
            <b>Dr. Zhengxia Dou</b>
            <br />
            <Text>Professor, Agricultural Systems, <br />
              University of Pennsylvania <br />
              School of Veterinary Medicine, <br />
              Department of Clinical Studies, <br />
              New Bolton Center</Text>
          </Caption>
        </figure>
        <figure>
          <Headshot src={ArunMajumdar} alt="Dr. David T Galligan" />
          <Caption>
            <b>Dr. David T Galligan</b>
            <br />
            <Text>Professor of Animal Health <br />
              Economics, University of <br /> 
              Pennsylvania, School of <br />
              Veterinary Medicine</Text>
          </Caption>
        </figure>
        <figure>
          <Headshot src={ArunMajumdar} alt="Dr. James R Hagan" />
          <Caption>
            <b>Dr. James R Hagan</b>
            <br />
            <Text>Graduate Student Advisor in the <br />
              Sustainability and Environmental <br />
              Policy concentrations, Former Vice <br />
              President of Sustainability and <br />
              Environment at GlaxoSmithKline</Text>
          </Caption>
        </figure>
      </Columns>

      <Subtitle>Moderators</Subtitle>
      <Columns>
        <figure>
          <Headshot src={ArunMajumdar} alt="Caitlyn McCloskey" />
          <Caption>
            <b>Caitlyn McCloskey</b>
            <br />
            <Text>Executive member of the <br />
              Penn Environmental Group</Text>
          </Caption>
        </figure>
        <figure>
          <Headshot src={ArunMajumdar} alt="Ben May" />
          <Caption>
            <b>Ben May</b>
            <br />
            <Text>Founder of ThinkOcean, <br />
              Former Co-Chair of SSAP, <br />
              Former UA Director of <br />
              Sustainability and Community <br />
              Impact</Text>
          </Caption>
        </figure>
        <figure>
          <Headshot src={ArunMajumdar} alt="Akaash Padmanabha" />
          <Caption>
            <b>Akaash Padmanabha</b>
            <br />
            <Text>Chair of Penn Dining Advisory <br />
              Board</Text>
          </Caption>
        </figure>
      </Columns>

      <Subtitle>Event Co-Sponsors</Subtitle>
      <Columns>
        <figure>
          <Headshot src={ArunMajumdar} alt="Penn Environmental Group" />
          <Caption>
            <b>Penn Environmental Group</b>
            <br />
            <Text>Penn's oldest and largest <br />
              environmental group, addressing <br />
              environmental issues and increasing <br />
              environmental awareness both at a <br />
              community and global level
			      </Text>
          </Caption>
        </figure>
        <figure>
          <Headshot src={ArunMajumdar} alt="Student Sustainability Association at Penn (SSAP)" />
          <Caption>
            <b>Student Sustainability <br /> Association at Penn (SSAP)</b>
            <br />
            <Text>The official umbrella group of <br />
              environmental sustainability student <br />
              groups on Penn's campus
			      </Text>
          </Caption>
        </figure>
        <figure>
          <Headshot src={ArunMajumdar} alt="Penn Undergraduate Capital Partners" />
          <Caption>
            <b>Penn Undergraduate Capital Partners</b>
            <br />
            <Text>Student-led organization that is <br />
              changing the way venture capital <br />
              interacts with universities in <br />
              Philadelphia and beyond.</Text>
          </Caption>
        </figure>
      </Columns>

      <br />
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
//panelists

//moderators

//event co-sponsors

//PCV Team, Advisors, and other Core Members


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
      </div>
      <Footer />
    </>
  )
}

export default People;