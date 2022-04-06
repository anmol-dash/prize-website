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
import PoojaTilvawala from "../images/2022/Pooja_Tilvawala.jpg"
import ElaineHsieh from "../images/2022/ElaineHsieh.jpg"

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
      <div css={`border-left: 0.3rem solid ${GREEN};
          margin: 15px 15px 30px 15px;
        `}>
        <div
            css={`display: flex;
                  flex-wrap: wrap;
                  flex-direction: row;
                  `}>
            {date && (isDesktop ? (
                <div css={`flex-basis: 120px; padding-left: 5px; text-align: center; display: flex; justify-content: center; align-content: center; flex-direction: column; margin: auto 0;`}>
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
            </div>
          </div>
          <div css={`padding-left: 20px`}>
            <Text>{description}</Text>
            {buttonText && <Button href={buttonLink} target="_blank" rel="noopener noreferrer">{buttonText}</Button>}
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
            <EventSubtitle>Pitch Office Hours</EventSubtitle>
            <EventDetails
              description="Mentor Office Hours"
              buttonText="Sign up here!"
              buttonLink="https://docs.google.com/spreadsheets/d/1Hd1noFthtg_Z1auz-mmUXKaOKLqX9tIHdj1OejQc3UQ/edit#gid=0"
            />
        </EventGroup>
        
        <EventGroup>
          <EventTitle> PCV Prize Launch Event </EventTitle>
          <EventSubtitle>Opening Keynote with Andrew Beebe</EventSubtitle>
          <EventDetails
            date="MAR 25 6 PM EST"
            description={<>Managing Director @ <Link href="https://obvious.com/team/andrew-beebe/">Obvious Ventures</Link> </>}
            image={AndrewBeebe}
          />
        </EventGroup>

        <EventGroup>
          <EventTitle>PCV Prize Schedule</EventTitle>
          <RoundedRectangle>
            <Text fontSize="2rem" roboto bold>First Round Judging for High School Track<br/> Due 4/03 at 11:59 PM EST</Text><br/>
          </RoundedRectangle>
          <EventSubtitle>Energy & Transportation</EventSubtitle>
          <EventDetails
            date="APR 4 7 PM EST"
            description={<>
              Come learn about sustainable investing in the energy and transportation sectors from three venture capitalists leading the charge in the sustainability revolution!
              <br/>
              <ul>
                <li>Marisa Sweeney @ <Link href="https://generatecapital.com/" target="_blank" rel="noreferrer noopener">Generate Capital</Link></li>
                <li>Ally Warson @ <Link href="https://up.partners/thecrew/" target="_blank" rel="noreferrer noopener">Up Partners</Link></li>
                <li>Logan Grizzel @ <Link href="https://blackhornvc.com/team/logan-grizzel/" target="_blank" rel="noreferrer noopener">Blackhorn Ventures</Link></li>
                <li>Moderator by Stephen Sammut @ <Link href="https://executiveeducation.wharton.upenn.edu/faculty/stephen-sammut/" target="_blank" rel="noreferrer noopener">Wharton</Link></li>
              </ul>
            </>}
            buttonText="Register here!"
            buttonLink="https://upenn.zoom.us/meeting/register/tJwucOmtpjwjGNACd_JSUWiltQOgw5ZH2zPq"
          />

          <EventSubtitle>Partnerships for Social Impact</EventSubtitle>
          <EventDetails
            date="APR 5 6 PM EST"
            description={<>
              Come to learn about community mapping, how to build trust with the community you wish to serve, how to make use of existing work relevant to your project, how to leverage partnerships and foster meaningful collaboration and how to involve beneficiaries throughout your processes.
              <br/>
              <ul>
                <li>Pooja Tilvawala @ <Link href="https://youthcc.org/" target="_blank" rel="noreferrer noopener">Youth Climate Collaborative</Link></li>
              </ul>
            </>}
            image={PoojaTilvawala}
            buttonText="Register here"
            buttonLink="https://upenn.zoom.us/meeting/register/tJYtcuCprD0rGd0uc6DxL_LdJpBWGdnm8bbo"
          />

          <EventSubtitle>Pitching 101</EventSubtitle>
          <EventDetails
            date="APR 5 7 PM EST"
            description={<>Shuo Yang @ <Link href="https://fiftyyears.com/team/shuo-yang/" target="_blank" rel="noreferrer noopener">Fifty Years</Link></>}
            image={ShuoYang}
            buttonText="Register here"
            buttonLink="https://upenn.zoom.us/meeting/register/tJwoc-6prTkqHt18KiW_-v01UyMMZFD7i9aS"
          />      

          <EventSubtitle>Waste & Circularity</EventSubtitle>
          <EventDetails
            date="APR 6 6 PM EST"
            description={<>
              Co-hosted by Desiree Izecksohn from Penn Sustainability Consulting
              <br/>
              Come to our waste and circularity panel and learn more about the overlap between businesses and sustainability– featuring specialized guest speakers striving to make an environmental impact.
              <br/>
              <ul>
                <li>Thomas Kinnaman @ <Link href="https://www.bucknell.edu/fac-staff/thomas-kinnaman" target="_blank" rel="noreferrer noopener">Bucknell</Link></li>
                <li>Vasiliki Papanikolopoulos @ <Link href="" target="_blank" rel="noreferrer noopener">Coinmatan</Link></li>
                <li>Evan Ehlers @ <Link href="" target="_blank" rel="noreferrer noopener">SharingExcess</Link></li>
                <li>Komal Sinha @ <Link href="" target="_blank" rel="noreferrer noopener">RePurpose</Link></li>
              </ul>
            </>}
            buttonText="Register here"
            buttonLink="https://upenn.zoom.us/meeting/register/tJ0kf--sqT0sH9ekJSE78W3mlDyP8eRgI4rg"
          />

          <EventSubtitle>Food & Agriculture</EventSubtitle>
          <EventDetails
            date="APR 6 7 PM EST"
            description={<>
              Tune in to hear about the future of sustainable Agriculture Tech and more! Featuring PennVet researchers and leading AgTech investors from Yield Lab and Cultivian Sandbox.
              <br/>
              <ul>
                <li>Dr. David Galligan @ <Link href="https://www.vet.upenn.edu/people/faculty-clinician-search/davidgalligan" target="_blank" rel="noreferrer noopener">Penn Vet</Link></li>
                <li>Dr. Linda Baker @ <Link href="https://www.vet.upenn.edu/people/faculty-clinician-search/LINDABAKER" target="_blank" rel="noreferrer noopener">Penn Vet</Link></li>
                <li>Kyle Welborn @ <Link href="https://cultivationcapital.com/team/kyle-welborn/" target="_blank" rel="noreferrer noopener">The Yield Lab</Link></li>
                <li>Luis Garcia @ <Link href="https://cultiviansbx.com/news-and-events/about/meet-the-team/luis-garcia/" target="_blank" rel="noreferrer noopener">Sandbox Sustainability Ventures</Link></li>
              </ul>
            </>}
            buttonText="Register here"
            buttonLink="https://upenn.zoom.us/meeting/register/tJckcemrrjssHdYHWZ4khSiNeIwRarC-OmGe"
          />
          <RoundedRectangle>
            <Text fontSize="2rem" roboto bold>First Round Judging for Themed Tracks <br/> Due 4/08 at 11:59 PM EST</Text><br/>
          </RoundedRectangle>
          <RoundedRectangle>
              <Text fontSize="2rem" roboto bold>Second Round Judging for High School Track <br/> Due 4/09 at 11:59 PM EST</Text><br/>
          </RoundedRectangle>
        </EventGroup>
        
        <EventGroup>
          <EventTitle> PCV Prize Final Live Pitch Event </EventTitle>
          <EventSubtitle> Closing Keynote with Elaine Hsieh </EventSubtitle>
          <EventDetails
            date="APR 16 1 PM EST"
            description={<>Co-Founder and Chief Marketing Officer @ <Link href="https://www.third-derivative.org/">Third Derivative</Link> </>}
            image={ElaineHsieh}
          />
        </EventGroup>
    </div>
)

const Schedule = () => (
    <>
      <SEO title="Schedule" defer={false} />
      <Navbar />
        <div css={`padding: 90px 12vw;`}>
            <Title css={`margin-bottom: 15px`}>PCV Prize 2022 Schedule</Title>
            <Subtitle>March 25 — April 16</Subtitle>
            <Timeline />
        </div>
        <Footer />
    </>
)

export default Schedule
