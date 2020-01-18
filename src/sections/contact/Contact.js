import React from 'react'
import { Typography, TextField, withStyles, Button } from '@material-ui/core'
import Title from '../../components/Title/Title'
import useStyles from './styles';
import ContactForm from './ContactForm';
import SocialButtons from './SocialButtons';


function Contact() {
    const classes = useStyles()
    return (
        <section className={classes.contact}>
            <Title
                title="CONTACT"
                color="#fff"
            />
            <Typography style={{ color: 'white', textAlign: 'center', marginTop: '-20px' }}>
                Let's build something special together
                </Typography>
            <ContactForm />
            <Typography variant="h5" className={classes.titleSocial}>
                Visita mis redes sociales
                </Typography>
            <SocialButtons />
            <div className={classes.containerPhrase}>
                <Typography variant="h4" className={classes.phrase}>
                    “A fuerza de nadar en las grandes olas se aprende a flotar en los triunfos”.
                </Typography>
            </div>

        </section>
    )
}

export default Contact
