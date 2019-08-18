import { useState, useCallback } from 'react'
import { randomTtr } from '../helpers/tetrominos'
import { pgwidth } from '../helpers/playgroundHelper';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: randomTtr.shape,
        collided: false
    });

    const updatePlayerPos = ({ x, y, collided }) => {
        setPlayer(prev => ({
            pos: { x: (player.pos.x + x), y: (player.pos.y + y) },
            collided: collided
        }))
    }

    const resetPlayer = useCallback(
        () => {
            setPlayer({
                pos: { x: pgwidth / 2, y: 0 },
                tetromino: randomTtr.shape,
                collided: false
            })
        }, [])
    return [player, updatePlayerPos, resetPlayer];
}