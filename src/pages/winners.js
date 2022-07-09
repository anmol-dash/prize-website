import React from "react"
import s from "styled-components"
import {Footer, Navbar} from "../components";
import SEO from "../components/seo";
import {SmallTitle, Subtitle, Text, Title} from "../components/shared/Typography";

import {winners} from "../data/prize2022"
import {finalists} from "../data/prize2022"
import {STEEL_BLUE} from "../utils/constants";

const WinnersLayout = s.div`
`

const WinnerGroup = s.div`
  margin: 30px 0;
`

const WinnerGroupTitle = s(SmallTitle)`
  text-align: center;
`

const WinnerTeam = s.div`
  margin: 15px auto;
  max-width: 800px;
`

const WinnerTeamName = s(SmallTitle)`
  color: ${STEEL_BLUE};
`

const FinalistsLayout = s.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 45px;
  margin-top: 60px;
`

const FinalistsTrackLayout = s.div`
  display: flex;
  flex-flow: column wrap;
`

const FinalistTrackTitle = s(SmallTitle)`
  font-size: 1.2rem;
  color: ${STEEL_BLUE};
  margin: 0 auto;
`

const Winners = () => (
  <>
    <SEO title="2022 Winners" defer={false} />
    <Navbar />
    <div css={`padding: 90px 12vw;`}>
      <Title>2022 Winning Pitches</Title>

      <Subtitle>Winners</Subtitle>
      <WinnersLayout>

        {winners.map((group) => (
          <WinnerGroup>

            <WinnerGroupTitle>{group.groupTitle}</WinnerGroupTitle>

            {group.teams.map((team) => (
              <WinnerTeam>
                <WinnerTeamName>{team.teamName}</WinnerTeamName>

                {team.summary}

                <ul>
                  {team.members.map((member) => (
                    <li>
                      {member.name}, {member.school}
                    </li>
                  ))}
                </ul>
              </WinnerTeam>
            ))}

          </WinnerGroup>
        ))}

      </WinnersLayout>

      <Subtitle>Finalists</Subtitle>
      <FinalistsLayout>
        {finalists.map((track) => (
          <FinalistsTrackLayout>
            <FinalistTrackTitle>{track.track}</FinalistTrackTitle>
            {track.teams.map((team) => (
              <div>
                <Text bold>{team.teamName}</Text>
                {team.members.map((member) => (
                  <li>
                    {member.name}, {member.school}
                  </li>
                ))}
              </div>
            ))}
          </FinalistsTrackLayout>
        ))}
      </FinalistsLayout>
    </div>
    <Footer />
  </>
)

export default Winners
