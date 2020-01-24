import React, { useState } from 'react'
import Title from '../../components/Title/Title'
import useStyles from './styles'
import Accordion from './Accordion'
import Button from "@material-ui/core/Button";
import AutoRotatingCarouselModal from './AutoRotatingCarouselModal';
import { useMediaQuery } from '@material-ui/core';
const newProjects = [
    {
        title: 'Plotting Cat',
        subtitle: 'Diseñados para los mejores',
        media: [{ alt: 'cambio', img: 'https://miro.medium.com/max/3200/1*Asobnxejkl99Pde8Td1ajg.png' },
        { alt: 'cambio', img: "https://cdn.dribbble.com/users/32742/screenshots/4471172/one_stock_view_dribbb.png" },
        { alt: 'cambio', img: 'https://cdn.dribbble.com/users/486635/screenshots/3477972/attachments/766225/track_car_1.png' }
        ]
    },
    {
        title: 'Another Cat',
        subtitle: 'Diseñados para los mejores',
        media: [{ alt: 'cambio', img: 'https://www.sketchappsources.com/resources/source-image/dashboard-ui-kit-vol-3-sample.png' },
        { alt: 'cambio', img: "https://cdn.dribbble.com/users/32742/screenshots/4471172/one_stock_view_dribbb.png" },
        { alt: 'cambio', img: 'https://cdn.dribbble.com/users/486635/screenshots/3477972/attachments/766225/track_car_1.png' }
        ]
    },
]
function Projects(props) {
    const classes = useStyles()
    const [handleOpen, setHandleOpen] = useState({ open: false });
    const [projects] = useState(newProjects);
    const [currentProject, setCurrentProject] = useState(0);
    const handleClick = async (current) => {
        await setCurrentProject(current);
        setHandleOpen({ open: true });
    };
    const matches = useMediaQuery("(max-width:768px)");

    return (
        <section className={classes.projects}>
            <Title title="PROJECTS" />
            <Accordion onClick={handleClick} projects={projects} />
            <AutoRotatingCarouselModal
                isMobile={matches}
                projects={projects}
                handleOpen={handleOpen}
                currentProject={currentProject}
                setHandleOpen={setHandleOpen}
            />
        </section>
    )
}

Projects.propTypes = {

}

export default Projects

