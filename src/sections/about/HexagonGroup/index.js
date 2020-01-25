import React from 'react'
import Hexagon from '../../../components/Hexagon/Hexagon'
import { Grid, Typography } from '@material-ui/core'
import Phonelink from '@material-ui/icons/Phonelink'
import AccessAlarm from '@material-ui/icons/AccessAlarm'
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import SendIcon from '@material-ui/icons/Send';
import useStyles from './styles'
import Fade from 'react-reveal/Fade';

function HexagonGroup(props) {
    const classes = useStyles()
    return (
        <div>
            <Fade big cascade>
                <Grid container >
                    <Grid item container md={3} xs={12} sm={6} alignItems="center" direction="column">
                        <Hexagon>
                            <Phonelink />
                        </Hexagon>
                        <Typography variant="h6" component="h4" className={classes.bold} >
                            Creativo
                    </Typography>
                        <Typography className={classes.paragraphIntuitive} >
                            Fast load times and lag free interaction, my highest priority.
                    </Typography>
                    </Grid>

                    <Grid item container md={3} xs={12} sm={6} alignItems="center" direction="column">
                        <Hexagon>
                            <EmojiObjectsOutlinedIcon />
                        </Hexagon>
                        <Typography variant="h6" component="h4" className={classes.bold} >
                            Flexible
                        </Typography>
                        <Typography className={classes.paragraphIntuitive} >
                            Fast load times and lag free interaction, my highest priority.
                    </Typography>
                    </Grid>
                    <Grid item container md={3} xs={12} sm={6} alignItems="center" direction="column">
                        <Hexagon>
                            <SendIcon />
                        </Hexagon>
                        <Typography variant="h6" component="h4" className={classes.bold} >
                            Rápido
                        </Typography>
                        <Typography className={classes.paragraphIntuitive} >
                            Fast load times and lag free interaction, my highest priority.
                        </Typography>
                    </Grid>
                    <Grid item container md={3} xs={12} sm={6} alignItems="center" direction="column">
                        <Hexagon>
                            <AccessAlarm />
                        </Hexagon>
                        <Typography variant="h6" component="h4" className={classes.bold} >
                            Responsable
                        </Typography>
                        <Typography className={classes.paragraphIntuitive} >
                            Fast load times and lag free interaction, my highest priority.
                        </Typography>
                    </Grid>
                </Grid>
            </Fade>
        </div>
    )
}

HexagonGroup.propTypes = {

}

export default HexagonGroup

