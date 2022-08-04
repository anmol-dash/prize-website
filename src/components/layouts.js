import React from "react"
import s from "styled-components"

import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"


export const Container = s.div`
  padding: 2rem 1rem;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  
  @media (min-width: 576px) {
    max-width: 540px;
  }
  
  @media (min-width: 768px) {
    max-width: 720px;
  }
  
  @media (min-width: 992px) {
    max-width: 960px;
  }
  
   ${props => (props.wide || props.superwide
    ? `
      @media (min-width: 1250px) {
        max-width: 1200px;
      }
      
      @media (min-width: 1500px) {
        max-width: 1440px;
      }`
    : ``
)} 

  ${props => (props.superwide
    ? `
      @media (min-width: 1750px) {
        max-width: 1700px;
      }
      
      @media (min-width: 2000px) {
        max-width: 1950px;
      }`
    : ``
)}
`

export const GridContainer = s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => (props.childWidth
  ? props.childWidth : 300)}px, max-content));
  grid-gap: 60px 45px;
  justify-content: center;
  padding: initial;
`

const HeaderWrapper = s.div`
  padding: 120px 0 0 0;
  background-color: var(--c-accent-primary);
  overflow: hidden;
`

const MainWrapper = s.main`
  min-height: 40vh;
`

export const PageLayout = (props) => {
  return (
    <>
      <SEO title={props.title} defer={false} />
      <Navbar/>

      <HeaderWrapper>
        <h1>{props.title}</h1>
      </HeaderWrapper>

      <MainWrapper>
        {props.children}
      </MainWrapper>

      <Footer/>
    </>
  )
}
