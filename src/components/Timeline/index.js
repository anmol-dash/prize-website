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
                        Teams must include at least one current Penn student.
                        <br />
                        Teams must present a pre-revenue actionable solution that addresses climate change.
                    </TimelineCenteredText>
                    <br />
                    <Button
                        target="_blank"
                        rel="noreferrer noopener"
                        href="/faq"
                    >Rules and FAQs</Button>
                    <Spacer height="10vw" />

                    <Header>
                        Attend a
                    </Header>
                    <Subtitle roboto css={`text-align: left; width: 100%;`}>State-of-the-Field Panel</Subtitle>
                    <Spacer height="2vw" />
                    <Event date={"DATE\nTIME\nEST\n"} right>
                        <Text>Product Development</Text>
                        <SubText>Description of the speaker event/who will be there</SubText>
                    </Event>
                    <Spacer height="2vw" />
                    <Event date={"DATE\nTIME\nEST\n"} right>
                        <Text>Product Development</Text>
                        <SubText>Description of the speaker event/who will be there</SubText>
                    </Event>
                    <Spacer height="2vw" />
                    <Event date={"DATE\nTIME\nEST\n"} right>
                        <Text>Product Development</Text>
                        <SubText>Description of the speaker event/who will be there</SubText>
                    </Event>

                    <Spacer height="5vw" />
                    <Header>
                        Workshop
                    </Header>
                    <Subtitle roboto css={`text-align: left; width: 100%;`}>your proposal</Subtitle>
                    <Spacer height="2vw" />
                    <Event date={"DATE\nTIME\nEST\n"} right>
                        <Text>Product Development</Text>
                        <SubText>Description of the speaker event/who will be there</SubText>
                    </Event>
                    <Spacer height="2vw" />
                    <Event date={"DATE\nTIME\nEST\n"} right>
                        <Text>Product Development</Text>
                        <SubText>Description of the speaker event/who will be there</SubText>
                    </Event>
                    <Spacer height="2vw" />
                    <Event date={"DATE\nTIME\nEST\n"} right>
                        <Text>Product Development</Text>
                        <SubText>Description of the speaker event/who will be there</SubText>
                    </Event>
                    <Spacer height="2vw" />
                    <Event date={"DATE\nTIME\nEST\n"} right>
                        <Text>Product Development</Text>
                        <SubText>Description of the speaker event/who will be there</SubText>
                    </Event>

                </Left>
                <Right>
                    <Spacer height="5vw" />
                    <Header right>
                        Register
                    </Header>
                    <TimelineCenteredText>
                        Teams must include at least one current Penn student.
                        <br />
                        Teams must present a pre-revenue actionable solution that addresses climate change.
                    </TimelineCenteredText>
                    <br />
                    <Button
                        right
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://tinyurl.com/PCVPrizeS21"
                    >
                        Sign up here
                    </Button>

                    <Spacer height="6vw" />

                    <Header right>
                        Meet Others!
                    </Header>
                    <TimelineCenteredText>
                        <Text as="a" href="idk man">Discord</Text>
                        <br />
                        Discord is a place and maybe you could join it. Just kidding, unless...
                    </TimelineCenteredText>
                    <TimelineCenteredText>
                        <Text as="h1">Team-Formation Speed Dating</Text>
                        Like the Stanford marriage pact, but for cofounders, and way less awkward.
                    </TimelineCenteredText>

                    <Spacer height="4vw" />

                    <a>
                        <Header right>
                            Opening Ceremony
                    </Header>
                        <Subtitle roboto className="has-text-right">
                            with Dr. Arun Majumdar
                    </Subtitle>
                    </a>
                    <Event date={"DATE\nTIME\nEST\n"} left>
                        <TimelineCenteredText>Very cool big clout climate VC dude that we use to attract other big clout people</TimelineCenteredText>
                    </Event>

                    <Spacer height="4vw" />
                    <Header right>
                        Register Your Team
                    </Header>
                    <TimelineCenteredText>
                        Like doing your taxes except less painful and you don't get a tax return.
                        So actually, nothing like doing your taxes.
                        <br />
                        <br />
                        <Button
                            right
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://tinyurl.com/PCVPrizeTeamRegistration"
                        >
                            Register here
                        </Button>
                    </TimelineCenteredText>

                    <Spacer height="4vw" />

                    <Header right>
                        Meet PCV's Team
                    </Header>
                    <Spacer height="2vw" />
                    <Event date={"DATE\nTIME\nEST\n"} left>
                        <TimelineCenteredText>
                            Some of the coolest people you'll ever meet.
                            No joke. Okay, maybe partial joke. But still
                            pretty cool. Pull up!
                        </TimelineCenteredText>                    </Event>
                    <Button right>
                        RSVP here
                    </Button>

                    <Spacer height="10vw" />

                    <Header right fontSize="6rem" maxWidth="70%">
                        Submit Your Decks! 4/17 11:59 PM
                    </Header>
                    <br />
                    <Button
                        right
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://tinyurl.com/PCVPrizeSubmission"
                    >
                        SUBMIT here
                    </Button>
                </Right>
            </Columns>
        </div>
        <Spacer height="10vw"/>
        <Title fontSize="6rem" className="has-text-left" css={`padding-right: 50%; margin-top: -5vw`}>
            Live Finals,
            4/24 at TIME EST.
            See you there! :)
        </Title>
    </div>
)

export const Timeline = s(TimelineLayout)`
    margin-top: 5vw;
`
