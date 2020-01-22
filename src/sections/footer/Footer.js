import React from 'react'
import { Typography, Fab } from '@material-ui/core'
import { KeyboardArrowUp } from '@material-ui/icons'
import useStyles from './styles'
import { animateScroll as scroll } from 'react-scroll'

function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Fab color='primary' className={classes.up} onClick={() => scroll.scrollToTop()}>
                <KeyboardArrowUp fontSize="large" />
            </Fab>
            <Typography className={classes.paragraph}>
                © All rights are reserved | 2020 | Made with <span role="img" aria-label="heart"> 💖 </span>  by Jeremy :)
            </Typography>
        </footer>
    )
}

export default Footer
