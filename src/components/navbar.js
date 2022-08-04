import React from "react";
import s from "styled-components";

const NavbarWrapper = s.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  background-color: hsl(216, 30%, 50%);
  padding: 30px;
  margin: 0px;
`


const Navbar = () => {
  return (
    <NavbarWrapper>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/rules">Rules</a>
      <a>FAQ</a>
      <a>Past Winners</a>
    </NavbarWrapper>
  )
}

export default Navbar
