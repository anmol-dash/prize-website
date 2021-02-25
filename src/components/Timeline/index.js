import React from "react"
import s from "styled-components"

import { Text, Subtitle, SubText } from "../shared/Typography"
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

const TimelineLayout = ({ className }) => (
    <div className={`container has-text-centered ${className}`}>
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
                        href="###"
                    >Full rules here</Button>
                    <Spacer height="10vw" />

                    <Header>
                        Attend a
                    </Header>
                    <Subtitle css={`float: left;`}>State-of-the-Field Panel</Subtitle>

                    <Spacer height="10vw" />
                    <Header>
                        Workshop
                    </Header>
                    <Subtitle css={`float: left;`}>your proposal</Subtitle>
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

                    <Spacer height="5vw" />

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

                    <Spacer height="5vw" />

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

                    <Spacer height="5vw" />

                    <Header right>
                        Meet PCV's Team
                    </Header>
                    <TimelineCenteredText>
                        Some of the coolest people you'll ever meet.
                        No joke. Okay, maybe partial joke. But still
                        pretty cool. Pull up!
                    </TimelineCenteredText>
                    <Button right>
                        RSVP here
                    </Button>

                    <Spacer height="10vw" />

                    <Header right>
                        Submit Your Decks!
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
        <Subtitle className="has-text-left" css={`padding-right: 50%; margin-top: -5vw`}>
            Live Finals,
            4/24 at TIME EST.
            See you there! :)
        </Subtitle>
    </div>
)

export const Timeline = s(TimelineLayout)`
    margin-top: 5vw;
`
