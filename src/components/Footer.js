import React from 'react'
import s from "styled-components"
import { Text } from './shared/Typography'
import  MenuButton from './shared/MenuButton'
import { MIDNIGHT_BLUE, mediaMaxWidth } from '../utils/constants'

const FooterLink = s.a`
    text-decoration: underline;
    color: ${MIDNIGHT_BLUE};
`

const FooterButton = s(MenuButton).attrs(() => ({
    fontSize: `.5rem`
}))`
    margin: 1vw;
    flex: 1;
    padding: .5rem;
    cursor: pointer;
    z-index: 999;
`

const FooterLevel = s.div`
    display: flex;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;

    ${mediaMaxWidth("768px")} {
        flex-direction: column;
    }
`

const FooterLayout = ({ className }) => <footer className={`footer has-text-centered ${className}`}>
    <FooterLevel>
        <FooterButton href="/about">About</FooterButton>
        <FooterButton href="/rules">Rules</FooterButton>
        <FooterButton href="/faq">FAQs</FooterButton>
        <FooterButton href="/schedule">Schedule</FooterButton>
        <FooterButton href="/sponsors">Sponsors</FooterButton>
    </FooterLevel>
</footer>

export const Footer = s(FooterLayout)`
    background-color: transparent;
`