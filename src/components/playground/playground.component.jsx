import React from 'react'

import { Cell } from '../cell/cell.component'
import './playground.styles.scss'

export const Playground = ({ pg }) => (
    <div className='playground'>
        {
            pg.map(e =>
                e.map((cell, idx) => <Cell key={idx} type={cell[0]} />)
            )
        }
    </div>
)