import React from "react"
import s from "styled-components"
import { Title, Subtitle, Text, Link } from "../components/shared/Typography"
import { STEEL_BLUE, GREEN } from "../utils/constants"
import Renecycle from '../images/Renecycle.jpg'
import Hunter from '../images/Hunter Lee _ CEO.jpg'
import Mina from '../images/Mina Liang _ COO.jpg'
import Henry from '../images/Henry Lei.jpeg'
import David from '../images/David Chang.jpeg'
import Ian from '../images/Ian Gordon.jpeg'
import Folia from '../images/Folia.jpg'
import Rosanna from '../images/RosannaHeadshot.jpg'
import Caroline from '../images/CarolineHeadshot.jpeg'
import Zachary from '../images/ZacharyHeadshot.jpeg'
import Stephanie from '../images/StephanieHeadshot.jpg'
import Ryoma from '../images/RyomaHeadshot.jpg'
import TeamChaeto from '../images/TeamChaeto.jpg'
import ChrisNick from '../images/Team Chaeto.jpeg'
import NASADYA from '../images/NASADYA.jpg'
import Chaitanya from '../images/Chaitanya_Gulati Headshot.png'
import Praneeth from '../images/NASADYA_Praneeth Nagarjuna_Headshot.jpeg'
import Devansh from '../images/NASADYA_Devansh-Sethia_Headshot.jpg'
import Khadeeja from '../images/NASADYA_Khadeeja-Malik_Headshot_1.jpg'
import Dan from '../images/NASADYA_Dan Duffy_Headshot.jpg'
import Nate from '../images/Nate-Headshot_1.jpg'
import Madhu from '../images/NASADYA_MadhuDevi.jpg'


const Logo = s.img`
    display: block;
    margin: auto;
    width: 30vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
`

const Headshot = s.img`
    object-fit: cover;
    width: 12vw;
    height: 12vw;
`

const Columns = s.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 2vw auto;
`

const ColumnText = s.div`
    flex: 50vw;
    width: 50%;
`

const Name = s.figcaption`
    font-family: roboto;
    font-weight: bold;
    color: ${GREEN};
    font-size: 20px;
`

const TeamSummary = s(Text)`
    font-family: roboto;
    font-weight: bold;
