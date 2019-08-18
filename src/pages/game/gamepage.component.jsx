import React, { useState } from 'react'

import { Playground } from '../../components/playground/playground.component'
import { DisplayField } from '../../components/display-field/display-field.component'
import { ActionButton } from '../../components/action-button/actionbutton.component'
import { usePlayground } from '../../hooks/usePlayground.hook'
import { usePlayer } from '../../hooks/usePlayer.hook'

import './gamepage.styles.scss'

export const GamePage = () => {

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player] = usePlayer();
    const [pg, setPg] = usePlayground();


    return (
        <div className="game-page">
            <Playground pg={pg} />
            <div className='infonav'>
                {gameOver ? (
                    <DisplayField text='Game Over' />
                ) : (
                        <div>
                            <DisplayField text='Score :' />
                            <DisplayField text='Rows :' />
                            <DisplayField text='Level :' />
                            <ActionButton />
                        </div>
                    )
                }
            </div>
        </div>
    )
}