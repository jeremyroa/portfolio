import React from 'react'
import SmoothScroll from '../../components/SmoothScroll'
import Header from '../../components/Header/Header'
import HeaderLinks from '../../components/Header/HeaderLinks'
import LeftLinks from '../../components/Header/LeftLinks'
import About from '../../sections/about/About'
import { container } from '../../assets/jss/general-styles'
import { makeStyles } from '@material-ui/core'
import Projects from '../../sections/projects/Projects'
import LinearBG from '../../components/LinearBG/LinearBG'
import LinearBGFooter from '../../components/LinearBG/LinearBGFooter'
import Contact from '../../sections/contact/Contact'
import Footer from '../../sections/footer/Footer'
import { Element } from 'react-scroll'
import Home from '../../sections/home/Home'

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

        <>
            <SmoothScroll>
                <Home />
                <Header
                    color="primary"
                    routes={[]}
                    leftLinks={<LeftLinks />}
                    rightLinks={<HeaderLinks />}
                />
                <Element name="about" >
                    <div className={[classes.container, 'App'].join(' ')}>
                        <About />
                    </div>
                </Element>
                <LinearBG />
                <Element name="project" >
                    <Projects />
                </Element>
                <Element name="contact" >
                    <LinearBGFooter />
                    <Contact />
                    <Footer />
                </Element>
            </SmoothScroll>
        </>
    )
}

export default Landing
