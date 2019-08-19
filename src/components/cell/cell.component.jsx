import React from 'react'

import { StylishCell } from './cell-styled.component'
import { TETROMINOS } from '../../helpers/tetrominos'

const Cell = (props) => {
    return (
        <StylishCell type={props.type} color={TETROMINOS[props.type].color}></StylishCell >
    )
}


export default Cell