import React from "react"
import s from "styled-components"
import { Title, Text, Subtitle, SubText } from "../shared/Typography"
import { MIDNIGHT_BLUE } from "../../utils/constants"

export const Columns = s.div.attrs(() => ({
    className: "columns"
}))`
:before {
    content: '';
    position: absolute;
    top: -.1rem;
    width: 6%;
    left: 47%;
    border-bottom: .4rem solid ${MIDNIGHT_BLUE};
}
`

export const Col = s.div.attrs(() => ({
    className: 'column'
}))`
    padding: 0
`

export const Left = s(Col)`
    border-right: .3rem solid ${MIDNIGHT_BLUE};
`

export const Right = s(Col)`
    border-left: .3rem solid ${MIDNIGHT_BLUE};
`

export const Spacer = s.div`
    height: ${({ height }) => height || `2vw`};
`
