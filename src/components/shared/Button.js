import React from 'react'
import { Text } from "../shared/Typography"
import { MIDNIGHT_BLUE } from "../../utils/constants"

const Button = ({ className, children, right, fontSize }) => (
    <button 
        className={className}
        css={`
        background-color: transparent;
        border: .2rem solid ${MIDNIGHT_BLUE};
        outline: none;
        float: ${right ? "right" : "left"};
        padding: 1rem 3rem 1rem 3rem;
        color: ${MIDNIGHT_BLUE};
        cursor: pointer;
        border-radius: 999px;
        
        :hover {
            background-color: ${MIDNIGHT_BLUE};
            color: white;
        }
    `}>
        <Text fontSize={fontSize}>
            {children}
        </Text>
    </button>
)

export default Button
