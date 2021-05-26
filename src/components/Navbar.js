import React, { useState } from 'react'
import s from "styled-components"
import MenuButton from '../components/shared/MenuButton'
import PrizeLogo from '../images/PCVPrizeSparkTeen.png'

const NavButton = s(MenuButton).attrs(() => ({
    className: `level-item has-text-centered`,
    fontSize: `0.5rem`
}))`
    margin: 1vw;
    flex: 1;
    padding: .5rem;
    cursor: pointer;
`

export const Navbar = () => {
    return <nav
        css={`
            display: flex;
            width: 100%;
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
                        margin-left: 1rem;
                        width: 116px;
                    `}
                    src={PrizeLogo} 
                />
            </a>
            <NavButton target="_blank" rel="noreferrer noopener" href='/tracks'>Tracks</NavButton>
            <NavButton target="_blank" rel="noreferrer noopener" href='/Winners2021'>Winners</NavButton>
            <NavButton target="_blank" rel="noreferrer noopener" href='/rules'>Rules</NavButton>
            <NavButton target="_blank" rel="noreferrer noopener" href='/schedule'>Schedule</NavButton>
            <NavButton target="_blank" rel="noreferrer noopener" href='/faq'>FAQs</NavButton>
            <NavButton target="_blank" rel="noreferrer noopener" href='/about'>About PCV</NavButton>
            <NavButton target="_blank" rel="noreferrer noopener" href='/sponsors'>Sponsors</NavButton>
            <NavButton href='mailto: pennclimateventures@gmail.com'>Contact</NavButton>
        
    </nav>
}
