import React from "react"
import s from "styled-components"
import { Title, Subtitle, Text, Link } from "./shared/Typography"
import { mediaMaxWidth, STEEL_BLUE } from "../utils/constants"
import Button from "../components/shared/Button"

const LevelItem = s.div.attrs(() => ({
  className: "level-item has-text-centered"
}))`
  flex-direction: column;
  width: 25vw;
  padding: 0 40px;

  ${mediaMaxWidth("900px")} {
    all: unset;
    width: 80%;
    padding: 20px 0;
    margin: 0 auto;
  }
`

const Level = s.div`
  margin: 2vw 6vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${mediaMaxWidth("900px")} {
    flex-direction: column;
  }
`

const WeekTitle = s(Subtitle)`
  color: ${STEEL_BLUE};
`

const WeekSubtitle = s(Subtitle)`
  font-size: 1.3rem;
  margin: 3vw 0 1vw;
`

const List = s.ul`
  font-family: avenir;
  font-size: 1.2rem;
  list-style-type: disc;
  text-align: left;
  margin-bottom: 1vw;
`

const Description = s.div`
  padding: 0 40px;
`

const WeekLayout = React.forwardRef(({ className }, ref) => (
  <div ref={ref} className={`container has-text-centered ${className}`}>
    <Description>
      <Subtitle fontSize="1.8rem" css="padding: 5px 0;">Dive into the most pressing environmental issues of today.</Subtitle>
      <Text fontSize="1.3rem" roboto bold>Kickstart a climate startup in three weeks, supported by a world-class network of mentors.</Text>
    </Description>

    <Level className="level">
      <LevelItem>
        <WeekTitle>Week 1</WeekTitle>
        <Text>Panels & Team 
          <br/>
          Formation
        </Text>
        <WeekSubtitle>Important Dates</WeekSubtitle>
        <List>
          <li>3/29: Regular Registration Deadline</li>
          <li>3/30 - 4/4: Panels & Team Formation</li>
          <li>4/5: Register Your Team</li>
          <li>4/6 - 4/15: Pitch Office Hours</li>
          <li>4/16: First Round Submissions</li>
          <li>4/24: Live Finals Pitches</li>
        </List>
        <Link fontSize="1.3rem" roboto bold href="/schedule">Full Event Schedule</Link>
      </LevelItem>

      <LevelItem>
      <WeekTitle>Week 2</WeekTitle>
        <Text>Workshop Your Proposal 
          <br/> 
          with Mentor Office Hours
        </Text>
        <WeekSubtitle>Eligibility</WeekSubtitle>
        <List>
          <li>All students enrolled at a university or high school in the world are eligible to compete in the collegiate tracks or high school track, respectively.</li>
          <li>Teams may have 1-5 members.</li>
        </List>
        <Link fontSize="1.3rem" roboto bold href="/rules">Official Rules</Link>
      </LevelItem>

      <LevelItem>
        <WeekTitle>Week 3</WeekTitle>
        <Text>Finalize Proposal & 
          <br/> 
          Prepare Pitch
        </Text>
        <WeekSubtitle>Additional Info​​</WeekSubtitle>
        <List>
          <li>You may register as an individual or with a team, but every member of the team should fill out the individual registration form.</li>
          <li>You do not need any prior experience with tech or startups to attend. Anyone interested in entrepreneurship or climate action should apply.</li>
        </List>
        <Link fontSize="1.3rem" roboto bold href="/faq">FAQs</Link>
      </LevelItem>
    </Level>
  </div>
))

export const Weekly = s(WeekLayout)`
  margin: 10vw auto;
`