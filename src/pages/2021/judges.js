import React from "react"
import s from "styled-components"
import "../styles.scss"
import { Title, Text, Subtitle} from "../../components/shared/Typography"
import { Navbar, Footer } from "../../components"
import Headshot from "../../components/shared/Headshot"

import Lidiya from "../../images/2021/judges/LidiyaDervisheva.jpg"
import Seth from "../../images/2021/judges/SethBannon.jpg"
import Marisa from "../../images/2021/judges/MarisaSweeney.jpg"
import Sam from "../../images/2021/judges/SamBursten.jpg"
import Dennis from "../../images/2021/keynote/DennisWoodside.jpg";
import Arun from "../../images/2021/keynote/ArunMajumdar.jpg";
import SEO from "../../components/seo";

const GridLayout = s.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

// Prizes
const People = () => {
  return (
    <div css={`text-align: center;
                  width: 70vw;
                  padding: 3vw;
                  display: block;
                  margin: 1vw auto`}>
      <GridLayout>
        <Headshot
            imageSrc={Dennis}
            imageAlt={"Dennis"}
            name={"Dennis Woodside"}
            description={<>President <br/> @ Impossible Foods</>}
            width="190px"/>
        <Headshot
          imageSrc={Arun}
          imageAlt={"Arun"}
          name={"Dr. Arun Majumdar"}
          description={<>Founding Director <br/> @ ARPA-E <br/> Former VP of Energy <br/> @ Google</>}
          width="190px"/>
        <Headshot
          imageSrc={Marisa}
          imageAlt={"Marisa"}
          name={"Marisa Sweeney"}
          description={<>Director <br/> @ Generate Capital</>}
          width="190px"/>
        <Headshot
          imageSrc={Lidiya}
          imageAlt={"Lidiya"}
          name={"Lidiya Dervisheva"}
          description={<>Partner <br/> @ Next47</>}
          width="190px"/>
      </GridLayout>
    </div>
  )
}

const Finals = () => (
  <div css={`text-align: center;
                width: 70vw;
                padding: 3vw;
                display: block;
                margin: 1vw auto`}>
    <Text fontSize="2rem" roboto bold>Live Finals, with keynote from</Text>
    <div css={`display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 2vw;`}>
      <Headshot
        imageSrc={Dennis}
        imageAlt={"Dennis"}
        name={"Dennis Woodside"}
        description={"President of Impossible Foods"}/>
    </div>

    <Text fontSize="2rem" roboto bold>and judging by</Text>

    <GridLayout>
      <Headshot
        imageSrc={Lidiya}
        imageAlt={"Lidiya Dervisheva"}
        name={"Lidiya Dervisheva"}
        description={<>Partner <br/> @ Next47</>}
        width="190px"/>
      <Headshot
        imageSrc={Seth}
        imageAlt={"Seth Bannon"}
        name={"Seth Bannon"}
        description={<>Founding Partner <br/> @ Fifty Years</>}
        width="190px"/>
      <Headshot
        imageSrc={Marisa}
        imageAlt={"Marisa Sweeney"}
        name={"Marisa Sweeney"}
        description={<>Director <br/> @ Generate Capital</>}
        width="190px"/>
      <Headshot
        imageSrc={Sam}
        imageAlt={"Sam Bursten"}
        name={"Sam Bursten"}
        description={<>Vice President <br/>@ Energy Impact Partners</>}
        width="190px"/>
    </GridLayout>
  </div>
)

const Judges = () => {
  return (
    <>
      <SEO title="2021 Judges" defer={false} />
      <Navbar />
      <div css={`padding: 90px 12vw;`}>
        <Title css={`margin-bottom: 15px`}>Judges (2021)</Title>
        <People/>
        <br/>
        <Finals/>
      </div>
      <Footer />
    </>
  )
}

export default Judges;
