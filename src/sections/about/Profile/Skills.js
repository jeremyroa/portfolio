import React from 'react'
import useStyles from './styles'
import Skill from './Skill'

function Skills() {
    const classes = useStyles()

    return (
        <>
            <div className={classes.containerSkills}>
                <Skill percent="90" title="HTML/CSS" />
                <Skill percent="90" title="JavaScript" />
                <Skill percent="80" title="React js" />
                <Skill percent="80" title="React Native" />
                <Skill percent="60" title="Node js" />
                <Skill percent="75" title="PHP/Laravel" />
                <Skill percent="75" title="Ruby/Rails" />
                <Skill percent="55" title="C++/Qt" />
                <Skill percent="80" title="MySQL" />
                <Skill percent="80" title="PostgreSQL" />
                <Skill percent="80" title="MongoDB" />
            </div>
        </>
    )
}

export default Skills
