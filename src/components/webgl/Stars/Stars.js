import React, { useMemo } from 'react'

import Star from './Star'

function Stars({ count }) {
    const stars = useMemo(() => new Array(count).fill().map((val, i) => <Star key={'star' + i} />), [count])
    return stars;
}

export default Stars
