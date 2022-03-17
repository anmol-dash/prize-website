import React from "react"
import "./styles.scss"

import {
  Sponsors,
  Navbar,
  Footer
} from "../components"
import SEO from "../components/seo";

const SponsorsPage = () => {
  return (
    <>
      <SEO title="Sponsors" defer={false} />
      <Navbar />
      <Sponsors includeAlum={"yes"}/>
      <Footer />
    </>
  )
}
export default SponsorsPage
