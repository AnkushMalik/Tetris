import { useState, useEffect } from 'react'

import { createpg } from '../helpers/playgroundHelper'

export const usePlayground = (player, resetPlayer) => {
    const [pg, setPg] = useState(createpg());

    useEffect(() => {
        const updatepg = prevPG => {
            //clean the playground
            const newpg = prevPG.map(
                row => row.map(
                    cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)
                )
            );
            //draW TETROMINO
            player.tetromino.forEach((row, y) => {
                row.forEach((val, x) => {
                    if (val !== 0) {
                        newpg[y + player.pos.y][x + player.pos.x] = [
                            val,
                            `${player.collided ? 'merge' : 'clear'}`
                        ]
                    }
                })
            });
            return newpg;
        }
        setPg(prev => updatepg(prev))
    }, [player])

    return [pg, setPg];
}