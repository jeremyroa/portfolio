import React from 'react'
import Title from '../../components/Title/Title'
import HexagonGroup from './HexagonGroup/'
import Profile from './Profile/'


function About(props) {
    return (
        <section className="about">
            <Title title="PERFIL" />
            <HexagonGroup />
            <Profile />
        </section>
    )
}

About.propTypes = {

}

export default About

