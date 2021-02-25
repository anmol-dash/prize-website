import React from 'react'
import s from "styled-components"
import { Text } from './shared/Typography'
import Button from './shared/Button'
import { MIDNIGHT_BLUE } from '../utils/constants'

const FooterLink = s.a`
    text-decoration: underline;
    color: ${MIDNIGHT_BLUE};
`

const FooterButton = s(Button).attrs(() => ({
    fontSize: `1.5rem`
}))`
    margin: 1vw;
    font-size: 2rem;
    flex: 1;
    padding: .5rem;
    cursor: pointer;
    z-index: 999;
`

const FooterLayout = ({ className }) => <footer className={`footer has-text-centered ${className}`}>
    <Text>
        Reach out to <FooterLink href="mailto:pennclimateventures@gmail.com">pennclimateventures@gmail.com</FooterLink>
    </Text>
    <div css={`display: flex; width: 100%;`}>
        <FooterButton href="/">About the Prize</FooterButton>
        <FooterButton>Official Rules</FooterButton>
        <FooterButton>Prize FAQs</FooterButton>
        <FooterButton>About PCV</FooterButton>
        <FooterButton>Collaborate</FooterButton>
    </div>
</footer>

export const Footer = s(FooterLayout)`
    background-color: transparent;
`