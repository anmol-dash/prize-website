import React from "react"
import s from "styled-components"
import { Title, Subtitle } from "../shared/Typography"
import { OXFORD_BLUE } from "../../utils/constants"

const Wrapper = s.div`
    display: flex;
    margin: -.1rem;
    width: 101%;
`

const Line = s.hr`
    flex: 1;
    height: .3rem;
    ${({ right }) => right ? "margin-right" : "margin-left"}: 4rem;
    background-color: ${OXFORD_BLUE}
`

const HeaderTitle = s(Subtitle)`
    font-family: Roboto Condensed;
`

const Header = ({ children, right = false }) => {
    return <Wrapper>
        {right && <Line right />}
        <HeaderTitle>{children}</HeaderTitle>
        {!right && <Line left />}
    </Wrapper>
}

export default Header;
