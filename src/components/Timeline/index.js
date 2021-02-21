import React from "react"
import s from "styled-components"
import { Title, Text, Subtitle, SubText } from "../Typography"


const TimelineColumns = s.div.attrs(() => ({
    className: "columns"
}))`
:before {
    content: '';
    position: absolute;
    top: -.1rem;
    width: 6%;
    left: 47%;
    border-bottom: .3rem solid white;
}
`

const TimelineCol = s.div.attrs(() => ({
    className: 'column'
}))`
    padding: 0
`

const TimelineLeftCol = s(TimelineCol)`
    border-right: .2rem solid white;
`

const TimelineRightCol = s(TimelineCol)`
    border-left: .2rem solid white;
`
