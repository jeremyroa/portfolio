import React from 'react'
import { makeStyles, Typography, TextField, withStyles, Button } from '@material-ui/core'
import Title from '../../components/Title/Title'
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
    return (
        <form className={classes.formContact}>

            <ContactTextField InputLabelProps={{
                shrink: true
            }} id="outlined-basic" label="Name" variant="outlined" />
            <ContactTextField InputLabelProps={{
                shrink: true
            }} id="outlined-basic" label="Email" variant="outlined" />
            <ContactTextField InputLabelProps={{
                shrink: true
            }} id="outlined-basic" multiline label="Message" variant="outlined" rows="5" />
            <div className={classes.containerButton}>
                <Button variant="contained" color="primary">Send</Button>
            </div>
        </form>
    )
}

export default ContactForm
