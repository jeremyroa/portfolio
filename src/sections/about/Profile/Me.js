import React from 'react'
import PropTypes from 'prop-types'
import { CardMedia, Typography } from '@material-ui/core'
import useStyles from './styles'
// import imgMe from '../../../../public/me.jpeg'
function Me(props) {
    const classes = useStyles()
    return (
        <>
            <CardMedia image={'me.jpeg'} title="Jeremy Roa" className={classes.mediaImage} />
            <Typography variant="h5" className={classes.bold} >
                Who's this guy?
            </Typography>
            <Typography variant="h6" className={classes.paragraphIntuitive} >
                I'm the Front-End Developer for EyeCue Lab in Portland, OR.
                I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                Let's make something special.
                CSS
            </Typography>
        </>
    )
}

Me.propTypes = {

}

export default Me

