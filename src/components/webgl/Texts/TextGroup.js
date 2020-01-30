import React, { useRef } from 'react'

import Text from './Text'
import { useThree, useFrame } from 'react-three-fiber'


function TextGroup() {
    const ref = useRef()
    useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.togethery = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.2))
    const { size } = useThree()

    const responsive = {
        mobile: size.width < 550,
        tablet: size.width < 750,
        miniLaptop: size.width < 1000,
        pc: size.width < 1500,
        pcMax: size.width >= 1500,
    }
    let sizeLetter = 0.4 
    switch (true) {
        case responsive.mobile:
            sizeLetter = 1
            break;
        case responsive.tablet:
            sizeLetter = 0.7
            break;
        case responsive.miniLaptop:
            sizeLetter = 0.6
            break;
        case responsive.pc:
            sizeLetter = 0.5
            break;
        case responsive.pcMax:
            sizeLetter = 0.4
            break;
        default:
            sizeLetter = 1
            break;
    }

    const w = size.width * sizeLetter
    return (
        <group ref={ref}>
            <Text size={(w) * 0.0016} children="JEREMY ROA" position={[0, (w) * 0.0008 , 0]} />
            <Text children="Desarrollador de Software" color={'#5AC3CA'} size={(w) * 0.0013} position={[0, 0, 0]} />
        </group>
    )
}

export default TextGroup