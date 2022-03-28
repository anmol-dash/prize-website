import React, { useState, useEffect } from "react"
import { Navbar, Footer} from "../components"
import s from "styled-components"
import { Title, Text, Subtitle, Link } from "../components/shared/Typography"
import Button from "../components/shared/Button"
import Headshot from "../components/shared/Headshot"
import {GREEN} from "../utils/constants.js"

import AndrewBeebe from "../images/2022/andrew_beebe.png"
import SEO from "../components/seo";
import ShuoYang from "../images/2022/ShuoYang.jpg"

const EventTitle = s(Subtitle)`
    color: ${GREEN};
`

const EventSubtitle = s(Subtitle)`
    font-size: 1.5rem;
    margin-top: 15px
`

const NumList = s.ol`
    font-size: 1.2rem;
    font-family: Avenir;
    margin-left: 20px;
`

const EventGroup = s.div`
    margin: 10px 0;
`

const RoundedRectangle = s.div`
    text-align: center;
    border-style: solid;
    border-radius: 40px;
    width: 70vw;
    padding: 3vw;
    display: block;
    margin: 4vw auto;
`

const EventDate = s.div`
    flex-basis: 100px; 
    padding-left: 5px; 
    text-align: center;

    @media screen and (max-width: 740px) {
        font-size: 1.2rem !important;
    }
`

const EventDetails = ({date, description, buttonText, buttonLink, image}) => {
    const dayRegex = /\s\d{1,2}\s/;
    const monthRegex = /^\w{3}/;
    const timeRegex = /(\d{1,2}:\d{1,2}|\d{1,2})\s(A|P)M/;

    const month = date ? date.match(monthRegex) : "";
    const day = date ? date.match(dayRegex) : "";
    const time = date ? date.match(timeRegex)[0] : "";

    const [isDesktop, setDesktop] = useState(
        typeof window !== "undefined" ? window.innerWidth > 740 : 740);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 740);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      });

    return (
        <div
            css={`display: flex;
                  border-left: 0.3rem solid ${GREEN};
                  flex-wrap: wrap;
                  flex-direction: row;
                  margin: 10px 25px;
                  `}>
            {date && (isDesktop ? (
                <div css={`flex-basis: 100px; padding-left: 5px; text-align: center; margin: auto 0;`}>
                    <Text fontSize="1.2rem" roboto bold>{month}</Text>
                    <Text fontSize="2.2rem" roboto bold css={`line-height: 1`}>{day}</Text>
                    <Text fontSize="1.2rem" roboto bold >{time}</Text>
                    <Text roboto bold css={`line-height: 0.8`}>EST</Text>
                </div>
            ) : (
                <Text fontSize="1.2rem" roboto bold css={`padding-left: 20px`}>{month} {day} @ {time} EST</Text>
            ))}
            <div css={`padding-left: 20px`}>
                {image && <Headshot imageSrc={image} imageAlt="Image"/> }
                <Text>{description}</Text>
                {buttonText && <Button href={buttonLink}>{buttonText}</Button>}
            </div>
        </div>
    )
}

