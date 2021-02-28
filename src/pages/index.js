import React, { useRef } from "react"
import Helmet from "react-helmet"
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
  const sectionRef = useRef(null)
  const scrollTo = () => sectionRef && sectionRef.current.scrollIntoView()
  return (
    <>
      <Helmet title="Penn Climate Ventures Prize" defer={false} />
      <Navbar />
      <Hero scrollTo={scrollTo} />
      <Prizes ref={sectionRef} />
      <Timeline />
      <Donors />
      <Footer />
    </>
  )
}
export default IndexPage
