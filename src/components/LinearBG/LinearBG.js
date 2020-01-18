import React from 'react'
import useStyles from './styles'

function LinearBG() {
    const classes = useStyles();
    return (
        <div className={classes.containerLinear}>
            <div className={classes.linear}>
                <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
    )
}

export default LinearBG
