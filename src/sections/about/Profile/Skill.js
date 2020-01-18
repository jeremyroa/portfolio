import React from 'react'
import { LinearProgress, Typography } from '@material-ui/core'
import useStyles from './styles'

function Skill({ title = "", percent = "" }) {
    const classes = useStyles()

    return (
        <div className={classes.containerLinear}>
            <Typography variant="subtitle1" className={`${classes.tag} ${classes.bold}`}>{title}</Typography>
            <LinearProgress className={classes.linearProgress} variant="determinate" value={percent} />
            <Typography variant="subtitle1" className={`${classes.percent} ${classes.bold}`}>{`${percent}%`}</Typography>
        </div>
    )
}

export default Skill
