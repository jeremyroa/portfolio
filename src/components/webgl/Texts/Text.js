import React, { useMemo } from 'react'
import { useLoader, useUpdate } from "react-three-fiber"

import * as THREE from 'three'

function Text({ children, vAlign = 'center', hAlign = 'center', size = 1, color = new THREE.Color(), ...props }) {
    const font = useLoader(THREE.FontLoader, '/MOONGET_Heavy.blob')
    const config = useMemo(
        () => ({ font, size: 2, height: 0 }),
        [font]
    )

    const mesh = useUpdate(
        self => {
            const size = new THREE.Vector3()
            self.geometry.computeBoundingBox()
            self.geometry.boundingBox.getSize(size)
            self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
            self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
        },
        [children]
    )
    return (
        <group {...props} scale={[0.1 * size, 0.1 * size, 0.01]}>
            <mesh ref={mesh}>
                <textGeometry attach="geometry" colors={[color, color, color]} args={[children, config]} />
                <meshPhysicalMaterial alphaTest={1} transparent side={THREE.BackSide} depthTest depthWrite attach="material" color={new THREE.Color('#fff')} emissive={new THREE.Color(color)} fog={false} flatShading />
            </mesh>
        </group>
    )
}

export default Text
