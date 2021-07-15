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

const InlineBlock = s.div`
  text-align: left;
  display: inline-block;
`

const HeroLayout = ({ className, scrollTo }) => (
  <div className={`container has-text-centered ${className}`}>
    <InlineBlock>
      <Subtitle css={` 
        ${mediaMaxWidth("768px")}{
          float: right;
          margin-right: 2rem;
        }
      `}>
        March 30th - April 24th | Open to students globally.
      </Subtitle>
      <HeroTitle>Penn Climate Ventures Prize</HeroTitle>
      <Subtitle css={`
        ${mediaMaxWidth("768px")}{
          display: none;
        }
      `}>
        catalyzing climate action
      </Subtitle>
    </InlineBlock>
    <br />
    <Button 
      css={`display: block; 
            width: 29vw; 
            margin: 3vw auto;
            background-color: #86b3d1;
            font-weight: bold;

            :hover {
              background-color: #86b3d1;
            }`}>
      Registration Closed for 2021
    </Button>

    <a>
      <Chevron onClick={scrollTo} css={`
        width: 3rem;
        margin-top: 3vw;
      `} />
    </a>
  </div>
)

export const Hero = s(HeroLayout)`
  margin-top: 10vw;
`
