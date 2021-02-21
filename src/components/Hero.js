import React from "react"
import s from "styled-components"
import { Title, Subtitle } from "./shared/Typography"
import Chevron from "../images/svg/chevron.svg"

const HeroTitle = s(Title)`
  margin-top: -2rem;
`

const LeftMargin = Component => s(Component)`
  margin-left: 4rem;
`
const SpacedSubtitle = LeftMargin(Subtitle)

const InlineBlock = s.div`
  text-align: left;
  display: inline-block;
`

const HeroLayout = ({ className, scrollTo }) => (
  <div className={`container is-fluid has-text-centered ${className}`}>
    <InlineBlock>
      <SpacedSubtitle>APRIL 3rd - 17th</SpacedSubtitle>
      <HeroTitle>Penn Climate Ventures Prize</HeroTitle>
      <SpacedSubtitle>building out Penn's climate innovation ecosystem</SpacedSubtitle>
      <SpacedSubtitle>bringing environmental impact into Penn's startup scene</SpacedSubtitle>
      <SpacedSubtitle>breaking Penn's talent into a critical space</SpacedSubtitle>
    </InlineBlock>
    <br />
    <a>
      <Chevron onClick={scrollTo} css={`
        width: 4rem;
        margin-top: 10vw;
      `} />
    </a>
  </div>
)

export const Hero = s(HeroLayout)`
  margin-top: 10vw;
`
