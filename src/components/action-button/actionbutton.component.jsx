import React from 'react'

import { StyledButton } from './styledaction.component'
export const ActionButton = ({ callback }) => (
    <StyledButton onClick={callback}>
        Start!
    </StyledButton>
)