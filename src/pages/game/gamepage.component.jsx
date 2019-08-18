import React from 'react'

import { Playground } from '../../components/playground/playground.component'
import { DisplayField } from '../../components/display-field/display-field.component'
import { ActionButton } from '../../components/action-button/actionbutton.component'
import { createpg } from '../../helpers/playgroundHelper'
import './gamepage.styles.scss'

export const GamePage = () => (
    <div className="game-page">
        <Playground pg={createpg()} />
        <div className='infonav'>
            <DisplayField text='Score :' />
            <DisplayField text='Rows :' />
            <DisplayField text='Level :' />
            <ActionButton />
        </div>
    </div>
)