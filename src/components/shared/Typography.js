import s from "styled-components"
import {STEEL_BLUE, GREEN, FOCUS_GREEN} from "../../utils/constants"

export const Title = s.h1`
  font-size: calc(${({ fontSize }) => fontSize || '2.5rem'} + 2vw);
  font-family: Roboto;
  font-weight: bold;
  color: ${STEEL_BLUE};
`

export const Subtitle = s.h2`
  font-size: calc(${({ fontSize }) => fontSize || '1rem'} + 1vw);
  font-family: ${({avenir}) => avenir ? `Avenir` : `Roboto`};
  font-weight: bold;
  ${({center}) => center && `text-align: center`}
`

export const Text = s.p`
  font-size: calc(${({ fontSize }) => fontSize || '0.3rem'} + 1vw);
  font-family: ${({roboto}) => roboto ? `Roboto` : `Avenir`};
  color: ${({fontColor}) => fontColor || `black`};
  ${({bold}) => bold && `font-weight: bold`};
`

export const SubText = s.p`
  font-size: calc(${({ fontSize }) => fontSize || '.2rem'} + 1vw);
  font-family: ${({roboto}) => roboto ? `Roboto` : `Avenir`};
`

export const Link = s.a`
    font-size: calc(${({ fontSize }) => fontSize || '0.3rem'} + 1vw);
    font-family: ${({roboto}) => roboto ? `Roboto` : `Avenir`};
    color: ${GREEN};
    ${({bold}) => bold && `font-weight: bold`};

    &:hover {
      color: ${FOCUS_GREEN};
    }
`