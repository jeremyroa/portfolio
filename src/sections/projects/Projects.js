import React, { useState } from 'react'
import Title from '../../components/Title/Title'
import useStyles from './styles'
import Accordion from './Accordion'
import Button from "@material-ui/core/Button";
import AutoRotatingCarouselModal from './AutoRotatingCarouselModal';
import { useMediaQuery } from '@material-ui/core';
const newProjects = [
    {
        title: 'DrinkPass',
        subtitle: 'Consigue las mejores ofertas de bebidas en los mas exclusivos bares',
        media: [
            { alt: 'login', img: 'img/drinkpass/1.png', subtitle: 'Consigue las mejores ofertas de bebidas en los mas exclusivos bares', },
            { alt: 'home', img: 'img/drinkpass/2.png', subtitle: 'Incluye sistema de compras y suscripción, configuración de visualización de datos, representación de mapas, conexión con apis externas, etc.', },
            { alt: 'extra', img: 'img/drinkpass/3.png', subtitle: 'Encargado de conexión con apis externas, sistema de compras y suscripción, creación de interface y creación de endpoints. Realizado con: React Native, Laravel y MySQL',  },
        ]
    },
    {
        title: 'PingoPass',
        subtitle: 'Encuentra los mejores cursos para inscribir a tus hijos',
        media: [
            { alt: 'login', img: 'img/pingopass/1.png', subtitle: 'Encuentra los mejores cursos para inscribir a tus hijos', },
            { alt: 'home', img: 'img/pingopass/2.png', subtitle: 'Cuenta con sistema de compras y suscripción, notificaciones, visualización de mapas, conexión con distinas api rest, etc.', },
            { alt: 'extra', img: 'img/pingopass/3.png', subtitle: 'Realizado con: React Native, Redux, Laravel y MySQL', },
            // Encargado de la conexión de api, sistema de compras y suscripción y creación de interfaces. 
        ]
    },
    {
        title: 'Data Recovery Lab',
        subtitle: 'Diseñados para los mejores',
        media: [
            { alt: 'cambio', img: "img/datarecovery/1.png", subtitle: 'Ve el estado de reparación tu dispositivo electrónico y disfruta de las últimas noticias respecto a tecnología', },
            { alt: 'cambio', img: 'img/datarecovery/2.png', subtitle: 'Visualización de noticias, lista de dispositivos, solicitud de reparación y más', },
            { alt: 'cambio', img: 'img/datarecovery/3.png', subtitle: 'Realizado en: React Native, Node js y MySQL ', }
            // Encargado de la conexión de apis, módulos de backend, creación de interfaces. 
        ]
    },
    {
        title: 'Gesproa Admin',
        subtitle: 'Diseñados para los mejores',
        media: [{ alt: 'cambio', img: 'img/gesproa/1.png', subtitle: 'Sistema administrativo para el diagnóstico y mejoramiento de la equidad de género de las empresas en Chile', },
        { alt: 'cambio', img: "img/gesproa/2.png", subtitle: 'Implementación de encuesta, roles de usuarios, generación de archivos PDF y Excel, etc.', },
        { alt: 'cambio', img: 'img/gesproa/3.png', subtitle: 'Realizado con: Ruby On Rails, MySQL y Bulma.' }
        // Encargado de la creación de interfaces y archivos PDF y Excel. 
        ]
    },
    {
        title: 'TeurTask',
        subtitle: 'Diseñados para los mejores',
        media: [{ alt: 'cambio', img: 'img/teurtask/1.png', subtitle: 'Sistema administrativo para el control de pagos y desarrollo de proyectos.' },
        { alt: 'cambio', img: "img/teurtask/2.png", subtitle: 'Visualización de pagos, estado del proyecto, representación de tareas en forma de tablero, generación de pdf, notificaciones por email, etc.' },
        { alt: 'cambio', img: 'img/teurtask/3.png', subtitle: 'Realizado con: React js, Api Context, Bootstrap, Laravel y MySQL' }
        // Encargado en el análisis de requerimiento, diseño del sistema e implementación.
        ]
    },
    // {
    //     title: 'Constructora',
    //     subtitle: 'Diseñados para los mejores',
    //     media: [{ alt: 'cambio', img: 'https://www.sketchappsources.com/resources/source-image/dashboard-ui-kit-vol-3-sample.png', subtitle: 'Sistema administrativo para el control de inventario, pedidos y despacho de constructoras.'},
    //     { alt: 'cambio', img: "https://cdn.dribbble.com/users/32742/screenshots/4471172/one_stock_view_dribbb.png", subtitle: 'CRUD de las distintas tablas bases, visualización de pedidos y despacho, autoselección de galpones para pedidos, roles de usuario, generación de pdf, envio de email, etc.' },
    //     { alt: 'cambio', img: 'https://cdn.dribbble.com/users/486635/screenshots/3477972/attachments/766225/track_car_1.png', subtitle: 'Encargado de la toma de requerimientos, análisis y diseño del sistema, implementación de ella tanto en el back-end como en el front-end. Realizado con: React js, Api Context, Material UI, Laravel y MySQL' }
    //     ]
    // },
]
function Projects(props) {
    const classes = useStyles()
    const [handleOpen, setHandleOpen] = useState({ open: false });
    const [projects] = useState(newProjects);
    const [currentProject, setCurrentProject] = useState(0);
    const handleClick = async (current) => {
        setCurrentProject(current);
        setHandleOpen({ open: true });
    };
    const matches = useMediaQuery("(max-width:768px)");

    return (
        <section className={classes.projects}>
            <Title title="PROYECTOS" />
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

