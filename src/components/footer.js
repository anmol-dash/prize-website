import React from "react";
import s from "styled-components";

const FooterWrapper = s.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  background-color: hsl(216, 30%, 50%);
  padding: 30px;
  margin: 0px;
`


const Footer = () => {
  return (
    <FooterWrapper>
    </FooterWrapper>
  )
}

export default Footer
