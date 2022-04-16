import React, { useRef } from "react"
import "./styles.scss"

import {
  Navbar,
  Hero,
  Sponsors,
  Footer
} from "../components"

import SEO from "../components/seo";
import {MiniSchedule} from "../components/MiniSchedule";
import {Prizes} from "../components/Prizes";

const IndexPage = () => {
  const sectionRef = useRef(null)
  const scrollTo = () => sectionRef && sectionRef.current.scrollIntoView()
  return (
    <>
      <SEO title="Home" defer={false} />
      <Navbar />
      <Hero scrollTo={scrollTo} />
      <MiniSchedule/>
      <Prizes/>
      <Sponsors />
      <Footer />
    </>
  )
}

export default IndexPage
