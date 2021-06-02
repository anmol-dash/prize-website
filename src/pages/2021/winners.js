import React from "react"
import { Title } from "../../components/shared/Typography"
import { STEEL_BLUE } from "../../utils/constants"
import { Columns, ColumnText, TeamSummary } from "./Layout"


import Renecycle from "./Renecycle"
import Folia from "./Folia"
import TeamChaeto from "./TeamChaeto"
import NASADYA from "./NASADYA"


const Summary = () => (
    <div css={`text-align: center`}>
        <hr 
            css={`border-top: .2rem solid; 
                width: 20vw; 
                margin: 4vw auto`} />

        <div css={`margin: 0 10vw`}>
            <TeamSummary
                fontSize="0.8rem" 
                fontColor={STEEL_BLUE}>
                The 2021 PCV Prize drew 87 competing teams from Penn, Stanford, Columbia, UC Berkeley, U of Illinois, WashU, UTA, UChicago, UToronto, Cornell, UCSB, Princeton, Yale, Rice, and more.
            </TeamSummary> 
            <br/> 
            <br/>
            <TeamSummary fontSize="0.6rem">
            Winning pitches were chosen from 10 finalist teams at our virtual pitch event by 
            judges from Fifty Years, Next47, Energy Impact Partners, and Generate Capital:
            </TeamSummary> <br/>
        </div>

        <Columns css={`font-size: 0.6rem`}>
            <ColumnText>
                <TeamSummary fontColor={STEEL_BLUE}>Waste and Circularity</TeamSummary>
                <TeamSummary>Happy Earth Company<br/>
                    College Thrifts<br/> <br/></TeamSummary>
                <TeamSummary fontColor={STEEL_BLUE}>Wild Card</TeamSummary>
                <TeamSummary>Beyond Capacity <br/>
                        GarboCarbo<br/> <br/></TeamSummary>
            </ColumnText>

            <ColumnText>
                <TeamSummary fontColor={STEEL_BLUE}>Energy and Transportation</TeamSummary>
                <TeamSummary>Renecycle<br/>
                    NASADYA<br/> <br/></TeamSummary>
                <TeamSummary fontColor={STEEL_BLUE}>High School</TeamSummary>
                <TeamSummary>Team Chaeto <br/>
                    Promethean Energy<br/> <br/></TeamSummary>
            </ColumnText>

            <ColumnText>
                <TeamSummary fontColor={STEEL_BLUE}>Food and Agriculture</TeamSummary>
                <TeamSummary>Axo<br/>
                    Folia<br/> <br/></TeamSummary>
            </ColumnText>
        </Columns>
    </div>
)

const Winners2021 = () => (
    <div css={ `padding: 16vw;`}>
        <Title>2021 Winning Pitches</Title>
        <Renecycle />
        <Folia />
        <TeamChaeto />
        <NASADYA />
        <Summary />
    </div>
)

export default Winners2021