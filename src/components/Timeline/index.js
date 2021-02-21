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


const TimelineHeaderWrapper = s.div`
    display: flex;
    margin: -.1rem;
    width: 101%;
`

const TimelineHeaderLine = s.hr`
    flex: 1;
    height: .3rem;
    ${({ right }) => right ? "margin-right" : "margin-left"}: 4rem;
`


const TimelineHeader = ({ children, right = false, title = false }) => {
    const TimelineHeaderTitle = title ? Title : Subtitle
    return <TimelineHeaderWrapper>
        {right && <TimelineHeaderLine right />}
        <TimelineHeaderTitle>{children}</TimelineHeaderTitle>
        {!right && <TimelineHeaderLine left />}
    </TimelineHeaderWrapper>
}


