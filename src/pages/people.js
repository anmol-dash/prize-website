import React from "react"
import s from "styled-components"
import "./styles.scss"
import { Title, Text, Subtitle, Link } from "../components/shared/Typography"
import { Navbar, Footer } from "../components"
import Headshot from "../components/shared/Headshot"

import AndrewBeebe from "../images/2022/andrew_beebe.png"
import ElaineHsieh from "../images/2022/ElaineHsieh.jpg"
import Vasiliki from "../images/2022/Vasiliki.jpg"
import KatieGardner from "../images/2022/KatieGardner.jpg"
import RaghavPoddar from "../images/2022/RaghavPoddar.jpg"
import JackPolicar from "../images/2022/JackPolicar.jpg"
import RyanJeffrey from "../images/2022/RyanJeffrey.png"
import DavidIzikowitzLogo from "../images/2022/DavidIzikowitzLogo.jpg"
import AmberLuong from "../images/2022/AmberLuong.jpg"
import JustinHeyman from "../images/2022/JustinHeyman.jpg"
import EricLee from "../images/2022/EricLee.jpg"
import DanielKriozere from "../images/2022/DanielKriozere.jpg"
import PoojaTilvawala from "../images/2022/Pooja_Tilvawala.jpg"
import NicholasYiu from "../images/2022/NicholasYiu.jpg"
import RolandScott from "../images/2022/RolandScott.png"


import SEO from "../components/seo"

const GridLayout = s.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const KeynoteList = [
  {
    imageSrc: AndrewBeebe,
    imageAlt: "Andrew Beebe",
    name: "Andrew Beebe",
    description:<>Managing Director @ <Link href="https://obvious.com/">Obvious Ventures</Link> </>,
    linkedIn: "https://www.linkedin.com/in/andrewbeebe/"
  },
  {
    imageSrc: ElaineHsieh,
    imageAlt: "ElaineHsieh",
    name: "Elaine Hsieh",
    description:<>Co-Founder and Chief Marketing Officer @ <Link href="https://www.third-derivative.org/">Third Derivative</Link></>,
    linkedIn: "https://www.linkedin.com/in/elaineishere/",
    bio: "Bringing 25 years of industry experience leading, managing, and consulting on a wide range of sustainability, green building, clean energy, and technology issues, Elaine is passionate about the power of multi-stakeholder alignment and helping people understand and respect the interconnectedness of our world.\
    Elaine is currently focused on scaling up Third Derivative (D3) — a vertically-integrated global climate tech accelerator program founded by RMI and New Energy Nexus. D3 has been building an inclusive ecosystem to rapidly find, fund and scale climate tech innovation globally. By uniting and aligning committed investors, global corporates, and RMI's market, regulatory, and policy experts — all the stakeholders needed to bridge gaps faster — supported by financing and insights along the way, D3 increases the rate at which climate innovations can help us achieve a prosperous, equitable, and inclusive 1.5-degrees C world.\
    Prior to joining the D3 leadership team, Elaine was widely recognized as the program director for VERGE at GreenBiz — the premier global event series focused on scaling solutions that bridge technology, sustainability, and systems-thinking across cities and industries. She has also had careers as a green building consultant, utility business strategist, engineer, and technologist. Elaine graduated from Duke University with a Master’s degree in engineering management and a Bachelor’s in biomedical engineering."
    
  }
]

const PanelistList = [
]

