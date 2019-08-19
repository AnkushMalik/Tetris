import { useState, useEffect } from 'react'

import { createpg } from '../helpers/playgroundHelper'

export const usePlayground = (player, resetPlayer) => {
    const [pg, setPg] = useState(createpg());
    const [rowsCleared, setRowsCleared] = useState(0);

    useEffect(() => {
        setRowsCleared(0);

        const sweepRows = newpg =>
            newpg.reduce((ack, row) => {
                if (row.findIndex(cell => cell[0] === 0) === -1) {
                    setRowsCleared(prev => prev + 1);
                    ack.unshift(new Array(newpg[0].length).fill([0, 'clear']));
                    return ack;
                }
                ack.push(row);
                return ack;
            }, []);


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
            // check collision
            if (player.collided) {
                resetPlayer();
                return sweepRows(newpg);
            }


            return newpg;
        }
        setPg(prev => updatepg(prev))
    }, [player, resetPlayer])

    return [pg, setPg, rowsCleared];
}