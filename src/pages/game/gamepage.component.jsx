import React, { useState } from 'react'

import { Playground } from '../../components/playground/playground.component'
import { DisplayField } from '../../components/display-field/display-field.component'
import { ActionButton } from '../../components/action-button/actionbutton.component'
import { usePlayground } from '../../hooks/usePlayground.hook'
import { usePlayer } from '../../hooks/usePlayer.hook'

import './gamepage.styles.scss'
import { createpg } from '../../helpers/playgroundHelper';

export const GamePage = () => {

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [pg, setPg] = usePlayground(player, resetPlayer);

    const startGame = () => {
        //Reset everything
        setPg(createpg());
        resetPlayer();
    }

    const movePlayer = dir => {
        updatePlayerPos({ x: dir, y: 0, collided: false })
    }

    const drop = () => {
        updatePlayerPos({ x: 0, y: 1, collided: false })
    }

    const dropPlayer = () => {
        drop();
    }

    const move = ({ keyCode }) => {
        if (!gameOver) {
            switch (keyCode) {
                case 37:
                    movePlayer(-1)
                    break;
                case 39:
                    movePlayer(1)
                case 40:
                    dropPlayer();
            }
        }
    }
    console.log(player.tetromino)

    return (
        <div className="game-page" onKeyDown={e => move(e)}>
            <Playground pg={pg} />
            <div className='infonav'>
                {gameOver ? (
                    <DisplayField text='Game Over' />
                ) : (
                        <div>
                            <DisplayField text='Score :' />
                            <DisplayField text='Rows :' />
                            <DisplayField text='Level :' />
                            <ActionButton callback={startGame} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}