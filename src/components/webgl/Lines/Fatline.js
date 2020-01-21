import React, { useRef } from 'react'
import { useFrame, extend } from "react-three-fiber"

import * as meshline from 'threejs-meshline'
extend(meshline)

export function Fatline({ curve, width, color, speed }) {
    const material = useRef()
    useFrame(() => (material.current.uniforms.dashOffset.value -= speed))
    return (
        <mesh>
            <meshLine attach="geometry" vertices={curve} />
            <meshLineMaterial attach="material" ref={material} transparent depthTest={false} lineWidth={width} color={color} dashArray={0.06} dashRatio={0.977} />
        </mesh>
    )
}

export default Fatline
