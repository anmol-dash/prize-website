import s from "styled-components"
import {STEEL_BLUE, GREEN, FOCUS_GREEN} from "../../utils/constants"

export const Title = s.h1`
  font-size:${({ fontSize }) => fontSize || `4rem`};
  font-family: Roboto;
  font-weight: bold;
  color: ${STEEL_BLUE};
  line-height: 4rem;
`

export const Subtitle = s.h2`
  font-size:${({ fontSize }) => fontSize || `2rem`};
  font-family: ${({avenir}) => avenir ? `Avenir` : `Roboto`};
  font-weight: bold;
  ${({center}) => center && `text-align: center`}
  margin-top: 90px;
`

export const SmallTitle = s.h3`
  font-size:${({ fontSize }) => fontSize || `1.5rem`};
  font-family: ${({avenir}) => avenir ? `Avenir` : `Roboto`};
  font-weight: bold;
  ${({center}) => center && `text-align: center`}
`

export const Text = s.p`
  font-size:${({ fontSize }) => fontSize || `1.2rem`};
  font-family: ${({roboto}) => roboto ? `Roboto` : `Avenir`};
  color: ${({fontColor}) => fontColor || `black`};
  ${({bold}) => bold && `font-weight: bold`};
`

export const SubText = s.p`
  font-size:${({ fontSize }) => fontSize || `1rem`};
  font-family: ${({roboto}) => roboto ? `Roboto` : `Avenir`};
`

export const Link = s.a`
  font-size:${({ fontSize }) => fontSize || `1.2rem`};
  font-family: ${({roboto}) => roboto ? `Roboto` : `Avenir`};
    color: ${GREEN};
    ${({bold}) => bold && `font-weight: bold`};
    transition: 0.1s;

    &:hover {
      color: ${FOCUS_GREEN};
    }
`
