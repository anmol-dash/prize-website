import React from "react"
import { Subtitle, Text, Link } from "../shared/Typography"
import { Logo, Figure, Images } from "./Layout"

import NASADYALogo from "../../images/2021/winners/NASADYA.jpg"
import Chaitanya from "../../images/2021/winners/ChaitanyaGulati.jpg"
import Praneeth from "../../images/2021/winners/PraneethNagarjuna.jpg"
import Devansh from "../../images/2021/winners/DevanshSethia.jpg"
import Khadeeja from "../../images/2021/winners/KhadeejaMalik.jpg"
import Dan from "../../images/2021/winners/DanDuffy.jpg"
import Nate from "../../images/2021/winners/NateKraemer.jpg"
import Madhu from "../../images/2021/winners/MadhuDevi.jpg"

const NASADYA = () => (
    <div>
        <Subtitle css={`margin-top: 15px`}>Honorable Mention - NASADYA</Subtitle>
        <Logo src={NASADYALogo} alt="NASADYA" width="250px"/>
        <Text>NASADYA solves the growing problem of variability management in the 
            energy grid for power plants by converting a money-losing by-product 
            (excess energy) into valuable co-products (green hydrogen & oxygen).</Text>
        
        <Images>
            <Figure name="Chaitanya Gulati" source={Chaitanya} size="140px"/>
            <Figure name="Praneeth Nagarjuna" source={Praneeth} size="140px"/>
            <Figure name="Devansh Sethia" source={Devansh} size="140px"/>
            <Figure name="Khadeeja Malik" source={Khadeeja} size="140px"/>
            <Figure name="Dan Duffy" source={Dan} size="140px"/>
            <Figure name="Nate Kraemer" source={Nate} size="140px"/>
            <Figure name="Madhu Devi" source={Madhu} size="140px"/>
        </Images>

        <Text><b>LinkedIn:</b>
            <br/>
            <Link href="https://www.linkedin.com/company/nasadya">https://www.linkedin.com/company/nasadya</Link>
        </Text>

    </div>
)

export default NASADYA