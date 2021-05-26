import React from "react"
import Kleinman from '../images/kleinman.png'
import MT from '../images/M&T_Logo_Tagline.png'
import SP2 from '../images/sp2logo.png'
import WGY from '../images/Whartonglobalyouthprogram.png'

import { Title, Text, Subtitle } from "../components/shared/Typography"
import { Navbar, Footer } from "../components"
import Helmet from "react-helmet"

const Sponsors = () => {
    return (
        <div>
        <Helmet defaultTitle="PCV Prize" titleTemplate="%s | PCV Prize">
                <title defer={false}>Sponsors</title>
                <meta charSet="utf-8" />
                <link rel="canonical" href="https://www.prize.pennclimateventures.org/sponsors" />
                <meta name="description" content="Sponsor the Penn Climate Ventures Prize."/>
        </Helmet>
        <Navbar />
            <Title>
                Sponsors
            </Title>

            <Text>
                Helping push the next generation into climate with quick, catalytic capital.
            </Text>

            <Subtitle>
                Our Supporters for the 2021 PCV Prize:
            </Subtitle>

            <img src={SP2} alt="SP2"/>
            <br/>
            <img src={Kleinman} alt="Kleinman"/>
            <br/>
            <img src={WGY} alt="WGY"/>
            <br/>
            <img src={MT} alt="MT"/>
            <br/>
            
            <Text>
                If you would like to become a sponsor of our 2022 Prize, please shoot us an email at pennclimateventures@gmail.com!
            </Text>
        <Footer />
        </div>        
    )
}

export default Sponsors
