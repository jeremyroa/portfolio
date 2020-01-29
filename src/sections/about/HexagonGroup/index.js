import React from 'react'
import Hexagon from '../../../components/Hexagon/Hexagon'
import { Grid, Typography } from '@material-ui/core'
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import useStyles from './styles'
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Fade from 'react-reveal/Fade';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';

function HexagonGroup(props) {
    const classes = useStyles()
    return (
        <div>
            <Fade big cascade>
                <Grid container >
                    <Grid item container md={4} xs={12} sm={4} alignItems="center" direction="column">
                        <Hexagon>
                            <EmojiObjectsOutlinedIcon />
                        </Hexagon>
                        <Typography variant="h6" component="h4" className={classes.bold} >
                            1. Estudio
                        </Typography>
                        <Typography className={classes.paragraphIntuitive} >
                            Importante relacionarse con el tema a fin de entender el problema, para determinar las necesidades del cliente.
                        </Typography>
                    </Grid>

                    <Grid item container md={4} xs={12} sm={4} alignItems="center" direction="column">
                        <Hexagon>
                            <BorderColorIcon />
                        </Hexagon>
                        <Typography variant="h6" component="h4" className={classes.bold} >
                            2. Diseño
                        </Typography>
                        <Typography className={classes.paragraphIntuitive} >
                            Análisis de como va a funcionar el sistema, a través de diversas técnicas.
                        </Typography>
                    </Grid>
                    <Grid item container md={4} xs={12} sm={4} alignItems="center" direction="column">
                        <Hexagon>
                            <DesktopMacIcon />
                        </Hexagon>
                        <Typography variant="h6" component="h4" className={classes.bold} >
                            3. Desarrollo
                        </Typography>
                        <Typography className={classes.paragraphIntuitive} >
                            Implementación del producto final, continuamente con el feedback del cliente a lo largo del proyecto.
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

