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
              padding: 0 3vw;
              display: block;
              margin: 60px auto`}>
    <Subtitle>Timeline</Subtitle>

    <br/><br/>
    <Text>
      Team Registration Open at {' '}
      <Link href="https://tinyurl.com/PCV22team" target="blank" rel="noreferrer noopener">
        tinyurl.com/PCV22team
      </Link>!
    </Text>
    <Text>
      (Individual competitors must also register as a team)
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
        <Date style={{textDecoration: 'line-through'}}>3/28</Date>
        <EventDescription style={{textDecoration: 'line-through'}}>
          Team Registration Due @ 11:59 PM ET
        </EventDescription>
      </Event>
      <Event>
        <Date>4/03</Date>
        <EventDescription>
          Team Registration Due @ 11:59 PM ET (High School Track)
        </EventDescription>
      </Event>
      <Event>
        <Date>4/08</Date>
        <EventDescription>
          Team Registration Due @ 11:59 PM ET (Themed Track)
        </EventDescription>
      </Event>
    </TimelineWrapper>

      <br/><br/>
      <Text>Throughout the week: Panels & Mentorship Office Hours</Text>
      <Text>For more info, see the full <Link href="/schedule">schedule</Link></Text>
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
          First Round Judging for Themed Tracks Due @ 11:59 PM ET
        </EventDescription>
      </Event>
      <Event>
        <Date>4/09</Date>
        <EventDescription>
          Second Round Judging for High School Track Due @ 11:59 ET
        </EventDescription>
      </Event>
      <Event>
        <Date>4/16</Date>
        <EventDescription>
          <a target="_blank" rel="noopener noreferrer" href="https://upenn.zoom.us/j/94802997930">Closing Ceremony </a>
          @ 12:00 PM to 4:15 PM ET
        </EventDescription>
      </Event>

    </TimelineWrapper>
  </div>
)

