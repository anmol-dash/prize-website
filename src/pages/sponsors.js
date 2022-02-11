import React from "react"
import Helmet from "react-helmet"
import "./styles.scss"

import {
  Sponsors,
  Navbar,
  Footer
} from "../components"

const SponsorsPage = () => {
  return (
    <>
      <Helmet defaultTitle="PCV Prize" titleTemplate="%s | PCV Prize">
        <title defer={false}>Home</title>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://www.prize.pennclimateventures.org/home" />
        <meta name="description" content="Collegiate climate startup pitch competition. Open to all students around the globe."/>
      </Helmet>
      <Navbar />
      <Sponsors includeAlum={"yes"}/>
      <Footer />
    </>
  )
}
export default SponsorsPage
