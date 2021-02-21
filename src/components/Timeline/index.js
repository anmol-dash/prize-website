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

import { MIDNIGHT_BLUE } from "../../utils/constants"

const TimelineTitle = s(Subtitle)`
    margin-bottom: 1.5vw;
`

const TimelineButton = ({ children, right }) => (
    <button css={`
        background-color: transparent;
        border: .2rem solid ${MIDNIGHT_BLUE};
        outline: none;
        float: ${right ? "right" : "left"};
        padding: 1rem 3rem 1rem 3rem;
        color: ${MIDNIGHT_BLUE};
        cursor: pointer;
        border-radius: 999px;
    `}>
        <Text>
            {children}
        </Text>
    </button>
)

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
                    <TimelineButton>Full rules here</TimelineButton>
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
                        Join our ListServ
                    </Header>
                    <TimelineCenteredText>
                        Teams must include at least one current Penn student.
                        <br />
                        Teams must present a pre-revenue actionable solution that addresses climate change.
                    </TimelineCenteredText>
                    <br />
                    <TimelineButton right>Sign up here</TimelineButton>

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
                        <TimelineButton>
                            Register here
                        </TimelineButton>
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
                    <TimelineButton right>
                        RSVP here
                    </TimelineButton>

                    <Spacer height="10vw" />

                    <Header right>
                        Submit Your Decks!
                    </Header>
                    <br />
                    <TimelineButton right>
                        SUBMIT here
                    </TimelineButton>
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
