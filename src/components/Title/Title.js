import React from 'react'
import { Typography } from '@material-ui/core'
import useTitleStyle from '../../assets/jss/general-styles/components/titleStyle'
import Bounce from 'react-reveal/Bounce';

export default function Title({ title = "", color }) {
    const classes = useTitleStyle()
    return (
        <>
            <div className={classes.flexCenter}>
                <Bounce right>
                    <Typography variant="h4" component="h2" style={{ color: color ? color : '' }} >
                        {title}
                    </Typography>
                </Bounce>
                <Bounce left>
                    <div className={classes.headerBar} style={{ background: color ? color : '' }}></div>
                </Bounce>
            </div>
        </>
    )
}
