import React from 'react'

import { StyledDisplay } from './display-style.component'

export const DisplayField = ({ gameOver, text }) => (
    <StyledDisplay gameOver={gameOver}>
        {text}
    </StyledDisplay>
)