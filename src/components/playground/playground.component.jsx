import React from 'react'

import Cell from '../cell/cell.component'
import { PgDiv } from './pg-style.component'

export const Playground = ({ pg }) => (
    <PgDiv height={pg.length} width={pg[0].length}>
        {

            pg.map(e =>
                e.map((cell, idx) => <Cell key={idx} type={cell[0]} />)
            )
        }
    </PgDiv>
)