const Timeline = () => (
    <div>
        <EventGroup>
            <EventTitle>Registration</EventTitle>
            <EventSubtitle>Check Your Eligibility</EventSubtitle>
            <EventDetails
                description={<>All students enrolled at any institution around the world are invited to compete in the PCV Prize.
                    <br/>
                    Teams of up to 5 will pitch their early stage climate startup concepts to industry leaders and venture capitalists.
                    <br/>
                    Team eligibility varies by competition track.</>}
                buttonText="Official Rules"
                buttonLink="/rules"/>

            <EventSubtitle>Pick a Track</EventSubtitle>
            <EventDetails
                description={<><b>Collegiate Tracks</b>
                    <NumList>
                    <li>Waste & Circularity</li>
                    <li>Energy & Transportation​</li>
                    <li>Food & Agriculture</li>
                    <li>Wildcard</li>
                    </NumList>
                    ​<br/>
                    <b>High School Tracks</b>
                    <br/>
                    <NumList>
                    <li>High School Track in Partnership with Zipline Theory</li>
                    </NumList></>}
                buttonText="Find Your Track"
                buttonLink="/rules"/>

            <EventSubtitle>Individual Registration</EventSubtitle>
            <EventDetails
                date="MAR 26 11:59 PM EST"
                description="Register individually and start building your team through our online PCV Prize Discord community and stay up to date with our latest news."
                buttonText="Register Now!"
                buttonLink="https://tinyurl.com/PCV22Signup"/>

            <EventSubtitle>Team Registration</EventSubtitle>
            <EventDetails
                date="MAR 28 11:59 PM EST"
                description={<>Teams will need to fully register by the deadline to qualify for the competition. Teams will need to choose a track in which to complete. Full rules can be found <Link href="/rules">here</Link>.</>}
                buttonText="Will be available on 3/26"
                buttonLink=""/>
        </EventGroup>

        <EventGroup>
          <EventTitle>PCV Prize Launch Event</EventTitle>
          <Text>You will be briefed on prize details, hear from Andrew Beebe, and get a chance to network with peers.</Text>
          <EventSubtitle>Opening Keynote with Andrew Beebe</EventSubtitle>
          <EventDetails
            date="MAR 25 6 PM EST"
            description={<>Managing Director @ <Link href="https://obvious.com/team/andrew-beebe/">Obvious Ventures</Link> </>}
            image={AndrewBeebe}/>
        </EventGroup>

        <EventGroup>
          <EventTitle>Workshop Your Proposal</EventTitle>

          <EventSubtitle>Pitching 101</EventSubtitle>
          <EventDetails
            date="APR 5 7 PM EST"
            description={<>Shuo Yang @ <Link href="https://fiftyyears.com/team/shuo-yang/">Fifty Years</Link></>}
            image={ShuoYang}/>
          <EventSubtitle>Pitch Office Hours</EventSubtitle>
          <EventDetails
            description="Sign up for mentor office hours."
            buttonText="Link will be available on 3/26"/>
        </EventGroup>

        <EventGroup>
            <EventTitle>Attend a State-of-the-Field Panel</EventTitle>
            <Text>Discussions about current research, innovations, and challenges with leading experts in the fields.</Text>

            <EventSubtitle fontSize="0.6rem">Waste & Circularity</EventSubtitle>
            <Text>Details coming soon</Text>

            <EventSubtitle>Energy & Transportation</EventSubtitle>
            <Text>Details coming soon</Text>

            <EventSubtitle>Food & Agriculture</EventSubtitle>
            <EventDetails
                date="APR 6 7 PM EST"
                description={<>
                  Dr. David Galligan @ <Link href="https://www.vet.upenn.edu/people/faculty-clinician-search/davidgalligan" target="_blank" rel="noreferrer noopener">Penn Vet</Link>
                  <br/>
                  Dr. Linda Baker @ <Link href="https://www.vet.upenn.edu/people/faculty-clinician-search/LINDABAKER" target="_blank" rel="noreferrer noopener">Penn Vet</Link>
                  <br/>
                  Kyle Welborn @ <Link href="https://cultivationcapital.com/team/kyle-welborn/" target="_blank" rel="noreferrer noopener">The Yield Lab</Link>
                  <br/>
                  Luis Garcia @ <Link href="https://cultiviansbx.com/news-and-events/about/meet-the-team/luis-garcia/" target="_blank" rel="noreferrer noopener">Cultivian Sandbox</Link>
                </>}/>
            <Button href="">Link will be available on 3/26</Button>
        </EventGroup>

        <RoundedRectangle>
            <Text fontSize="2rem" roboto bold>First Round Judging <br/> Due 4/15 at 11:59 PM EST</Text><br/>
        </RoundedRectangle>
    </div>
)


const Finals = () => (
    <RoundedRectangle>
        <Text fontSize="2rem" roboto bold>Live Finals, 4/16 at 1 PM EST</Text>
    </RoundedRectangle>
)


const Schedule = () => (
    <>
      <SEO title="Schedule" defer={false} />
      <Navbar />
        <div css={`padding: 90px 12vw;`}>
            <Title css={`margin-bottom: 15px`}>PCV Prize 2022 Schedule</Title>
            <Subtitle>March 25 — April 16</Subtitle>
            <Timeline />
            <Finals />
        </div>
        <Footer />
    </>
)

export default Schedule
