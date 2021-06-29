import React from 'react'
import s from "styled-components"
import MenuButton from '../components/shared/MenuButton'
import "../pages/styles.scss"

import PrizeLogo from "../images/PCVPrizeSparkTeen.png"
import Facebook from "../images/menu/facebook.png"
import Instagram from "../images/menu/instagram.png"
import LinkedIn from "../images/menu/linkedin.png"
import Email from "../images/menu/email.png"

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
            <NavButton target="_blank" rel="noreferrer noopener" href='/people'>
                People
                </NavButton>
            <NavButton target="_blank" rel="noreferrer noopener" href='/sponsors'>
                Sponsors
                </NavButton>
            <NavButton target="_blank" rel="noreferrer noopener" href='/about'>
                About PCV
                </NavButton>
            <NavButton target="_blank" rel="noreferrer noopener" href='/faq'>
                FAQs
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
            <a href="mailto: pennclimateventures@gmail.com">
                <SocialMedia src={Email} alt="Email"/>
            </a>
    </nav>
}
