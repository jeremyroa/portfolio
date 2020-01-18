import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './styles'
import Me from './Me'
import Skills from './Skills'

function Profile(props) {
    const classes = useStyles()
    return (
        <div>
            <Grid container >
                <Grid item container xs={12} md={6} alignItems="center" direction="column">
                    <Me />
                </Grid>

                <Grid item container xs={12} md={6} justify="center" alignItems="center" direction="column">
                    <Skills />
                </Grid>
            </Grid>
        </div>
    )
}

Profile.propTypes = {

}

export default Profile

