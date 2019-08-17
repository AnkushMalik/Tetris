import React from 'react'

import { StylishCell } from './cell-styled.component'
import { TETROMINOS } from '../../helpers/tetrominos'

export const Cell = (props) => (
    <StylishCell type={props.type} color={TETROMINOS[props.type].color}></StylishCell >
)