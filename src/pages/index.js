import React from "react"
import s from "styled-components"
import "./styles.scss"

import { 
  Hero,
  Prizes,
  Donors,
  Footer
} from "../components"

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Prizes />
      <Donors />
      <Footer />
    </>
  )
}
export default IndexPage
