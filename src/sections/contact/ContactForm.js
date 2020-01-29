import React, { useState } from 'react'
import { TextField, withStyles, Button, CircularProgress } from '@material-ui/core'
import useStyles from './styles';

const ContactTextField = withStyles((theme) => ({
    root: {
        marginBottom: '15px',
        width: '80%',
        "@media (min-width: 576px)": {
            width: '70%',
        },
        "@media (min-width: 768px)": {
            width: '40%',
        },
        '& label.MuiFormLabel-root': {
            color: '#fff'
        },
        '&:hover label.MuiFormLabel-root': {
            color: theme.palette.primary.main + '!important'
        },
        '& label.Mui-focused': {
            color: theme.palette.primary.main,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: theme.palette.primary.main,
        },
        '& .MuiInputBase-root': {
            color: '#fff'
        },
        '& .MuiOutlinedInput-input:-webkit-autofill': {
            WebkitTransitionDelay: '999999999s',
            transitionDelay: '999999999s',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#fff',
                color: '#fff'
            },
            '&:hover fieldset': {
                borderColor: theme.palette.primary.main,
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.primary.main,
            },
        },
    },
}))(TextField);


function ContactForm() {
    const classes = useStyles()
    let [contact, setContact] = useState({
        email: '',
        name: '',
        message: '',
    })
    let [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!contact.name || !contact.email || !contact.message) {
            alert('Completa los datos')
        }
        setLoading(true)
        const options = {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        }
        fetch('https://getform.io/f/3fe9e672-2c8f-48fa-bca5-c7eec6455d43', options)
            .then(res => res.json())
            .then(u => {
                setLoading(false)
                setContact({
                    email: '',
                    name: '',
                    message: '',
                })
                alert('Datos enviados')
            })
            .catch(u => {
                setLoading(false)
                alert('Error en el envio de datos')
            })
    }

    return (
        <form className={classes.formContact}>

            <ContactTextField InputLabelProps={{
                shrink: true
            }} id="name" value={contact.name} required label="Nombre" type="text" variant="outlined" maxLength="40" onChange={(e) =>
                setContact({
                    ...contact,
                    name: e.target.value
                })
            } />
            <ContactTextField InputLabelProps={{
                shrink: true
            }} id="email" value={contact.email} required label="Correo Electrónico" type="email" variant="outlined" onChange={(e) =>
                setContact({
                    ...contact,
                    email: e.target.value
                })
            } />
            <ContactTextField value={contact.message} required InputLabelProps={{
                shrink: true
            }} id="message" multiline label="Mensaje" type="text" variant="outlined" rows="9" onChange={(e) =>
                setContact({
                    ...contact,
                    message: e.target.value
                })
            } />
            <div className={classes.containerButton}>
                {!loading && 
                    <Button variant="contained" onClick={handleSubmit} type="submit" color="primary">
                        Enviar
                    </Button>
                }
                {loading && 
                    <CircularProgress color="primary" size={50} />
                }
            </div>
        </form>
    )
}

export default ContactForm
