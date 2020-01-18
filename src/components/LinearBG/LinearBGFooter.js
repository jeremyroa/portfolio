import React from 'react'
import useStyles from './styles'

function LinearBGFooter() {
    const classes = useStyles();
    return (
        <div className={classes.containerFooterLinear}>
            <div className={classes.footerLinear}>
                <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
                    <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="#1B242F" stroke-width="120" stroke-linecap="round" />
                </svg>
            </div>
        </div>
    )
}

export default LinearBGFooter
