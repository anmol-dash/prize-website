import React from "react"
import s from "styled-components"
import {Text, Subtitle, Title, Link} from "./shared/Typography"
import {GREEN} from "../utils/constants";

const TimelineWrapper = s.div`
  border-left: 5px solid ${GREEN};
  padding: 10px 0px 10px 30px;
`

const Event = s.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin: 15px auto;
`

const Date = s(Text)`
    font-weight: bold;
    font-size: 1.6rem;
`

const EventDescription = s(Text)`
    font-size: 1.6rem;
    line-height: 1.2;
`

export const MiniSchedule = () => (
  <div css={` width: 70vw;
              padding: 3vw;
              display: block;
              margin: 1vw auto`}>
    <Subtitle>Timeline</Subtitle>

    <br/><br/>
    <Text>
      Individual Registration Open at {' '}
      <Link href="https://tinyurl.com/PCV22Signup" target="blank" rel="noreferrer noopener">
        tinyurl.com/PCV22Signup
      </Link>!
    </Text>
    <br/><br/>
    <Text>
      Team Registration Open at {' '}
      <Link href="https://tinyurl.com/PCV22team" target="blank" rel="noreferrer noopener">
        tinyurl.com/PCV22team
      </Link>!
    </Text>
    <br/><br/>

    <TimelineWrapper>
      <Event>
        <Date>3/26</Date>
        <EventDescription>
          Launch event: Opening keynote + Team Formation
        </EventDescription>
      </Event>
      <Event>
        <Date>3/28</Date>
        <EventDescription>
          Team Registration Due @ 11:59 PM EST
        </EventDescription>
      </Event>
    </TimelineWrapper>

      <br/><br/>
      <Text>
        Throughout the week: Panels & Mentorship Office Hours
      </Text>
      <br/><br/>

    <TimelineWrapper>
      <Event>
        <Date>4/03</Date>
        <EventDescription>
          First Round Judging Due for High School Track Due @ 11:59 PM ET
        </EventDescription>
      </Event>
      <Event>
        <Date>4/08</Date>
        <EventDescription>
          First Round Judging Due for Themed Track  Due @ 11:59 PM ET
        </EventDescription>
      </Event>
      <Event>
        <Date>4/09</Date>
        <EventDescription>
          Second Round Judging Due for High School Track
        </EventDescription>
      </Event>
      <Event>
        <Date>4/16</Date>
        <EventDescription>
          Closing keynote + final live pitch event
        </EventDescription>
      </Event>

    </TimelineWrapper>
  </div>
)

