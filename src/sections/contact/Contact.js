import React from 'react'
import { Typography } from '@material-ui/core'
import Title from '../../components/Title/Title'
import useStyles from './styles';
import ContactForm from './ContactForm';
import SocialButtons from './SocialButtons';
import Fade from 'react-reveal/Fade';


function Contact() {
    const classes = useStyles()
    return (
        <section className={classes.contact}>
            <Title
                title="CONTACTO"
                color="#fff"
            />
            <Typography className={classes.special}>
                ¡Vamos a construir algo especial juntos!
            </Typography>
            <Fade big>
                <ContactForm />
            </Fade>
            <Typography variant="h5" component="p" className={classes.titleSocial}>
                Visita mis redes sociales
            </Typography>
            <SocialButtons />
            <div className={classes.containerPhrase}>
                <Typography variant="h4" component="p" className={classes.phrase}>
                    “A fuerza de nadar en las grandes olas se aprende a flotar en los triunfos”.
                </Typography>
            </div>

        </section>
    )
}

export default Contact
