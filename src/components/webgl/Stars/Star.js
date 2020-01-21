import React, { useRef } from 'react'

import * as THREE from 'three'
import { getRandomFloat } from '../../../config/functions'


function Star() {
    let material = useRef()
    // useFrame(() => {
    //     material.current.t += 0.01
    //     material.current.__container.scale.x = material.current.__container.scale.y = material.current.__container.scale.z = Math.sin(material.current.t) + 1
    // })
    return (
        <mesh
            position={new THREE.Vector3(Math.random() - 0.5,
                Math.random() - 0.5,
                -Math.random() * 0.5).normalize().multiplyScalar(getRandomFloat(100, 300))}
        >
            <sphereBufferGeometry attach="geometry" args={[0.5, 2, 2]} />
            <meshBasicMaterial attach="material" ref={material} color={'0xECF0F1'} transparent opacity={0.3} t={0} />
        </mesh>
    )
}

export default Star
