import React, { useState } from 'react'
import s from "styled-components"
import Button from '../components/shared/Button'
import Logo from '../images/logo.png'
import Filled from '../images/svg/arrow-filled.svg'
import Empty from '../images/svg/arrow-empty.svg'


const Toggle = ({ toggleNavbar, visible }) => {
    const Icon = visible ? Filled : Empty
    return <a onClick={toggleNavbar}><Icon width="2rem"/></a>;
}

const NavButton = s(Button).attrs(() => ({
    className: `level-item has-text-centered`,
    fontSize: `1.5rem`
}))`
    visibility: ${({ visible }) => visible ? `visible` : `hidden`};
    margin: 1vw;
    font-size: 2rem;
    flex: 1;
    padding: .5rem;
`

export const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const toggleNavbar = () => setVisible(!visible);
    return <nav css={`display: flex; width: 100%;`} className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand" css={`margin-left: 1rem;`}>
            <div className="navbar-item">
                <Toggle toggleNavbar={toggleNavbar} visible={visible} />
            </div>
            {visible || <a href="/" className="navbar-item">
                <img 
                    css={`
                        &&& {
                            max-height: 100%;
                        }
                        margin-left: 1rem;
                        width: 116px;
                    `}
                    src={Logo} 
                />
            </a>
            }
        </div>
        <NavButton visible={visible} target="_blank" rel="noreferrer noopener" href='/tracks'>Tracks</NavButton>
        <NavButton visible={visible} target="_blank" rel="noreferrer noopener" href='/rules'>Official Rules</NavButton>
        <NavButton visible={visible} target="_blank" rel="noreferrer noopener" href='/faq'>Prize FAQs</NavButton>
        <NavButton visible={visible} target="_blank" rel="noreferrer noopener" href='/about'>About PCV</NavButton>
        <NavButton visible={visible} target="_blank" rel="noreferrer noopener" href='/collaborate'>Collaborate</NavButton>
        <NavButton visible={visible} href='mailto: pennclimateventures@gmail.com'>Contact Us</NavButton>
    </nav>
}
