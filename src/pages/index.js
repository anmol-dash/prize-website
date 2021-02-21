import React from "react"
import s from "styled-components"
import "./styles.scss"

import {
  Navbar, 
  Hero,
  Prizes,
  Timeline,
  Donors,
  Footer
} from "../components"

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Prizes />
      <Timeline />
      <Donors />
      <Footer />
    </>
  )
}
export default IndexPage
