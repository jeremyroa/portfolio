import React from 'react'
import PropTypes from 'prop-types'
import Title from '../../components/Title/Title'
import useStyles from './styles'
import Accordion from './Accordion'

function Projects(props) {
    const classes = useStyles()
    return (
        <section className={classes.projects}>
            <Title title="PROJECTS" />
            <Accordion />
            {/* <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
                <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
            </svg> */}
        </section>
    )
}

Projects.propTypes = {

}

export default Projects

