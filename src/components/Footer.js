import React from 'react'
import s from "styled-components"
import  MenuButton from './shared/MenuButton'
import { mediaMaxWidth, GREY } from '../utils/constants'

import Facebook from "../images/menu/facebook.png"
import Instagram from "../images/menu/instagram.png"
import LinkedIn from "../images/menu/linkedin.png"
import Email from "../images/menu/email.png"

const FooterButton = s(MenuButton).attrs(() => ({
    fontSize: `.2rem`
}))`
    cursor: pointer;
    z-index: 999;
    ${({border}) => border && `border-right: 0.1rem solid ${GREY}`}
`

const FooterLevel = s.div`
    display: flex;
    width: 75%;
    margin: 0 auto;

    ${mediaMaxWidth("768px")} {
        flex-direction: column;
    }
`

const SocialMedia = s.img`
    height: 1.5rem;
    object-fit: cover;
    margin: 0 0.5vw;
`

const FooterLayout = ({ className }) => <footer className={`footer has-text-centered ${className}`}>
    <FooterLevel>
        <FooterButton border href="/2021/winners">2021 Winning Pitches</FooterButton>
        <FooterButton border href="/rules">Official Rules</FooterButton>
        <FooterButton border href="/schedule">Schedule</FooterButton>
        <FooterButton border href="/people">People</FooterButton>
        <FooterButton border href="/sponsors">Sponsors</FooterButton>
        <FooterButton border href="/about">About PCV</FooterButton>
        <FooterButton href="/faq">FAQs</FooterButton>
        <a href="https://www.facebook.com/pennclimateventures"><SocialMedia src={Facebook} alt="Facebook"/></a>
        <a href="https://www.instagram.com/pennclimateventures/?hl=en"><SocialMedia src={Instagram} alt="Instagram"/></a>
        <a href="https://www.linkedin.com/company/penn-climate-ventures"><SocialMedia src={LinkedIn} alt="LinkedIn"/></a>
        <a href="mailto: pennclimateventures@gmail.com"><SocialMedia src={Email} alt="Email"/></a>
    </FooterLevel>
</footer>

export const Footer = s(FooterLayout)`
    background-color: transparent;
`