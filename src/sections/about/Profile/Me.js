import React from 'react'
import { CardMedia, Typography } from '@material-ui/core'
import useStyles from './styles'
// import imgMe from '../../../../public/me.jpeg'
function Me(props) {
    const classes = useStyles()
    return (
        <>
            {/* <img src="me.png" className={classes.mediaImage} alt="Jeremy Roa" /> */}
            <CardMedia image={'me.jpg'} title="Jeremy Roa" className={classes.mediaImage} />
            <Typography variant="h5" className={classes.bold} >
                ¿Quién soy?
            </Typography>
            <Typography variant="h6" component="p" className={classes.paragraphIntuitive} >
                Desarrollador de aplicaciones web y móviles (+1 año de experiencia) con la facilidad de crear las mejores soluciones en el menor tiempo posible, desde realizar un algoritmo que permita resolver el juego de buscaminas hasta desarrollar un sistema para el manejo de proyectos tecnológicos. Me apasionan los desafíos, el emprendimiento, la administración de proyectos, las últimas tecnologías, el uso de la inteligencia artificial y las buenas prácticas. 
            </Typography>
        </>
    )
}

Me.propTypes = {

}

export default Me

