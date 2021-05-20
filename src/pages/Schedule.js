import React from "react"
import s from "styled-components"
import { Title, Text, Subtitle, Link } from "../components/shared/Typography"
import Button from '../components/shared/Button'
import {GREEN} from "../utils/constants.js"
import Dennis from '../images/dennis woodside.jpg'
import Lidiya from '../images/lidiya-dervisheva.jpeg'
import Seth from '../images/seth.jpg'
import Marissa from '../images/marisa sweeney.jpg'
import Sam from '../images/sam bursten.jpeg'

const Headshot = s.img`
    width: 13vw;
    height: 13vw;
    object-fit: cover;
    border-radius: 50%;
    margin: 1vw;
`

const Columns = s.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 2vw;
`
const Caption = s.figcaption`
    font-family: roboto;
    font-weight: bold;
    font-size: 20px;
`

const EventGroup = s.div`
    margin: 2vw 0;
`

const EventNoDate = s.div`
    border-left: 0.3rem solid ${GREEN};
    padding: 0vw 1vw 0vw;
    margin: 1vw 2vw;
`

const EventWithDate = s.div`
    margin: 1vw 0;
`

const EventWithDateInfo = ({date, description, btext, blink}) => {
    // var day = /^\d{1,2}\/\d{1,2}/;
    var day = /\s\d{1,2}\s/;
    var month = /^\w{3}/;
    var time = /(\d{1,2}:\d{1,2}|\d{1,2})\sPM/;

    return (
        <div>
            <table css={`margin: 0.5vw 2vw;`}>
                <tbody>
                <tr css={`border-left: 0.3rem solid ${GREEN}`}>
                    <td css={`width: 7vw; padding-left: 1vw`}>
                        <div css={`text-align: center`}>
                            <Text fontSize="0.3rem" roboto bold>{date.match(month)}</Text>
                            <Text fontSize="1.5rem" roboto bold css={`line-height: 1`}>{date.match(day)}</Text>
                            <Text fontSize="0.3rem" roboto bold >{date.match(time)[0]}</Text>
                            <Text roboto bold css={`line-height: 0.8`}>EST</Text>
                        </div>
                    </td>
                    <td css={`padding-left: 1vw`}>
                        <EventDescription description={description}/>
                        {btext && <div><br/><Button href={blink}>{btext}</Button></div>}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

const EventDescription = (props) => {
    var linkRegex = /https?:\/\/.*$/;

    return(
        <Text css={`white-space:pre-line`}>
            {(props.description).map((str, i) => {
                const isLink = linkRegex.test(str);

                if (isLink) {
                    const link = str.match(linkRegex);
                    const linkIdx = str.indexOf(link);
                    const linkName = str.substring(0, (linkIdx));                    
                    return (<Link key={i} href={link}>&nbsp;{linkName}</Link>)                         
                } else {
                    return (<span key={i}>{str}</span>)                   
                }
            })}
        </Text>
    )
}

const Timeline = () => {
    return (
        <div>
            <EventGroup>
                <Subtitle fontColor={GREEN}>Registration</Subtitle>
                <Subtitle fontSize="0.6rem">Check Your Eligibility</Subtitle>
                <EventNoDate>
                    <Text>All students enrolled at any institution around the world are invited to 
                        compete in the PCV Prize.<br/>
                        Teams of up to 5 will pitch their early stage climate startup concepts to 
                        industry leaders and venture capitalists.<br/>
    ​                    Team eligibility varies by competition track. <br/>
                    ​</Text>
                    <Button>Official Rules</Button><br/>
                </EventNoDate>
                <Subtitle fontSize="0.6rem">Pick a Track</Subtitle>
                <EventNoDate>
                    <Text><b>Collegiate Tracks</b><br/>
                            1. Waste & Circularity <br/>
                            2. Energy & Transportation​ <br/>
                            3. Food & Agriculture <br/>
                            4. Wildcard <br/>
                            ​<br/> 
                            <b>High School Tracks</b><br/>
                            1. Spark Teen High School Track <br/></Text><br/>
                    <Button>Find Your Track</Button><br/>
                </EventNoDate>
                <EventWithDate>
                <Subtitle fontSize="0.6rem">Individual Registration</Subtitle>
                <EventWithDateInfo date="MAR 29 11:59 PM EST"
                                description={['Register individually and start building your team through our online PCV Prize Discord community and stay up to date with our latest news.']}
                                btext="Register Now!"
                                blink="https://tinyurl.com/PCVPrizeS21"/> 
                </EventWithDate>
                <EventWithDate>
                <Subtitle fontSize="0.6rem">Team Registration</Subtitle>
                    <EventWithDateInfo date="APR 5 11:59 PM EST"
                                        description={['Teams will need to fully register by the deadline to qualify for the competition. Teams will need to choose a track in which to complete. Full rules can be found', 
                                                        'here https://www.prize.pennclimateventures.org/official-rules', '.']}
                                        btext="Team Registration"
                                        blink="https://tinyurl.com/PCVPrizeTeamRegistration"/>
                </EventWithDate>
            </EventGroup>
            <EventGroup>
                <Subtitle fontColor={GREEN}>Attend a State-of-the-Field Panel</Subtitle>
                <Text>Discussions about current research, innovations, and challenges with leading experts in the fields.</Text>
                <EventWithDate> 
                    <Subtitle fontSize="0.6rem">Waste & Circularity</Subtitle>
                    <Text fontSize="0.2rem">Co-sponsored by 
                    <Link href="https://www.sustainability.upenn.edu/partners/student-groups"> Penn SSAP</Link></Text>                
                    <EventWithDateInfo date="MAR 30 8 PM EST"
                                    description={['Dr. Jim Hagan @' ,'Penn LPS https://earth.sas.upenn.edu/people/james-hagan', 
                                                    '\n Shuo Yang @', 'Fifty Years https://fiftyyears.com/team/shuo-yang', 
                                                    '\n with Caitlyn McCloskey from PEG as moderator']}/>
                </EventWithDate>

                <EventWithDate>
                    <Subtitle fontSize="0.6rem">Energy & Transportation</Subtitle>
                    <Text fontSize="0.2rem">Co-sponsored by the
                    <Link href="http://pennenvironmentalgroup.weebly.com/"> Penn Environmental Group</Link></Text>                
                    <EventWithDateInfo date="APR 1 5 PM EST"
                                    description={['Dr. Arthur van Benthem @' ,'Wharton http://www.arthurvanbenthem.com/', 
                                                    '\n Dr. Peter Psarras @', 'Penn Carbon Capture https://kleinmanenergy.upenn.edu/news-insights/penn-carbon-capture-expert-joins-biden-administration/', 
                                                    '\n Ally Warson @', 'UP Partners https://www.up.partners/ally-warson', 
                                                    '\n E. Mitchell Swaan @', 'PEA https://philaenergy.org/about-pea/board-and-staff/e-mitchell-swann-secretary/',
                                                    '\n with Ben May from', 'ThinkOcean https://thinkoceanglobal.org/ben-may' ,'as moderator']}/>
                </EventWithDate>

                <EventWithDate>
                    <Subtitle fontSize="0.6rem">Food & Agriculture</Subtitle>
                    <Text fontSize="0.2rem">Co-sponsored by the
                    <Link href="https://www.agribusiness-club.com/"> Wharton AgriBusiness Club</Link></Text>                
                    <EventWithDateInfo date="APR 2 4 PM EST"
                                    description={['Dr. Zhengxia Dou @' ,'Penn Vet https://www.vet.upenn.edu/research/centers-laboratories/research-laboratory/research-laboratory/dou-laboratory', 
                                                    '\n Dr. David Galligan @', 'Penn Vet https://www.vet.upenn.edu/people/faculty-clinician-search/davidgalligan', 
                                                    '\n Alex Behar @', 'Cultivian Sandbox https://cultiviansbx.com/news-and-events/about/meet-the-team/alex-behar/', 
                                                    '\n with Akaash Padmanabha from Penn Dining Advisory as moderator']}/>
                </EventWithDate>
                <br/>
                <Button href="https://tinyurl.com/PCVPrizeS21">Get the Link</Button>
            </EventGroup>

            <EventGroup>
                <Subtitle fontColor={GREEN}>PCV Prize Launch Event</Subtitle>
                <Text>You will be briefed on prize details, hear from Dr. Majumdar, and get a chance to network with peers.</Text>
                <EventWithDate>
                    <Subtitle fontSize="0.6rem">Opening Keynote with Dr. Arun Majumdar</Subtitle>
                    <EventWithDateInfo date="APR 3 1 PM EST"
                                        description={['Founding Director @', 'ARPA-E https://arpa-e.energy.gov/',
                                                    '\n Former VP, Energy @', 'Google https://google.com/',
                                                    '\n Co-Director, Precourt Institute for Energy @', 'Stanford https://energy.stanford.edu/']}/>
                </EventWithDate>
                <EventWithDate>
                    <Subtitle fontSize="0.6rem">Find a Team</Subtitle>
                    <EventWithDateInfo date="APR 3 2 PM EST"
                                        description={['Speed-dating, but for climate co-founders.']}/>
                </EventWithDate>
            </EventGroup>

            <EventGroup>
                <Subtitle fontColor={GREEN}>Workshop Your Proposal</Subtitle>
                <EventWithDate>
                    <Subtitle fontSize="0.6rem">VC Panel: Investing, Due Diligence, and Strategic Partnerships</Subtitle>
                    <Text>Co-sponsored by <Link href="https://collegiate.vc/penn">Penn Undergraduate Capital Partners</Link></Text>
                    <EventWithDateInfo date="APR 13 5 PM EST"
                                        description={['Kimberly Zou @', 'Energy Impact Partners https://www.linkedin.com/in/kimberly-zou/',
                                                        '\n Ry Storey-Fisher @', 'Powerhouse Fund https://www.linkedin.com/in/ry-storey-fisher/',
                                                        '\n Franz Hochstrasser @', 'Raise Green https://www.raisegreen.com/']}/>
                </EventWithDate>
                <Subtitle fontSize="0.6rem">Pitch Office Hours</Subtitle>
                <EventNoDate>
                    <Text>Sign up for mentor office hours.</Text><br/>
                    <Button>Sign Up Here</Button>
                </EventNoDate>
            </EventGroup>

            <div css={`text-align: center;
                        border-style: solid;
                        border-radius: 40px;
                        width: 70vw;
                        padding: 3vw;
                        display: block;
                        margin: 4vw auto 0`}>
                <Text fontSize="2rem" roboto bold>First Round Judging <br/> Due 4/16 at 11:59 PM EST</Text><br/>
                <Button href="https://tinyurl.com/PCVPrizeSubmission">Submit Your Decks!</Button>
            </div>
        </div>
    )
}

const Finals = () => {
    return (
        <div css={`text-align: center;
                   border-style: solid;
                   border-radius: 40px;
                   width: 70vw;
                   padding: 3vw;
                   display: block;
                   margin: 4vw auto`}>
            <Text fontSize="2rem" roboto bold>Live Finals <br/> 4/24 at 12 PM EST <br/> with keynote from</Text>
            <div css={`display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 2vw;`}>
                <Headshot src={Dennis} alt="Dennis Woodside"/>
                <Caption css={`text-align: left`}>
                    <b>Dennis Woodside</b>
                    <br/>
                    <Text>President of Impossible Foods</Text>
                </Caption>
            </div>

            <Text fontSize="2rem" roboto bold>and judging by</Text>

            <Columns>
                <figure>
                    <Headshot src={Lidiya} alt="Lidiya Dervisheva"/>
                    <Caption>
                        <b>Lidiya Dervisheva</b>
                        <br/>
                        <Text>Partner <br/> @ Next47</Text>
                    </Caption>
                </figure>
                <figure>
                    <Headshot src={Seth} alt="Seth Bannon"/>
                    <Caption>
                        <b>Seth Bannon</b>
                        <br/>
                        <Text>Founding Partner <br/>@ Fifty Years</Text>
                    </Caption>
                </figure>
                <figure>
                    <Headshot src={Marissa} alt="Marisa Sweeney"/>
                    <Caption>
                        <b>Marisa Sweeney</b>
                        <br/>
                        <Text>Director <br/>@ Generate Capital</Text>
                    </Caption>
                </figure>
                <figure>
                    <Headshot src={Sam} alt="Sam Bursten"/>
                    <Caption>
                        <b>Sam Bursten</b>
                        <br/>
                        <Text>Vice President <br/>@ Energy Impact Partners</Text>
                    </Caption>
                </figure>
            </Columns>
        </div>
    )
}

const Schedule = () => {
    return (
        <div css={`padding: 8vw 16vw;`}>
            <Title>PCV Prize Schedule</Title>
            <Timeline />
            <Finals />
        </div>
    )
}

export default Schedule