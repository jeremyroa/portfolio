import React from 'react'
import Title from '../../components/Title/Title'
import useStyles from './styles'
import Accordion from './Accordion'

function Projects(props) {
    const classes = useStyles()
    return (
        <section className={classes.projects}>
            <Title title="PROJECTS" />
            <Accordion />
        </section>
    )
}

Projects.propTypes = {

}

export default Projects

