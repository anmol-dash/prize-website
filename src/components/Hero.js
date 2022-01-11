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
        catalyzing climate action
      </Subtitle>
    </InlineBlock>
    <br />
    <Button
      href="https://forms.gle/EgRzEcfNBrJUMnDB8"
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
      Sign up to stay tuned
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
