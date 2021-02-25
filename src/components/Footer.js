import React from 'react'
import s from "styled-components"
import { Text } from './shared/Typography'
import { MIDNIGHT_BLUE } from '../utils/constants'

const FooterLink = s.a`
    text-decoration: underline;
    color: ${MIDNIGHT_BLUE};
`

const FooterLayout = ({ className }) => <footer className={`footer has-text-centered ${className}`}>
    <Text>
        Reach out to <FooterLink href="mailto:pennclimateventures@gmail.com">pennclimateventures@gmail.com</FooterLink>
    </Text>
</footer>

export const Footer = s(FooterLayout)`
    background-color: transparent;
`