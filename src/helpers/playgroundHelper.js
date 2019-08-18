export const pgwidth = 12   //4*3
export const pgheight = 20  //4*5

export const createpg = () => (
    Array.from(Array(pgheight), () =>
        new Array(pgwidth).fill([0, 'clear'])
    )
);

export const checkCollision = (player, playground, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino[y].length; x += 1) {
            // 1. Check that we're on an actual Tetromino cell
            if (player.tetromino[y][x] !== 0) {
                if (
                    // 2. Check that our move is inside the game areas height (y)
                    // That we're not go through bottom of the play area
                    !playground[y + player.pos.y + moveY] ||
                    // 3. Check that our move is inside the game areas width (x)
                    !playground[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    // 4. Check that the cell wer'e moving to isn't set to clear
                    playground[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
                    'clear'
                ) {
                    return true;
                }
            }
        }
    }
    // 5. If everything above is false
    return false;
};