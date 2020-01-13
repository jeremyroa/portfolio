import React from 'react'
import PropTypes from 'prop-types'
import Title from '../../components/Title/Title'
import HexagonGroup from './HexagonGroup/'


function About(props) {
    return (
        <section className="about">
            <Title title="ABOUT" />
            <HexagonGroup />
        </section>
    )
}

About.propTypes = {

}

export default About

