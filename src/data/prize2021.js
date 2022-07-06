import React from "react";
import s from "styled-components"

import RosannaJiang from "../images/2021/winners/RosannaJiang.jpg";
import CarolineLi from "../images/2021/winners/CarolineLi.jpg";
import ZacharyHuangOgata from "../images/2021/winners/ZacharyHuang-Ogata.jpg";
import StephanieBi from "../images/2021/winners/StephanieBi.jpg";
import RyomaHarris from "../images/2021/winners/RyomaHarris.jpg";

const Headshot = s.img`
  max-height: 150px;
  max-width: 150px;
`

export const winners = [
  {
    groupTitle: "First Place",
    teams: [
      {
        teamName: "Team name",
        website: "website link",
        summary: "Team summary",
        pitch: "Pitch",
        members: [
          {
            name: "Member 1 name",
            linkedin: "linkedin link",
            school: "School name",
          },
        ],
      },
    ],
  },
  {
    groupTitle: "Second Place",
    teams: [
      {
        logo: "Logo",
        teamName: "Folia",
        website: "website link",
        summary: "Folia is a B2B Philadelphia-based company dedicated to diverting all food waste" +
                 "from the landfill. Through an online platform, they ensure quality matches " +
                 "between producers of food waste and food upcycling companies.",
        pitch: "https://tinyurl.com/FoliaPitch2021",
        members: [
          {
            name: "Rosanna Jiang",
            headshot: <Headshot src={RosannaJiang} alt={"Rosanna Jiang"}/>,
            linkedin: "https://www.linkedin.com/in/rosanna-jiang-a04139201/",
            school: "School name",
          },
          {
            name: "Caroline Li",
            headshot: <Headshot src={CarolineLi} alt={"Caroline Li"}/>,
            linkedin: "https://www.linkedin.com/in/caroline-l-185005128/",
            school: "School name",
          },
          {
            name: "Zachary Huang-Ogata",
            headshot: <Headshot src={ZacharyHuangOgata} alt={"Zachary Huang-Ogata"}/>,
            linkedin: "https://www.linkedin.com/in/zacharyhuangogata/",
            school: "School name",
          },
          {
            name: "Stephanie Bi",
            headshot: <Headshot src={StephanieBi} alt={"Stephanie Bi"}/>,
            linkedin: "https://www.linkedin.com/in/stephanie-b-ba88b1169/",
            school: "School name",
          },
          {
            name: "Ryoma Harris",
            headshot: <Headshot src={RyomaHarris} alt={"Ryoma Harris"}/>,
            linkedin: "https://www.linkedin.com/in/ryomah/",
            school: "School name",
          },
        ],
      },
    ]
  },
  {
    groupTitle: "Third Place",
    teams: [
      {
        teamName: "Team name",
        website: "website link",
        summary: "Team summary",
        pitch: "Pitch",
        members: [
          {
            name: "Member 1 name",
            linkedin: "linkedin link",
            school: "School name",
          },
        ],
      },
    ],
  },
  {
    groupTitle: "Honorable Mentions",
    teams: [
      {
        teamName: "Team name",
        website: "website link",
        summary: "Team summary",
        pitch: "Pitch",
        members: [
          {
            name: "Member 1 name",
            linkedin: "linkedin link",
            school: "School name",
          },
        ],
      },
      {
        teamName: "Team name",
        website: "website link",
        summary: "Team summary",
        pitch: "Pitch",
        members: [
          {
            name: "Member 1 name",
            linkedin: "linkedin link",
            school: "School name",
          },
        ],
      },
    ],
  },
]

export const finalists = [
  {
    track: "Energy and Transportation",
    teams: [
      {
        teamName: "Team name",
        members: [
          {
            name: "Member 1 name"
          },
        ]
      },
      {
        teamName: "Team name",
        members: [
          {
            name: "Member 1 name"
          },
        ]
      },
    ]
  },
  {
    track: "Food and Agriculture",
    teams: [
      {
        teamName: "Team name",
        members: [
          {
            name: "Member 1 name"
          },
        ]
      },
      {
        teamName: "Team name",
        members: [
          {
            name: "Member 1 name"
          },
        ]
      },
    ]
  },
  {
    track: "Waste and Circularity",
    teams: [
      {
        teamName: "Team name",
        members: [
          {
            name: "Member 1 name"
          },
        ]
      },
      {
        teamName: "Team name",
        members: [
          {
            name: "Member 1 name"
          },
        ]
      },
    ]
  },
  {
    track: "Wild Card",
    teams: [
      {
        teamName: "Team name",
        members: [
          {
            name: "Member 1 name"
          },
        ]
      },
      {
        teamName: "Team name",
        members: [
          {
            name: "Member 1 name"
          },
        ]
      },
    ]
  },
  {
    track: "High School",
    teams: [
      {
        teamName: "Team name",
        members: [
          {
            name: "Member 1 name"
          },
        ]
      },
      {
        teamName: "Team name",
        members: [
          {
            name: "Member 1 name"
          },
        ]
      },
    ]
  },
]
