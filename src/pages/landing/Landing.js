import React from 'react'
import SmoothScroll from '../../components/SmoothScroll'
import Header from '../../components/Header/Header'
import HeaderLinks from '../../components/Header/HeaderLinks'
import LeftLinks from '../../components/Header/LeftLinks'
import About from '../../sections/about/About'
import { container } from '../../assets/jss/nextjs-material-kit'
import { makeStyles } from '@material-ui/core'
import Projects from '../../sections/projects/Projects'
import LinearBG from '../../components/LinearBG/LinearBG'
import LinearBGFooter from '../../components/LinearBG/LinearBGFooter'
const useStyles = makeStyles({
    container: {
        ...container,
        paddingLeft: 0,
        paddingRight: 0,
    }
})
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
            <footer>
                
            </footer>
        </SmoothScroll>
    )
}

export default Landing
