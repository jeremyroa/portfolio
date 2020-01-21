import React, { useMemo } from 'react'

import * as THREE from 'three'
import { getRandomFloat } from '../../../config/functions'
import Fatline from './Fatline'

function Lines({ count, colors }) {
    const lines = useMemo(
        () =>
            new Array(count).fill().map(() => {
                const pos = new THREE.Vector3(10 - Math.random() * 20, 10 - Math.random() * 20, 10 - Math.random() * 20)
                const points = new Array(30).fill().map(() => pos.add(new THREE.Vector3(getRandomFloat(-4, 5),
                    getRandomFloat(-3, 5),
                    getRandomFloat(-2, 5))).clone())
                const curve = new THREE.CatmullRomCurve3(points).getPoints(1000)
                return {
                    color: colors[parseInt(colors.length * Math.random())],
                    width: 0.005,
                    speed: Math.max(0.0001, 0.0002 * Math.random()),
                    curve
                }
            }),
        [colors, count]
    )
    return lines.map((props, index) => <Fatline key={index} {...props} />)
}

export default Lines