const JudgeList = [
  {
    imageSrc: Vasiliki,
    imageAlt: "Vasiliki Papanikolopoulos",
    name: "Vasiliki Papanikolopoulos",
    description: <>Founder and Creative Director @ <Link href="https://www.coimatan.com/">Coimatan</Link></>,
    linkedIn: "https://www.linkedin.com/in/vasilikipapanikolopoulos/",
    bio: "Vasiliki founded Coimatan, a think tank for local retail, with a passion for disrupting the status quo to bring about positive change at the intersection of social, environmental, and economic impact. Prior to starting Coimatan, Vasiliki was a part of startups, corporations, and venture capital firms leading marketing, procurement, strategy, and business development projects. Vasiliki is a B Leader certified by B Lab, the leading social organization for business and holds a B.S. in Chemical and Biomolecular Engineering from the University of Pennsylvania."
  },
  {
    imageSrc: KatieGardner,
    imageAlt: "Katie Gardner",
    name: "Katie Gardner",
    description: <>Product Manager @ <Link href="https://www.banyaninfrastructure.com/">Banyan Infrastructure</Link></>,
    linkedIn: "https://www.linkedin.com/in/kathryndgardner/",
    bio: "Katie is passionate about climate solutions, primarily clean technology, renewable energy, and sustainability, which stems from her lifelong love of the outdoors and desire to leave the world a better place. Currently she is working in cleantech as a product manager and legal counsel for Banyan Infrastructure, where she has been since completing the Wharton and Penn Law JD/MBA program in May 2020. Prior to graduate school, she was an underground mining engineer for Newmont in Northeast Nevada and is a 2013 Mining Engineering graduate of the University of Kentucky College of Engineering."
  },
  {
    imageSrc: RaghavPoddar,
    imageAlt: "Raghav Poddar",
    name: "Raghav Poddar",
    description: <>CEO @ <Link href="https://www.forwardkitchens.com/">Forward Kitchens</Link></>,
    linkedIn: "https://www.linkedin.com/in/bypoddar",
    bio: "Raghav is the CEO and co-founder of Forward Kitchens, a ghost kitchen startup backed by Y Combinator, Floodgate, Slow Ventures, SV Angel. Raghav studied Computer Science at Columbia University and graduated in 2019 after which he joined Y Combinator's Summer 2019 batch. Raghav aims to better allocate underutilized kitchens and help mom and pop restaurants earn additional revenue through their kitchens."
  },
  {
    imageSrc: JackPolicar,
    imageAlt: "Jack Policar",
    name: "Jack Policar",
    description: <>Co-Director @ The Climate Wiki</>,
    linkedIn: "https://www.linkedin.com/in/jack-policar/",
    bio: "Jack Policar is a multi-time founder originally from the Bay Area and now living in beautiful Colorado. He is a Product Manager at Toucan Protocol where he leads the Builder Hub helping companies build with programmable carbon. He is also the Co-Director of The Climate Wiki, a crowdsourced database for climate resources and information. developer.toucan.earth / theclimate.wiki"
  },
  {
    imageSrc: RyanJeffrey,
    imageAlt: "Ryan Jeffrey",
    name: "Ryan Jeffrey",
    description: <>Managing Director of Sustainability @ <Link href="https://www.gener8tor.com/">gener8tor</Link></>,
    linkedIn: "https://www.linkedin.com/in/rcjeffery/",
    bio: "Ryan Jeffery is an experienced entrepreneur, investor and advisor who helps leaders and organizations do their best work. With over a decade of experience founding and building high-growth organizations, Ryan is focused on supporting early-stage companies at the forefront of our climate and environmental crisis as the Managing Director of sustainability at gener8tor. Ryan is a three-time founder (one acquired), investor, board member, and advisor to numerous startups."
  },
  {
    imageSrc: DavidIzikowitzLogo,
    imageAlt: "David Izikowitz",
    name: "David Izikowitz",
    description: <>CEO @ <Link href="https://www.carboninfinity.com/">Carbon Infinity</Link></>,
    linkedIn: "https://www.linkedin.com/in/david-izikowitz/",
    bio: "I co-founded MYEO (an EdTech social business based in Yangon, Myanmar) while at the University of Hong Kong in 2015 and ran the company for over two years alongside my studies. I have an academic background in both engineering and finance and my work has spanned roles across technology, product, strategy and growth for social impact oriented startups in Greater China, South-East Asia, and the UK. I have been engaged in an advisory capacity by both government agencies in the Philippines and some of the biggest startups in China.\
    In 2018 I transitioned to a focus on clean technology and carbon removal, later enrolling in a Masters in Environmental Engineering program in Shanghai. Alongside starting a Direct Air Capture company (Carbon Infinity - www.carboninfinity.com) - capturing and sequestering CO2 directly from the air and closing the carbon cycle with products for hard-to-abate industries, I am also researching economic de-fossilisation pathways and avenues to commercialise carbon removal solutions.\
    I am always keen to meet new people with an interest in all things clean/climate tech, carbon removal and policy. Feel free to drop me a message!"
  },
  {
    imageSrc: AmberLuong,
    imageAlt: "Amber Luong",
    name: "Amber Luong",
    linkedIn: "https://www.linkedin.com/in/ambercluong/",
    bio: "Amber has nearly 20 years of experience across the financial sector, policy, international development, and a range of climate change mitigation and adaptation efforts. In her last role, Amber was the Head of Partnerships for Blue Sky Analytics, a climate tech startup focused on environmental data products combining satellite data and AI."
  }
]

