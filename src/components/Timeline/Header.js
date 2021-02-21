import React from "react"
import s from "styled-components"
import { Title, Subtitle } from "../Typography"
import { MIDNIGHT_BLUE } from "../../utils/constants"

const Wrapper = s.div`
    display: flex;
    margin: -.1rem;
    width: 101%;
`

const Line = s.hr`
    flex: 1;
    height: .3rem;
    ${({ right }) => right ? "margin-right" : "margin-left"}: 4rem;
    background-color: ${MIDNIGHT_BLUE}
`
const Header = ({ children, right = false, title = false }) => {
    const HeaderTitle = title ? Title : Subtitle
    return <Wrapper>
        {right && <Line right />}
        <HeaderTitle>{children}</HeaderTitle>
        {!right && <Line left />}
    </Wrapper>
}

export default Header;
