export const pgwidth = 12   //4*3
export const pgheight = 20  //4*5

export const createpg = () => (
    Array.from(Array(pgheight), () =>
        new Array(pgwidth).fill([0, 'clear'])
    )
);
