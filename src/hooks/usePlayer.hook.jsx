import { useState } from 'react'
import { randomTtr } from '../helpers/tetrominos'

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: randomTtr().state,
        collided: false
    });
    return [player];
}