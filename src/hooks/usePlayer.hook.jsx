import { useState, useCallback } from 'react'
import { TETROMINOS, randomTtr } from '../helpers/tetrominos'
import { pgwidth, checkCollision } from '../helpers/playgroundHelper';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: TETROMINOS[0].shape,
        collided: false
    });

    function rotate(matrix, dir) {
        const mtrx = matrix.map((_, index) => matrix.map(column => column[index])); //transpose
        if (dir > 0) return mtrx.map(row => row.reverse());     //clockwise rotated matrix
        return mtrx.reverse();
    }

    function playerRotate(pg, dir) {
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

        const pos = clonedPlayer.pos.x;
        let offset = 1;
        while (checkCollision(clonedPlayer, pg, { x: 0, y: 0 })) {
            clonedPlayer.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > clonedPlayer.tetromino[0].length) {
                rotate(clonedPlayer.tetromino, -dir);
                clonedPlayer.pos.x = pos;
                return;
            }
        }
        setPlayer(clonedPlayer);
    }

    const updatePlayerPos = ({ x, y, collided }) => {
        setPlayer(prev => ({
            ...prev,
            pos: { x: (player.pos.x += x), y: (player.pos.y += y) },
            collided: collided
        }))
    }

    const resetPlayer = useCallback(
        () => {
            setPlayer({
                pos: { x: pgwidth / 2 - 1, y: 0 },
                tetromino: randomTtr().shape,
                collided: false
            })
        }, [])
    return [player, updatePlayerPos, resetPlayer, playerRotate];
}