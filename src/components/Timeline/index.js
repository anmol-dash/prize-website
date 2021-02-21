import React from "react"
import s from "styled-components"
import { Title, Text, Subtitle, SubText } from "../Typography"

const TimelineTitle = s(Subtitle)`
    margin-bottom: 1.5vw;
`

const TimelineColumns = s.div.attrs(() => ({
    className: "columns"
}))`
:before {
    content: '';
    position: absolute;
    top: -.1rem;
    width: 6%;
    left: 47%;
    border-bottom: .3rem solid white;
}
`

const TimelineCol = s.div.attrs(() => ({
    className: 'column'
}))`
    padding: 0
`

const TimelineLeftCol = s(TimelineCol)`
    border-right: .2rem solid white;
`

const TimelineRightCol = s(TimelineCol)`
    border-left: .2rem solid white;
`

const TimelineSpacer = s.div`
    height: ${({ height }) => height || `2vw`};
`

const TimelineHeaderWrapper = s.div`
    display: flex;
    margin: -.1rem;
    width: 101%;
`

const TimelineHeaderLine = s.hr`
    flex: 1;
    height: .3rem;
    ${({ right }) => right ? "margin-right" : "margin-left"}: 4rem;
`

const TimelineButton = ({ children, right }) => (
    <button css={`
        background-color: transparent;
        border: .2rem solid white;
        outline: none;
        float: ${right ? "right" : "left"};
        padding: 1rem 3rem 1rem 3rem;
        color: white;
        cursor: pointer;
        border-radius: 999px;
    `}>
        <Text>
            {children}
        </Text>
    </button>
)


const TimelineHeader = ({ children, right = false, title = false }) => {
    const TimelineHeaderTitle = title ? Title : Subtitle
    return <TimelineHeaderWrapper>
        {right && <TimelineHeaderLine right />}
        <TimelineHeaderTitle>{children}</TimelineHeaderTitle>
        {!right && <TimelineHeaderLine left />}
    </TimelineHeaderWrapper>
}


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
            <TimelineColumns>
                <TimelineLeftCol>
                    <TimelineSpacer height="2vw" />
                    <TimelineHeader>
                        Eligibility
                    </TimelineHeader>
                    <TimelineCenteredText>
                        Teams must include at least one current Penn student.
                        <br />
                        Teams must present a pre-revenue actionable solution that addresses climate change.
                    </TimelineCenteredText>
                    <br />
                    <TimelineButton>Full rules here</TimelineButton>
                    <TimelineSpacer height="10vw" />

                    <TimelineHeader>
                        Attend a
                    </TimelineHeader>
                    <Subtitle css={`float: left;`}>State-of-the-Field Panel</Subtitle>

                    <TimelineSpacer height="10vw" />
                    <TimelineHeader>
                        Workshop
                    </TimelineHeader>
                    <Subtitle css={`float: left;`}>your proposal</Subtitle>
                </TimelineLeftCol>
                <TimelineRightCol>
                    <TimelineSpacer height="5vw" />
                    <TimelineHeader right>
                        Join our ListServ
                    </TimelineHeader>
                    <TimelineCenteredText>
                        Teams must include at least one current Penn student.
                        <br />
                        Teams must present a pre-revenue actionable solution that addresses climate change.
                    </TimelineCenteredText>
                    <br />
                    <TimelineButton right>Sign up here</TimelineButton>

                    <TimelineSpacer height="5vw" />

                    <TimelineHeader right>
                        Meet Others!
                    </TimelineHeader>
                    <TimelineCenteredText>
                        <Text as="a" href="idk man">Discord</Text>
                        <br />
                        Discord is a place and maybe you could join it. Just kidding, unless...
                    </TimelineCenteredText>
                    <TimelineCenteredText>
                        <Text as="h1">Team-Formation Speed Dating</Text>
                        Like the Stanford marriage pact, but for cofounders, and way less awkward.
                    </TimelineCenteredText>

                    <TimelineSpacer height="5vw" />

                    <TimelineHeader right>
                        Register Your Team
                    </TimelineHeader>
                    <TimelineCenteredText>
                        Like doing your taxes except less painful and you don't get a tax return.
                        So actually, nothing like doing your taxes.
                        <br />
                        <br />
                        <TimelineButton>
                            Register here
                        </TimelineButton>
                    </TimelineCenteredText>

                    <TimelineSpacer height="5vw" />

                    <TimelineHeader right>
                        Meet PCV's Team
                    </TimelineHeader>
                    <TimelineCenteredText>
                        Some of the coolest people you'll ever meet.
                        No joke. Okay, maybe partial joke. But still
                        pretty cool. Pull up!
                    </TimelineCenteredText>
                    <TimelineButton right>
                        RSVP here
                    </TimelineButton>

                    <TimelineSpacer height="10vw" />

                    <TimelineHeader right>
                        Submit Your Decks!
                    </TimelineHeader>
                    <br />
                    <TimelineButton right>
                        SUBMIT here
                    </TimelineButton>
                </TimelineRightCol>
            </TimelineColumns>
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
