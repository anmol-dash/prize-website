import React from "react"
import s from "styled-components"

import { Title, Text, Subtitle, SubText } from "../shared/Typography"
import Button from "../shared/Button"

import {
    Columns,
    Left,
    Right,
    Spacer
} from "./Layout"
import Header from "./Header"

const TimelineTitle = s(Subtitle)`
    margin-bottom: 1.5vw;
`

const TimelineCenteredText = s(SubText).attrs(() => ({
    className: 'has-text-left'
}))`
    width: 90%;
    display: inline-block;
    padding: 2rem;
`

const Event = ({ right, date, children }) => {
    const Date = () => <div className="column is-3 has-text-left">
        <Subtitle fontSize="3.5rem" roboto css={`white-space: pre-line; padding: 0;`}>{date}</Subtitle>
    </div>
    return <div className="columns">
        {right && <Date />}
        <div className={`column is-9 ${right ? 'has-text-left': 'has-text-right'}`}>
            {children}
        </div>
        {!right && <Date />}
    </div>
}

const TimelineLayout = ({ className }) => (
    <div className={`container is-fluid has-text-centered ${className}`}>
        <TimelineTitle>Open to students globally.</TimelineTitle>
        <div css={`
            position: relative;
        `}>
            <Columns>
                <Left>
                    <Spacer height="2vw" />
                    <Header>
                        Eligibility
                    </Header>
                    <TimelineCenteredText>
                        All students are eligible.
                        <br />
                        Teams need at least one Penn student to compete in finals.
                    </TimelineCenteredText>
                    <br />
                    <Button
                        target="_blank"
                        rel="noreferrer noopener"
                        href="/faq"
                    >Rules and FAQs</Button>
                    <Spacer height="15vw" />
                    <Header>
                        Attend a
                    </Header>
                    <Subtitle roboto css={`text-align: left; width: 100%;`}>State-of-the-Field Panel</Subtitle>
                    <Spacer height="2vw" />
                    <Event date={"3/29\n\n\n"} right>
                        <Text>Energy and Transportation</Text>
                        <SubText>
                            <b>Dr. Arthur Van Benthem</b> @ Wharton <br></br>
                            <b>Dr. Lauren Hartle</b> @ <a href="https://www.primeimpactfund.com/">Prime Impact Fund</a>
                        </SubText>
                    </Event>
                    <Spacer height="2vw" />
                    <Event date={"3/30\n\n\n"} right>
                        <Text>Waste and Circularity</Text>
                        <SubText>
                            <b>Dr. Jim Hagan</b> @ Penn<br></br>
                            <b>Shuo Yang</b> @ <a href="https://fiftyyears.com/">Fifty Years</a>
                        </SubText>
                    </Event>
                    <Spacer height="2vw" />
                    <Event date={"4/2\n\n\n"} right>
                        <Text>Food and Agriculture</Text>
                        <SubText>
                            <b>Rob Trice</b> @ <a href="https://betterfoodventures.com/">Better Food Ventures</a>
                        </SubText>
                    </Event>

                    <Spacer height="5vw" />
                    <Header>
                        Workshop
                    </Header>
                    <Subtitle roboto css={`text-align: left; width: 100%;`}>your proposal</Subtitle>
                    <Spacer height="2vw" />
                    <Event date={"April\n\n\n"} right>
                        <Text>Product Development</Text>
                        <SubText>What does it mean to be feasible?</SubText>
                    </Event>
                    <Spacer height="2vw" />
                    <Event date={"April\n\n\n"} right>
                        <Text>Impact Analysis</Text>
                        <SubText>Can your solution can make a difference?</SubText>
                    </Event>
                    <Spacer height="2vw" />
                    <Event date={"April\n\n\n"} right>
                        <Text>Regulations</Text>
                        <SubText>How will policy affect your startup?</SubText>
                    </Event>
                    <Spacer height="2vw" />
                    <Event date={"April\n\n\n"} right>
                        <Text>What VCs Look For</Text>
                        <SubText>How can you secure funding?</SubText>
                    </Event>

                </Left>
                <Right>
                    <Spacer height="15vw" />
                    <Header right>
                        Register
                    </Header>
                    <TimelineCenteredText>
                        Stay updated on event details and the PCV Prize.
                        <br />
                    </TimelineCenteredText>
                    <br />
                    <Button
                        right
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://tinyurl.com/PCVPrizeS21"
                    >
                        Sign Up by 4/5
                    </Button>

                    <Spacer height="15vw" />

                    <Header right>
                        Meet Others!
                    </Header>
                    <TimelineCenteredText>
                        <Text>Discord</Text>
                        Register to start building your team through our online PCV Prize community.
                    </TimelineCenteredText>
                    
                    <Spacer height="4vw" />
                    
                    <Header right>
                        Opening Keynote
                    </Header>
                    <Subtitle roboto className="has-text-right">
                        w/ Dr. Arun Majumdar
                    </Subtitle>
                    
                    <Event date={"4/3\n1 PM\n EST\n"} left>
                        <TimelineCenteredText>
                            Founding Director @ <a href="https://arpa-e.energy.gov/"> ARPA-E </a>
                            <br />
                            Climate, innovation, and our future.
                        </TimelineCenteredText>
                    </Event>

                    <Event date={"4/3\n2 PM\n EST\n"} left>
                        <TimelineCenteredText>
                            <Text as="h1">Find a Team</Text>
                            Speed-dating, but for climate co-founders.
                        </TimelineCenteredText>
                    </Event>
                    

                    <Spacer height="4vw" />
                    <Header right>
                        Register Your Team
                    </Header>
                    <TimelineCenteredText>
                        Full team eligbility rules <a href="/faq">here</a>
                        <br />
                        <br />
                        <Button
                            right
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://tinyurl.com/PCVPrizeTeamRegistration"
                        >
                            Submit by 4/5
                        </Button>
                    </TimelineCenteredText>

                    <Spacer height="4vw" />

                    <Header right>
                        From PCV
                    </Header>
                    <Spacer height="2vw" />
                    <Event date={"April\n\n\n"} left>
                        <Text>Pitch Office Hours</Text>
                        <TimelineCenteredText>
                            Perfect your pitches. By appointment.
                            <br />
                        </TimelineCenteredText>                    
                    </Event>

                    <Event date={"April\n\n\n"} left>
                        <Text>What comes next?</Text>
                        <TimelineCenteredText>
                            Climate founder AMAs.
                        </TimelineCenteredText>                    
                    </Event>

                    <Spacer height="5vw" />

                    <Header right fontSize="6rem" maxWidth="80%">
                        Submit Your Decks! 4/16
                        <br />
                        11:59 PM
                    </Header>
                </Right>
            </Columns>
        </div>
        <TimelineTitle>
            <Button
                right
                css={`margin-right: 35%; margin-top: 1vw`}
                target="_blank"
                rel="noreferrer noopener"
                href="https://tinyurl.com/PCVPrizeSubmission"
            >
                Submit Here
            </Button>
        </TimelineTitle>
        <Spacer height="10vw"/>
        <Title fontSize="6rem" className="has-text-left" css={`padding-right: 30%; margin-top: 3vw`}>
            Live Finals,
            4/24 at 12 PM EST.
            See you there!
        </Title>
    </div>
)

export const Timeline = s(TimelineLayout)`
    margin-top: 5vw;
`
