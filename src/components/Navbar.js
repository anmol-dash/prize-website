import React from 'react'
import s from "styled-components"
import MenuButton from '../components/shared/MenuButton'
import { mediaMaxWidth } from '../utils/constants'
import "../pages/styles.scss"

import PrizeLogo from "../images/PCVPrizeSparkTeen.png"
import Facebook from "../images/footer/facebook.png"
import Instagram from "../images/footer/instagram.png"
import LinkedIn from "../images/footer/linkedin.png"

const NavButton = s(MenuButton).attrs(() => ({
    className: `level-item has-text-centered`,
    fontSize: `0.2rem`
}))`
    margin: 3vw 0 0;
    
    cursor: pointer; 
`

const SocialMedia = s.img`
    height: 1.5rem;
    object-fit: cover;
    margin: 3.5vw 0.5vw 0;
`

export const Navbar = () => {
    return <nav
        css={`
            display: flex;
            width: 90%;
            margin: 0 auto;
            overflow-x: auto;
        `}
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        >
            <a href="/" className="navbar-item">
                <img 
                    css={`
                        &&& {
                            max-height: 100%;
                        }
                        margin: 1rem 4rem 0 1rem;
                        width: 116px;
                    `}
                    src={PrizeLogo} 
                    alt="Prize Logo"
                />
            </a>

            <NavButton target="_blank" rel="noreferrer noopener" href='/2021/winners'>
                2021 Winning Pitches
                </NavButton>
            <NavButton target="_blank" rel="noreferrer noopener" href='/rules'>
                Official Rules
                </NavButton>
            <NavButton target="_blank" rel="noreferrer noopener" href='/schedule'>
                Schedule
                </NavButton>
            <NavButton target="_blank" rel="noreferrer noopener" href='/People'>
                People
                </NavButton>
            <NavButton target="_blank" rel="noreferrer noopener" href='/Sponsors'>
                Sponsors
                </NavButton>

            <NavButton target="_blank" rel="noreferrer noopener" href='/about'>
                About PCV
                </NavButton>
            <NavButton target="_blank" rel="noreferrer noopener" href='/faq'>
                FAQs
                </NavButton>
            <NavButton href='mailto: pennclimateventures@gmail.com'>
                Contact
                </NavButton>

            <a href="https://www.facebook.com/pennclimateventures">
                <SocialMedia src={Facebook} alt="Facebook" css={`margin-left: 3rem`}/>
                </a>
            <a href="https://www.instagram.com/pennclimateventures/?hl=en">
                <SocialMedia src={Instagram} alt="Instagram"/>
                </a>
            <a href="https://www.linkedin.com/company/penn-climate-ventures">
                <SocialMedia src={LinkedIn} alt="LinkedIn"/>
                </a>
    </nav>
}
