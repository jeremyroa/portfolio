import React from 'react'
import { Typography } from '@material-ui/core'
import useTitleStyle from '../../assets/jss/nextjs-material-kit/components/titleStyle'

export default function Title({title = ""}) {
    const classes = useTitleStyle()
    return (
        <>
        <div className={classes.flexCenter}>
            <Typography variant="h4" component="h2" >
                {title}
            </Typography>
            <div className={classes.headerBar}></div>
        </div>
        </>
    )
}
