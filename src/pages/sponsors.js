import React from "react"
import "./styles.scss"

import {
  Sponsors,
  Navbar,
  Footer
} from "../components"
import SEO from "../components/seo";
import {Title} from "../components/shared/Typography";

const SponsorsPage = () => {
  return (
    <>
      <SEO title="Sponsors" defer={false} />
      <Navbar />

      <div css={`padding: 90px 12vw;`}>
        <Title css={`margin-bottom: 15px`}>Sponsors</Title>
        <Sponsors includeAlum={"yes"}/>
      </div>
      <Footer />
    </>
  )
}
export default SponsorsPage
