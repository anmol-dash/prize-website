import React from "react"
import s from "styled-components"
import {Title, Subtitle, Text} from "./shared/Typography"
import Button from "./shared/Button"
import Chevron from "../images/svg/chevron.svg"

import { mediaMaxWidth } from "../utils/constants"

const HeroTitle = s(Title)`
  ${mediaMaxWidth("768px")}{
  margin: 2rem;
}
`

const HeroSubtitle = s(Subtitle)`
  ${mediaMaxWidth("768px")}{
    margin: 2rem;
  }
`

const InlineBlock = s.div`
  text-align: left;
  display: inline-block;
  padding: 0 50px;
`

const Banner = s.div`
  color: rgb(229, 223, 144);
  text-align: left;
  background-color: rgb(252, 246, 199);
  border-radius: 10px;
  border: 2px solid rgb(229, 223, 144);
  padding: 15px 30px;
  width: 90%;
  margin: 60px auto 0 auto;
  
`

const HeroLayout = ({ className, scrollTo }) => (
  <div className={`container has-text-centered ${className}`}>

    <InlineBlock>
      <Subtitle>
      March 25th - April 16th | Open to students globally.
      </Subtitle>
      <Title>Penn Climate Ventures Prize</Title>
      <Subtitle>
        Deep dive into the most pressing environmental issues today
      </Subtitle>
      <Subtitle>
        with industry leader panels, mentorship opportunities, and cash prizes up to $5000
      </Subtitle>
    </InlineBlock>
    <br />

    <Button
      href="https://tinyurl.com/PCV22team"
      target="blank"
      rel="noreferrer noopener"
      css={`display: block; 
            width: 350px; 
            margin: 50px auto 30px auto;
            background-color: #86b3d1;
            font-weight: bold;

            :hover {
              background-color: #86b3d1;
            }`}>
      Team Registration Open
    </Button>

    <Button
      href="https://tinyurl.com/PCV22Submit"
      target="blank"
      rel="noreferrer noopener"
      css={`display: block; 
            width: 350px; 
            margin: 50px auto 30px auto;
            background-color: #86b3d1;
            font-weight: bold;

            :hover {
              background-color: #86b3d1;
            }`}>
      Submission portal now open!
    </Button>

    <Banner>
      <Text>Registration is extended until the submission deadline!</Text>
      <ul>
        <li><Text>4/3 for High School Track</Text></li>
        <li><Text>4/8 for Themed Tracks</Text></li>
      </ul>
    </Banner>

  </div>
)

export const Hero = s(HeroLayout)`
  margin: 130px auto;
`
