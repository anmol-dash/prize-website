import React, { useRef } from "react"
import "./styles.scss"

import {
  Navbar,
  Hero,
  Sponsors,
  Footer
} from "../components"

import SEO from "../components/seo";

const IndexPage = () => {
  const sectionRef = useRef(null)
  const scrollTo = () => sectionRef && sectionRef.current.scrollIntoView()
  return (
    <>
      <SEO title="Home" defer={false} />
      <Navbar />
      <Hero scrollTo={scrollTo} />
      <Sponsors />
      <Footer />
    </>
  )
}
export default IndexPage
