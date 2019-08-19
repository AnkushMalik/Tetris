import React, { useState } from 'react'

import { Playground } from '../../components/playground/playground.component'
import { DisplayField } from '../../components/display-field/display-field.component'
import { ActionButton } from '../../components/action-button/actionbutton.component'
import { usePlayground } from '../../hooks/usePlayground.hook'
import { useInterval } from '../../hooks/useInterval.hook'
import { usePlayer } from '../../hooks/usePlayer.hook'
import { createpg, checkCollision } from '../../helpers/playgroundHelper';

import './gamepage.styles.scss'

export const GamePage = () => {

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [pg, setPg] = usePlayground(player, resetPlayer);

    const startGame = () => {
        //Reset everything
        setPg(createpg());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
    }

    const movePlayer = dir => {
        if (!checkCollision(player, pg, { x: dir, y: 0 }))
            updatePlayerPos({ x: dir, y: 0 })
    }

    const drop = () => {
        if (!checkCollision(player, pg, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false })
        } else {
            if (player.pos.y < 1) {
                setGameOver(true);
                setDropTime(null);
                console.log('Game Over!');
            }
            updatePlayerPos({ x: 0, y: 0, collided: true })
        }
    }
    console.log(player.pos)

    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            // Activate the interval again when user releases down arrow.
            if (keyCode === 40) {
                setDropTime(1000);
            }
        }
    }

    const dropPlayer = () => {
        setDropTime(null);
        drop();
    }

    useInterval(() => {
        drop();
    }, dropTime);

    const move = ({ keyCode }) => {
        if (!gameOver) {
            switch (keyCode) {
                case 37:
                    movePlayer(-1)
                    break;
                case 39:
                    movePlayer(1)
                    break;
                case 40:
                    dropPlayer();
                    break;
                case 38:
                    playerRotate(pg, 1)
            }
        }
    }

    return (
        <div className="game-page" role='button' tabIndex='0' onKeyUp={keyUp} onKeyDown={e => move(e)}>
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