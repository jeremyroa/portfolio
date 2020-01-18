import React from 'react'
import SmoothScroll from '../../components/SmoothScroll'
import Header from '../../components/Header/Header'
import HeaderLinks from '../../components/Header/HeaderLinks'
import LeftLinks from '../../components/Header/LeftLinks'
import About from '../../sections/about/About'
import { container } from '../../assets/jss/nextjs-material-kit'
import { makeStyles, Typography, TextField, fade, withStyles, Button } from '@material-ui/core'
import Projects from '../../sections/projects/Projects'
import LinearBG from '../../components/LinearBG/LinearBG'
import LinearBGFooter from '../../components/LinearBG/LinearBGFooter'
import Title from '../../components/Title/Title'
import Contact from '../../sections/contact/Contact'

const CssTextField = withStyles((theme) => ({
    root: {
        marginBottom: '15px',
        width: '40%',
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


const useStyles = makeStyles((theme) => ({
    container: {
        ...container,
        paddingLeft: 0,
        paddingRight: 0,
    },
    footer: {
        background: '#252934'
    },
    formContact: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
}))
function Landing() {
    const classes = useStyles()
    return (
        <SmoothScroll>
            <Header
                color="primary"
                routes={[]}
                leftLinks={<LeftLinks />}
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 500,
                    color: "white"
                }}
            />
            <div className={[classes.container, 'App'].join(' ')}>
                <About />
            </div>
            <LinearBG />
            <Projects />
            <LinearBGFooter />
            <Contact />
        </SmoothScroll>
    )
}

export default Landing
