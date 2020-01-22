import React from 'react'
import useStyles from './styles'
import { Typography } from '@material-ui/core';
import Fade from 'react-reveal/Fade';


function Accordion() {
    const classes = useStyles();
    return (
        <Fade big cascade>
            <div className={classes.accordionContainer}>
                <div className={classes.itemAccordion}>
                    <img alt="cat" src="https://miro.medium.com/max/3200/1*Asobnxejkl99Pde8Td1ajg.png" />
                    <Typography className="itemHeadAccordion">Plotting Cat</Typography>
                </div>
                <div className={classes.itemAccordion}>
                    <img alt="cat" src="https://www.sketchappsources.com/resources/source-image/dashboard-ui-pierluigigiglio.jpg" />
                    <Typography className="itemHeadAccordion">Angry Cat</Typography>
                </div>
                <div className={classes.itemAccordion}>
                    <img alt="cat" src="https://www.sketchappsources.com/resources/source-image/dashboard-ui-kit-vol-3-sample.png" />
                    <Typography className="itemHeadAccordion">Curious Cat</Typography>
                </div>
                <div className={classes.itemAccordion}>
                    <img alt="cat" src="https://cdn.dribbble.com/users/32742/screenshots/4471172/one_stock_view_dribbb.png" />
                    <Typography className="itemHeadAccordion">Prowling Cat</Typography>
                </div>
                <div className={classes.itemAccordion}>
                    <img alt="cat" src="https://cdn.dribbble.com/users/486635/screenshots/3477972/attachments/766225/track_car_1.png" />
                    <Typography className="itemHeadAccordion">Sleepy Cat</Typography>
                </div>
                <div className={classes.itemAccordion}>
                    <img alt="cat" src="https://cdn.dribbble.com/users/32742/screenshots/4471172/one_stock_view_dribbb.png" />
                    <Typography className="itemHeadAccordion">Prowling Cat</Typography>
                </div>
            </div>

        </Fade>
    )
}

export default Accordion
