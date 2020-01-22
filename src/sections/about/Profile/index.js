import React from 'react'
import { Grid } from '@material-ui/core'
import Me from './Me'
import Skills from './Skills'
import Zoom from 'react-reveal/Zoom';

function Profile(props) {
    return (
        <div>
            <Zoom>
                <Grid container >
                    <Grid item container xs={12} md={6} alignItems="center" direction="column">
                        <Me />
                    </Grid>

                    <Grid item container xs={12} md={6} justify="center" alignItems="center" direction="column">
                        <Skills />
                    </Grid>
                </Grid>
            </Zoom>
        </div>
    )
}

Profile.propTypes = {

}

export default Profile

