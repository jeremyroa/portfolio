import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    projects: {
        backgroundColor: '#f1f4f8',
        paddingTop: '50px',
        paddingBottom: '70px',
        "@media (min-width: 576px)": {
            paddingBottom: '90px',
        },
        "@media (min-width: 768px)": {
            paddingBottom: '125px',
        },
        "@media (min-width: 960px)": {
            paddingBottom: '137px',
        },
        "@media (min-width: 1200px)": {
            paddingBottom: '200px',
        },
        "@media (min-width: 1600px)": {
            paddingBottom: '250px',
        },
    },
    accordionContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // margin: '4vmin',
        "@media (min-width: 768px)": {
            // margin: '9vmin',
        },
        overflow: 'hidden',
        // transform: 'skew(5deg)',
    },
    itemAccordion: {
        flex: 1,
        transition: 'all 1s ease-in-out',
        height: '75vmin',
        position: 'relative',
        cursor: 'pointer',
        '& .itemHeadAccordion': {
            padding: '0.2rem',
            background: '#00a1a7c7',
            transform: 'rotate(-90deg)',
            transformOrigin: '0% 0%',
            transition: 'all 0.5s ease-in-out',
            minWidth: '100%',
            textAlign: 'center',
            position: 'absolute',
            bottom: 0,
            left: 0,
            whiteSpace: 'nowrap',
            fontSize: '3vmin',
            color: '#fff',
            "@media (min-width: 576px)": {
                fontSize: '2.5vmin',
            },
        },
        '&:hover': {
            flexGrow: 5,
            "@media (min-width: 576px)": {
                flexGrow: 8.5,
            },
            "@media (min-width: 960px)": {
                flexGrow: 9,
            },
            "@media (min-width: 1200px)": {
                flexGrow: 6.5,
            },
            "@media (min-width: 1600px)": {
                flexGrow: 3,
            },
            // '& img': {
            //     filter: 'grayscale(0)',
            // },
            '& .itemHeadAccordion': {
                textAlign: 'center',
                padding: '4px 0',
                top: 'calc(100% - 2em)',
                background: '#00a1a780',
                transform: 'rotate(0deg)',
                fontSize: '3vmin',
            }
        },
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'all 1s ease-in-out',
            // filter: 'grayscale(100%)',
        },
        '&:not(:nth-child(6))': {
            marginRight: '1em',
        }
    },

}))