const MentorList = [
  {
    imageSrc: JustinHeyman,
    imageAlt: "Justin Heyman",
    name: "Justin Heyman",
    description: <>Managing Director @ <Link href="https://www.springgp.com/">Spring Growth Partners</Link></>,
    linkedIn: "https://www.linkedin.com/in/justin-heyman/",
    bio: "Investor with over 15 years of experience in the energy and environmental sustainability space. Currently work as a Managing Director for Spring Growth Partners, where I make private equity investments in companies that both positively impact environmental sustainability and deliver strong financial returns."
  },
  {
    imageSrc: EricLee,
    imageAlt: "Eric Lee",
    name: "Eric Lee",
    description: <>Vice President @ <Link href="https://www.alignedclimatecapital.com/">Aligned Climate Capital</Link></>,
    linkedIn: "https://www.linkedin.com/in/elee1593/",
    bio: "Eric Lee is a Vice President with Aligned Climate Capital, an asset manager that invests exclusively in the companies and real assets that are decarbonizing the global economy and its infrastructure. In this role, Eric leads Aligned’s Environmental, Social, and Governance (ESG) analysis of climate infrastructure and venture capital investment opportunities.\
    Previously, Eric was an investment professional at TriLinc Global, a global impact investing fund manager. Prior to TriLinc, he worked at Sustainable Insight Capital Management, an ESG public equities fund. Eric holds a B.S. from Cornell University and an M.S. in Sustainability Management with a concentration in Sustainable Finance from Columbia University."
  },
  {
    imageSrc: DanielKriozere,
    imageAlt: "Daniel Kriozere",
    name: "Daniel Kriozere",
    description: <>Principal @ <Link href="https://www.joinc3.co/">C3</Link></>,
    linkedIn: "https://www.linkedin.com/in/danielkriozere/",
    bio: "Daniel is a Principal at C3, Tech Scout at For ClimateTech, and Venture Scout at Prithvi - and has an extensive network within the broader climate investment and startup community.\
    https://danielkr.io/"
  },
  {
    imageSrc: RaghavPoddar,
    imageAlt: "Raghav Poddar",
    name: "Raghav Poddar",
    description: <>CEO @ <Link href="https://www.forwardkitchens.com/">Forward Kitchens</Link></>,
    linkedIn: "https://www.linkedin.com/in/bypoddar",
    bio: "Raghav is the CEO and co-founder of Forward Kitchens, a ghost kitchen startup backed by Y Combinator, Floodgate, Slow Ventures, SV Angel. Raghav studied Computer Science at Columbia University and graduated in 2019 after which he joined Y Combinator's Summer 2019 batch. Raghav aims to better allocate underutilized kitchens and help mom and pop restaurants earn additional revenue through their kitchens."
  },
  {
    imageSrc: PoojaTilvawala,
    imageAlt: "Pooja Tilvawala",
    name: "Pooja Tilvawala",
    description: <>Founder @ <Link href="https://youthcc.org/">Youth Climate Collaborative</Link>, Youth Engagement Manager @ <Link href="https://www.theclimateinitiative.org/">The Climate Initiative</Link></>,
    linkedIn: "https://www.linkedin.com/in/pooja-tilvawala/",
    bio: "Pooja was born in India but raised near Philadelphia. In 2018, she graduated from American University with degrees in Economics and International Studies, specializing in justice, ethics, and human rights, and South Asia. After graduating, Pooja worked as a Project Associate for the Meridian Institute, committed to collaborative problem-solving on environmental issues.\
    In January 2022, she began her role as Youth Engagement Manager of The Climate Initiative. She also works part-time as the Executive Director of Youth Climate Collaborative, which she founded in November 2020. Her latest project is a podcast, Dare to Envision.\
    She is active in networks and programs including YOUNGO (the official UNFCCC youth constituency), Coalition WILD, and Aspen Institute’s Future Leaders Climate Summit. Her purpose in life is to nurture her curiosity and creativity, encourage herself and others to challenge the status quo, and unite people to improve the quality of life for all."
  },
  {
    imageSrc: NicholasYiu,
    imageAlt: "Nicholas Yiu",
    name: "Nicholas Yiu",
    description: <>Co-Founder @ <Link href="https://www.intercalation.co/">Intercalation</Link></>,
    linkedIn: "https://www.linkedin.com/in/nicholasyiu/",
    bio: "Nicholas is currently at UCL Business commercialising early-stage research from UCL, Co-Founder & Author at Intercalation where he writes and advises about battery tech, and advisor for various organizations and companies."
  },
  {
    imageSrc: RolandScott,
    imageAlt: "Roland Scott",
    name: "Roland Scott",
    description: <>Principal and Co-Founder @ <Link href="https://www.cleanenergyanalytics.com/">Clean Energy Analytics</Link></>,
    linkedIn: "https://www.linkedin.com/in/roland-scott-7937751/",
    bio: "A semi-retired business executive and management consultant with a long history in energy markets and renewables. He currently is a NYSERDA entrepreneur in residence, lead mentor at the CleanTech Open, NSF I-Corps industry mentor, Praxis Center for Venture Development mentor, as well as other organizations. He advises on entrepreneurship, business development execution, financing, and strategy. Prior experience includes B2B markets for energy technology, business software, industrial products, communications, sensors, biotech and med sciences."
  }
]

