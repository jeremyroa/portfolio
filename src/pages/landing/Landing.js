import React from 'react'
import SmoothScroll from '../../components/SmoothScroll'
import Header from '../../components/Header/Header'
import HeaderLinks from '../../components/Header/HeaderLinks'

function Landing() {
    return (
        <SmoothScroll>
            <div className="App">
            </div>
            <Header
                color="transparent"
                routes={[]}
                brand="Jeremy Roa"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 500,
                    color: "white"
                }}
            />
        </SmoothScroll>
    )
}

export default Landing
