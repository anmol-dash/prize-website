import React from "react"
import s from "styled-components"
import { Title, Subtitle } from "./shared/Typography"
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
      href="https://tinyurl.com/PCV22Signup"
      target="blank"
      rel="noreferrer noopener"
      css={`display: block; 
            width: 350px; 
            margin: 50px auto;
            background-color: #86b3d1;
            font-weight: bold;

            :hover {
              background-color: #86b3d1;
            }`}>
      Individual Registration Open
    </Button>

    <Button
      href="https://tinyurl.com/PCV22team"
      target="blank"
      rel="noreferrer noopener"
      css={`display: block; 
            width: 350px; 
            margin: 50px auto;
            background-color: #86b3d1;
            font-weight: bold;

            :hover {
              background-color: #86b3d1;
            }`}>
      Team Registration Open
    </Button>

    {/*
    <a>
      <Chevron onClick={scrollTo} css={`
        width: 3rem;
        margin-top: 10px;
      `} />
    </a>
    */}
  </div>
)

export const Hero = s(HeroLayout)`
  margin: 130px auto;
`
