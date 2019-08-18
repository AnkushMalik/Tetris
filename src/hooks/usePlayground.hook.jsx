import { useState } from 'react'

import { createpg } from '../helpers/playgroundHelper'

export const usePlayeground = () => {
    const [pg, setPg] = useState(createpg());

    return [pg, setPg];
}