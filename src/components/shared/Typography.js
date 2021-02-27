import s from "styled-components"

export const Title = s.h1`
  font-size: ${({ fontSize }) => fontSize || '8rem'};
  font-family: Roboto Condensed; 
`

export const Subtitle = s.h2`
  font-size: ${({ fontSize }) => fontSize || '3.5rem'};
  font-family: ${({roboto}) => roboto ? `Roboto Condensed` : `Metropolis`};
  font-weight: bold;
`

export const Text = s.p`
  font-size: ${({ fontSize }) => fontSize || '2.5rem'};
  font-family: ${({roboto}) => roboto ? `Roboto Condensed` : `Metropolis`};
`

export const SubText = s.p`
  font-size: ${({ fontSize }) => fontSize || '2rem'};
  font-family: ${({roboto}) => roboto ? `Roboto Condensed` : `Metropolis`};
`
