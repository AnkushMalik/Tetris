import React from 'react'

import { Playground } from '../../components/playground/playground.component'
import { InfoNav } from '../../components/infonav/infonav.component'
import { createpg } from '../../helpers/playgroundHelper'
import './gamepage.styles.scss'

export const GamePage = () => (
    <div className="game-page">
        Hello World!
        <InfoNav />
        <Playground pg={createpg()} />
    </div>
)