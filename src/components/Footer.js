import React from 'react'
import s from "styled-components"
import { Text } from './Typography'
import { MIDNIGHT_BLUE } from '../utils/constants'

const FooterLink = s.a`
    text-decoration: underline;
    color: ${MIDNIGHT_BLUE};
`

const FooterLayout = ({ className }) => <footer className={`footer has-text-centered ${className}`}>
    <Text>
        Reach out to <FooterLink href="mailto:pennclimateventures@gmail.com">pennclimateventures@gmail.com</FooterLink>
        <br />
        Visit us at <FooterLink href="www.pennclimateventures.org" target="_blank" rel="noreferrer">www.pennclimateventures.org</FooterLink>
    </Text>
</footer>

export const Footer = s(FooterLayout)`
    background-color: transparent;
`