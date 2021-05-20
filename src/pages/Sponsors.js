import React from "react"
import Kleinman from '../images/kleinman.png'
import MT from '../images/M&T_Logo_Tagline.png'
import SP2 from '../images/sp2logo.png'
import WGY from '../images/Whartonglobalyouthprogram.png'


import { Title, Text, Subtitle } from "../components/shared/Typography"
import { Navbar } from "../components/Navbar"

const Sponsors = () => {
    return (
        <div>
        <Navbar/>
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
        </div>        
    )
}
