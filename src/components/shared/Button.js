import s from 'styled-components'
import { MIDNIGHT_BLUE } from "../../utils/constants"

const Button = s.a`
    background-color: transparent;
    border: .2rem solid ${MIDNIGHT_BLUE};
    outline: none;
    float: ${({ right }) => right ? "right" : "left"};
    padding: 1rem 3rem 1rem 3rem;
    color: ${MIDNIGHT_BLUE};
    cursor: pointer;
    border-radius: 999px;
    z-index: -1;
    font-size: ${({ fontSize }) => fontSize || '3rem'};
    font-family: Metropolis;

    :hover {
        background-color: ${MIDNIGHT_BLUE};
        color: white;
    }
`

export default Button
