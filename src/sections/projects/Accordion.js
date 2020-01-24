import React from 'react'
import useStyles from './styles'
import { Typography } from '@material-ui/core';
// import Fade from 'react-reveal/Fade';


function Accordion({ onClick, projects }) {
    const classes = useStyles();
    return (
        // <Fade big cascade>
        <div className={classes.accordionContainer}>
            {projects.map((p,i) =>
                (
                    <div key={p.title} onClick={() => onClick(i)} className={classes.itemAccordion}>
                        <img alt={p.media[0].src} src={p.media[0].img} />
                        <Typography className="itemHeadAccordion">{p.title}</Typography>
                    </div>
                ))}
        </div>

        // </Fade>
    )
}

export default Accordion
