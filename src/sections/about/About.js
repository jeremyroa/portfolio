import React from 'react'
import PropTypes from 'prop-types'
import Title from '../../components/Title/Title'
import HexagonGroup from './HexagonGroup/'
import Profile from './Profile/'


function About(props) {
    return (
        <section className="about">
            <Title title="ABOUT" />
            <HexagonGroup />
            <Profile />
        </section>
    )
}

About.propTypes = {

}

export default About

