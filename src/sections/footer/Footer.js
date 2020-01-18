import React from 'react'
import { Typography, Fab, makeStyles } from '@material-ui/core'
import { KeyboardArrowUp } from '@material-ui/icons'
import useStyles from './styles'

function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Fab color='primary' className={classes.up}>
                <KeyboardArrowUp fontSize="large" />
            </Fab>
            <Typography className={classes.paragraph}>
                © All rights are reserved | 2020 | Made with <span aria-label="heart"> 💖 </span>  by Jeremy :)
            </Typography>
        </footer>
    )
}

export default Footer
