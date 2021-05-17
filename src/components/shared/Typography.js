import s from "styled-components"

export const Title = s.h1`
  font-size: calc(${({ fontSize }) => fontSize || '2rem'} + 2vw);
  font-family: Roboto;
  font-weight: bold;
  color: #3083BC 
`

export const Subtitle = s.h2`
  font-size: calc(${({ fontSize }) => fontSize || '1rem'} + 1vw);
  font-family: ${({avenir}) => avenir ? `Avenir` : `Roboto`};
  font-weight: bold;
`

export const Heading3 = s.h3`
  font-size: calc(${({ fontSize }) => fontSize || '0.75rem'} + 1vw);
  font-family: ${({avenir}) => avenir ? `Avenir` : `Roboto`};
  font-weight: bold;
`

export const Text = s.p`
  font-size: calc(${({ fontSize }) => fontSize || '0.4rem'} + 1vw);
  font-family: ${({roboto}) => roboto ? `Roboto` : `Avenir`};
`

export const SubText = s.p`
  font-size: calc(${({ fontSize }) => fontSize || '.3rem'} + 1vw);
  font-family: ${({roboto}) => roboto ? `Roboto` : `Avenir`};
`