`

const FirstPlace = () => {
    return (
        <div>
            <Subtitle css={`margin-top: 2vw`}>First Place - ReneCycle</Subtitle>
            <Logo src={Renecycle} alt="Renecycle" css={`width: 40vw`}/>
            <Text>Using proprietary smart-lock technology, ReneCycle transforms everyday 
                bikes into easily manageable dockless bikeshare. Their fleet management 
                system's integrated hardware and software creates bikeshare that is secure, 
                accessible, and cost-efficient.</Text>
            
            <Columns css={`text-align: center`}>
                <figure>
                    <Headshot src={Hunter} alt="Hunter Lee"/>
                    <Name>Hunter Lee</Name>
                </figure>
                <figure>
                    <Headshot src={Mina} alt="Mina Liang" css={`object-position: top`}/>
                    <Name>Mina Liang</Name>
                </figure>
                <figure>
                    <Headshot src={Henry} alt="Henry Lei"/>
                    <Name>Henry Lei</Name>
                </figure>
                <figure>
                    <Headshot src={David} alt="David Chang"/>
                    <Name>David Chang</Name>
                </figure>
                <figure>
                    <Headshot src={Ian} alt="Ian Gordon" css={`object-position: top`}/>
                    <Name>Ian Gordon</Name>
                </figure>
            </Columns>

            <Columns>
                <ColumnText css={`padding-right: 2vw`}>
                    <b><Subtitle fontSize="0.6rem">What was competing in the PCV Prize like?</Subtitle></b>
                    <Text>"Competing in the PCV competition was one of the most memorable 
                        experiences in my start-up journey so far. The competition was 
                        extremely professional without sacrificing the inspirational and 
                        collaborative atmosphere that makes startup work so meaningful. 
                        The judges asked sharp and insightful questions, and the organizers 
                        of the event made every transition so smooth. Even though we felt 
                        the adrenaline of presenting first of all the teams, the excitement 
                        never left us for the entire competition as we were hooked by the 
                        amazing ideas from all the other teams and the fantastic fireside 
                        chat with Dennis Woodside. Announcing the results live at the end of 
                        the competition was a thriller, and it was surreal when ReneCycle
                        was announced first. I feel proud to have participated in such a 
                        great event and feel immense gratitude towards all the organizers, 
                        mentors, judges, and participants who made this event possible. 
                        A huge shoutout to our PCV assigned mentor Nicholas Yiu for giving 
                        us such valuable insights." -- Henry</Text>
                </ColumnText>
                <ColumnText css={`padding-left: 2vw`}>
                    <b><Subtitle fontSize="0.6rem">Future Plans?</Subtitle></b>
                    <Text>"ReneCycle is looking forward to using the funding from PCV to 
                        invest further into the product development of our smart bike lock! 
                        We are looking into partnering with new corporate campuses and 
                        municipal districts this Summer, and will be posting new updates on 
                        our website, LinkedIn, and instagram accounts. We've had an exciting 
                        product launch at Swarthmore College this Spring and will be soon 
                        providing new content on bike usage, product resilience, and footage 
                        of real student experiences. Stay tuned for exciting content and 
                        insights from the ReneCycle team!" -- Mina<br/>
                        <br/>
                        <b>LinkedIn:</b><br/>
                        <Link href="https://www.linkedin.com/company/renecycle">https://www.linkedin.com/company/renecycle </Link><br/>
                        <b>Website:</b><br/>
                        <Link href="https://www.renecycle.com/">https://www.renecycle.com/</Link><br/>
                        <b>Instagram:</b><br/>
                        <Link href="https://www.instagram.com/renecycle.inc/">https://www.instagram.com/renecycle.inc/</Link>
                    </Text>
                </ColumnText>
            </Columns>       
        </div>
    )
}

const SecondPlace = () => {
    return (
        <div>
            <Subtitle css={`margin-top: 2vw`}>Second Place - Folia</Subtitle>
            <Logo src={Folia} alt="Folia" css={`width: 20vw`}/>
            <Text>Folia is a B2B Philadelphia-based company dedicated to diverting all 
                food waste from the landfill. Through an online platform, they ensure quality 
                matches between producers of food waste and food upcycling companies.</Text>
            
            <Columns css={`text-align: center`}>
                <figure>
                    <Link href="https://www.linkedin.com/in/rosanna-jiang-a04139201/">
                        <Headshot src={Rosanna} alt="Rosanna Jiang"/>                   
                        <Name>Rosanna Jiang</Name>
                    </Link>
                </figure>
                <figure>
                    <Link href="https://www.linkedin.com/in/caroline-l-185005128/">
                        <Headshot src={Caroline} alt="Caroline Li" />                    
                        <Name>Caroline Li</Name>
                    </Link>
                </figure>
                <figure>
                    <Link href="https://www.linkedin.com/in/zacharyhuangogata/">
                        <Headshot src={Zachary} alt="Zachary Huang-Ogata"/>
                        <Name>Zachary <br/> Huang-Ogata</Name>
                    </Link>
                </figure>
                <figure>
                    <Link href="https://www.linkedin.com/in/stephanie-b-ba88b1169/">
                        <Headshot src={Stephanie} alt="Stephanie Bi"/>
                        <Name>Stephanie Bi</Name>
                    </Link>
                </figure>
                <figure>
                    <Link href="https://www.linkedin.com/in/ryomah/">
                        <Headshot src={Ryoma} alt="Ryoma Harris"/>
                        <Name>Ryoma Harris</Name>
                    </Link>
                </figure>
            </Columns>

            <Columns>
                <ColumnText css={`padding-right: 2vw`}>
                    <b><Subtitle fontSize="0.6rem">What was competing in the PCV Prize like?</Subtitle></b>
                    <Text>"As a team, we're really glad to participate in the movement 
                        to bring more environmental innovation to campus. Speaking to other 
                        innovators and funders in the sustainability space was a rewarding 
                        experience, especially since our entire team was brand new to 
                        environmental entrepreneurship."</Text>
                </ColumnText>
                <ColumnText css={`padding-left: 2vw`}>
                    <b><Subtitle fontSize="0.6rem">Future Plans?</Subtitle></b>
                    <Text>"Over the summer, Folia is looking for web developers and other 
                        help to build out our online platform and get a pilot program running 
                        by the fall. We'd encourage all like-minded, passionate students to 
                        reach out!"<br/>
                        <br/>
                        <b>View their deck!</b><br/>
                        <Link href="https://docs.google.com/presentation/d/1qvGtOdH6_qirfyPLq628x1t8YId_kYMFndaaecIpHSA/edit?usp=sharing">
                        https://docs.google.com/presentation/d/1qvGtOdH6<br/>_qirfyPLq628x1t8YId_kYMFndaaecIpHSA/edit?usp=sharing</Link><br/>
                    </Text>
                </ColumnText>
            </Columns>       
        </div>
    )
}

const ThirdPlace = () => {
    return (
        <div>
            <Subtitle css={`margin-top: 2vw`}>Third Place - Team Chaeto</Subtitle>

            <Columns css={`text-align: center`}>
                <img src={TeamChaeto} alt="Team Chaeto" css={`height: 25vw`}/>
                <figure>
                    <img src={ChrisNick} alt="Christopher and Nicholas Kwok" css={`height: 25vw`}/>
                    <Name>Christopher and Nicholas Kwok</Name>
                </figure>
            </Columns>

            
            <Text>Team Chaeto pioneers an ecological, sustainable, and feasible solution 
                to the existential crisis of ocean acidification. By modifying the activity 
                of hydrogenase and carbonic anhydrase enzymes in chaetomorpha, the team 
                invented chaeto biofilters to implement their novel strain of algae in 
                marine ecosystems.</Text>

            <Columns>
                <ColumnText css={`padding-right: 2vw`}>
                    <b><Subtitle fontSize="0.6rem">What was competing in the PCV Prize like?</Subtitle></b>
                    <Text>"Competing in the Penn Climate Venture Prize was an eye-opening 
                        experience! Meeting the collegiate and high school teams with their 
                        startups was inspirational. As high school students, the competition 
                        was an opportunity to navigate entrepreneurship with incredible mentors."<br/>
                        <br/>
                        <b>Find Team Chaeto on Instagram:</b> <br/>
                        <Link href="https://www.instagram.com/chris_kwok04/">@chris_kwok04</Link> <br/>
                        <Link href="https://www.instagram.com/nicholas_kwok04/">@nicholas_kwok04</Link>
                        </Text>
                </ColumnText>
                <ColumnText css={`padding-left: 2vw`}>
                    <b><Subtitle fontSize="0.6rem">Future Plans?</Subtitle></b>
                    <Text>"In the near future, Team Chaeto plans to continue research and 
                        development with their chaeto biofilters as an economically viable 
                        solution to ocean acidification. Furthermore, the company seeks 
                        numerous grants to raise capital and scale production. Eventually, 
                        Team Chaeto will pursue government contracts and partnerships with 
                        environmental agencies to market their solution globally."<br/>
                    </Text>
                </ColumnText>
            </Columns>   
        </div>
    )
}

const HonorableMention = () => {
    return (
        <div>
            <Subtitle css={`margin-top: 2vw`}>Honorable Mention - NASADYA</Subtitle>
            <Logo src={NASADYA} alt="NASADYA" css={`width: 20vw`}/>
            <Text>NASADYA solves the growing problem of variability management in the 
                energy grid for power plants by converting a money-losing by-product 
                (excess energy) into valuable co-products (green hydrogen & oxygen).</Text>
            
            <Columns css={`text-align: center`}>
                <figure>
                    <Headshot src={Chaitanya} alt="Chaitanya Gulati" css={`width: 10vw; height: 10vw`}/>
                    <Name>Chaitanya Gulati</Name>
                </figure>
                <figure>
                    <Headshot src={Praneeth} alt="Praneeth Nagarjuna" css={`width: 10vw; height: 10vw`}/>
                    <Name>Praneeth <br/> Nagarjuna</Name>
                </figure>
                <figure>
                    <Headshot src={Devansh} alt="Devansh Sethia" css={`width: 10vw; height: 10vw`}/>
                    <Name>Devansh <br/> Sethia</Name>
                </figure>
                <figure>
                    <Headshot src={Khadeeja} alt="Khadeeja Malik" css={`width: 10vw; height: 10vw`}/>
                    <Name>Khadeeja <br/> Malik</Name>
                </figure>
                <figure>
                    <Headshot src={Dan} alt="Dan Duffy" css={`width: 10vw; height: 10vw`}/>
                    <Name>Dan Duffy</Name>
                </figure>
                <figure>
                    <Headshot src={Nate} alt="Nate Kraemer" css={`width: 10vw; height: 10vw`}/>
                    <Name>Nate Kraemer</Name>
                </figure>
                <figure>
                    <Headshot src={Madhu} alt="Madhu Devi" css={`width: 10vw; height: 10vw`}/>
                    <Name>Madhu Devi</Name>
                </figure>
            </Columns>

            <Text><b>LinkedIn:</b><br/>
            <Link href="https://www.linkedin.com/company/nasadya">https://www.linkedin.com/company/nasadya</Link>
            </Text>

        </div>
    )
}

const Summary = () => {
    return (
        <div css={`text-align: center`}>
            <hr css={`border-top: .2rem solid; 
                        width: 20vw; 
                        margin: 4vw auto`} />

            <div css={`margin: 0 10vw`}>
                <TeamSummary fontSize="0.8rem" fontColor={STEEL_BLUE}>The 2021 PCV Prize drew 87 competing teams from Penn, 
                Stanford, Columbia, UC Berkeley, U of Illinois, WashU, UTA, UChicago, UToronto, 
                Cornell, UCSB, Princeton, Yale, Rice, and more.
                </TeamSummary> <br/> <br/>
                <TeamSummary fontSize="0.6rem">
                Winning pitches were chosen from 10 finalist teams at our virtual pitch event by 
                judges from Fifty Years, Next47, Energy Impact Partners, and Generate Capital:
                </TeamSummary> <br/>
            </div>

            <Columns>
                <ColumnText>
                    <TeamSummary fontSize="0.6rem" fontColor={STEEL_BLUE}>Waste and Circularity</TeamSummary>
                    <TeamSummary fontSize="0.6rem">Happy Earth Company<br/>
                        College Thrifts<br/> <br/></TeamSummary>
                    <TeamSummary fontSize="0.6rem" fontColor={STEEL_BLUE}>Wild Card</TeamSummary>
                    <TeamSummary fontSize="0.6rem">Beyond Capacity <br/>
                            GarboCarbo<br/> <br/></TeamSummary>
                </ColumnText>

                <ColumnText>
                    <TeamSummary fontSize="0.6rem" fontColor={STEEL_BLUE}>Energy and Transportation</TeamSummary>
                    <TeamSummary fontSize="0.6rem">Renecycle<br/>
                        NASADYA<br/> <br/></TeamSummary>
                    <TeamSummary fontSize="0.6rem" fontColor={STEEL_BLUE}>High School</TeamSummary>
                    <TeamSummary fontSize="0.6rem">Team Chaeto <br/>
                        Promethean Energy<br/> <br/></TeamSummary>
                </ColumnText>

                <ColumnText>
                    <TeamSummary fontSize="0.6rem" fontColor={STEEL_BLUE}>Food and Agriculture</TeamSummary>
                    <TeamSummary fontSize="0.6rem">Axo<br/>
                        Folia<br/> <br/></TeamSummary>
                </ColumnText>
            </Columns>
        </div>
    );
}

const Winners2021 = () => {
    return (
        <div css={ `padding: 16vw;`}>
            <Title>2021 Winning Pitches</Title>
            <FirstPlace />
            <SecondPlace />
            <ThirdPlace />
            <HonorableMention />
            <Summary />
        </div>
    );
}

export default Winners2021