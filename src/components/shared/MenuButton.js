import s from 'styled-components'
import { mediaMaxWidth } from "../../utils/constants"

const MenuButton = s.a`
    background-color: transparent;
    border: .2rem solid #363635;
    outline: none;
    //float: ${({ right }) => right ? "right" : "left"};
    padding: 0.6rem 2.8rem 0.6rem 2.8rem;
    color: #363635;
    cursor: pointer;
    z-index: -1;
    font-size: calc(${({ fontSize }) => fontSize || '0.4rem'} + 1vw);
    font-family: roboto bold;
    font-weight: bold;
    transition: 0.2s;

    :hover {
        background-color: #363635;
        color: white;
    }

    ${mediaMaxWidth("768px")} {
        padding: .5rem 1.25rem .5rem 1.25rem;
    }
`

export default MenuButton
