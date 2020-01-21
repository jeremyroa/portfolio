import React from 'react'
import { Typography } from '@material-ui/core'
import useTitleStyle from '../../assets/jss/general-styles/components/titleStyle'

export default function Title({ title = "", color }) {
    const classes = useTitleStyle()
    return (
        <>
            <div className={classes.flexCenter}>
                <Typography variant="h4" component="h2" style={{ color: color ? color : '' }} >
                    {title}
                </Typography>
                <div className={classes.headerBar} style={{ background: color ? color : '' }}></div>
            </div>
        </>
    )
}
