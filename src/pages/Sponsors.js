import React from "react"
import s from "styled-components"
import Kleinman from '../images/kleinman.png'
import MT from '../images/M&T_Logo_Tagline.png'
import SP2 from '../images/sp2logo.png'
import WGY from '../images/Whartonglobalyouthprogram.png'


import { Title, Text, Subtitle, SubText } from "../components/shared/Typography"
import Button from "../components/shared/Button"
import { Navbar } from "../components/Navbar"

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

    <img src={SP2} />
    <img src={Kleinman} />
    <img src={WGY} />
    <img src={MT} />

    <br/>
    <Text>
        If you would like to become a sponsor of our 2022 Prize, please shoot us an email at pennclimateventures@gmail.com!
    </Text>
</div>
