import s from "styled-components"

export const Title = s.h1`
  font-size: ${({ fontSize }) => fontSize || '10rem'};
  font-family: Roboto Condensed; 
`

export const Subtitle = s.h2`
  font-size: ${({ fontSize }) => fontSize || '4rem'};
  font-family: ${({roboto}) => roboto ? `Roboto Condensed` : `Metropolis`};
  font-weight: bold;
`

export const Text = s.p`
  font-size: ${({ fontSize }) => fontSize || '3rem'};
  font-family: ${({roboto}) => roboto ? `Roboto Condensed` : `Metropolis`};
`

export const SubText = s.p`
  font-size: ${({ fontSize }) => fontSize || '2rem'};
  font-family: ${({roboto}) => roboto ? `Roboto Condensed` : `Metropolis`};
`
