import React, { useRef, Suspense } from 'react'
import { Canvas, Dom } from "react-three-fiber"

import { Button } from '@material-ui/core'
import Lines from '../../components/webgl/Lines/Lines'
import Stars from '../../components/webgl/Stars/Stars'
import Rig from '../../components/webgl/Rig/Rig'
import TextGroup from '../../components/webgl/Texts/TextGroup'
import useStyles from './styles'
import { Link } from 'react-scroll'

function Home() {
    const mouse = useRef([0, 0])
    const classes = useStyles()
    return (
        <div className={classes.containerCanvas}>
            <Canvas camera={{ position: [0, 0, 10], fov: 25 }}
                onMouseMove={e => (mouse.current = [e.clientX - window.innerWidth / 2, e.clientY - window.innerHeight / 2])}
            >
                <Suspense fallback={<Dom center className="loading" children={<p children="Cargando componentes..." className={classes.white} />} />}>
                    <Lines count={130} colors={['#e6e0e3']} />
                    <Stars count={300} />
                    <Rig mouse={mouse} />
                    <TextGroup />
                </Suspense>
            </Canvas>
            <div className={classes.containerButton}>
                <div>
                    <Link to="about" smooth={true}
                        duration={500}
                        offset={-50}>
                        <Button variant="outlined" color="secondary">Ver mi Trabajo</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Home
