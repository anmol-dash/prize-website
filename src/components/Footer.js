import React from 'react'
import s from "styled-components"
import { Text } from './Typography'

const FooterLink = s.a`
    text-decoration: underline;
    color: white;
`

const FooterLayout = ({ className }) => <footer class={`footer has-text-centered ${className}`}>
    <Text>
        Reach out to <FooterLink href="mailto:pennclimateventures@gmail.com">pennclimateventures@gmail.com</FooterLink>
        <br />
        Visit us at <FooterLink href="www.pennclimateventures.org" target="_blank" rel="noreferrer">www.pennclimateventures.org</FooterLink>
    </Text>
</footer>

export const Footer = s(FooterLayout)`
    background-color: transparent;
`