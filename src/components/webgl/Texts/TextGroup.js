import React, { useRef } from 'react'

import Text from './Text'
import { useThree, useFrame } from 'react-three-fiber'


function TextGroup() {
    const ref = useRef()
    // useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.togethery = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3))

    const { size, viewport } = useThree()
    const viewportWidth = viewport.width
    const viewportHeight = viewport.height
    const mobile = size.width < 950
    const w = size.width * (mobile ? 0.8 : 0.4)
    return (
        <group ref={ref}>
            <Text size={(w) * 0.0016} children="Jeremy Roa" position={[0, (w) * 0.0008 , 0]} />
            <Text children="Desarrollador de Software" color={'#5AC3CA'} size={(w) * 0.0012} position={[0, 0, 0]} />
        </group>
    )
}

export default TextGroup