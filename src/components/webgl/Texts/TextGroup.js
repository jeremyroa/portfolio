import React, { useRef } from 'react'

import Text from './Text'


function TextGroup() {
    const ref = useRef()
    // useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3))
    return (
        <group ref={ref}>
            <Text children="Jeremy Roa" position={[0, 0.4, 0]} />
            <Text children="Desarrollador de Software" color={'#5AC3CA'} size={0.7} position={[0, 0, 0]} />
        </group>
    )
}

export default TextGroup