const PCVPrizeTeamList = [

]

const mapPeople = peopleList => {
  peopleList.sort((a, b) => { return a.name.localeCompare(b.name) })
  return peopleList.map(person => {
    const { imageSrc, imageAlt, name, description, linkedIn, bio } = person
    return (
      <>
        <Headshot
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          name={name}
          description={description}
          linkedIn={linkedIn}
          bio={bio}/>
      </>
    )
  })
}

//keynote
const Keynote = () => {
  return (
    <div>
      <Subtitle>Keynote Speakers</Subtitle>
      <GridLayout>
        {mapPeople(KeynoteList)}
      </GridLayout>
    </div>
  )
}

//panelists
const Panelists = () => {
  return (
    <div>
      <Subtitle>Panelists</Subtitle>
      <GridLayout>
        {mapPeople(PanelistList)}
      </GridLayout>
    </div>
  )
}

//judges
const Judges = () => {
  return (
    <div>
      <Subtitle>Judges</Subtitle>
      <GridLayout>
        {mapPeople(JudgeList)} 
      </GridLayout>
    </div>
  )
}

//moderators
const Mentors = () => {
  return (
    <div>
      <Subtitle>Mentors</Subtitle>
      <GridLayout>
        {mapPeople(MentorList)}
      </GridLayout>
    </div>
  )
}

//PCV team, advisors, and other core members
const PCVTeam = () => {
  return (
    <div>
      <Subtitle>PCV Prize Team</Subtitle>
      <GridLayout>
        {mapPeople(PCVPrizeTeamList)} 
      </GridLayout>
    </div>
  )
}

const People = () => {
  return (
    <>
      <SEO title="2021 People" defer={false} />
      <Navbar />
      <div css={`padding: 90px 12vw;`}>
        <Title css={`margin-bottom: 15px`}>People (2022)</Title>
        <Keynote/>
        <br />
        <Judges/>
        <br/>
        <Mentors/>
        {/* <br/>
        <Panelists/> */}
        {/* <br />
        <PCVTeam/> */}
      </div>
      <Footer />
    </>
  )
}

export default People;
