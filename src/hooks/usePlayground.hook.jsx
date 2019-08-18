import { useState } from 'react'

import { createpg } from '../helpers/playgroundHelper'

export const usePlayground = () => {
    const [pg, setPg] = useState(createpg());

    return [pg, setPg];
}