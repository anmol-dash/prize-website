import React, { useRef } from "react"
import Helmet from "react-helmet"
import "./styles.scss"

import {
  Navbar, 
  Hero,
  Weekly,
  Donors,
  Footer
} from "../components"

import Judging from "../components/Judging"

const IndexPage = () => {
  const sectionRef = useRef(null)
  const scrollTo = () => sectionRef && sectionRef.current.scrollIntoView()
  return (
    <>
      <Helmet defaultTitle="PCV Prize" titleTemplate="%s | PCV Prize">
        <title defer={false}>Home</title>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://www.prize.pennclimateventures.org/home" />
        <meta name="description" content="Collegiate climate startup pitch competition. Open to all students around the globe."/>
      </Helmet>
      <Navbar />
      <Hero scrollTo={scrollTo} />
      <Weekly ref={sectionRef} />
      <Judging />
      <Footer />
    </>
  )
}
export default IndexPage
