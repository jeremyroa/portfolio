import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
    hexagon: {
        backgroundColor: theme.palette.third.main,
        height: '100%',
        width: 'calc(100% * 0.57735)',
        display: 'inline-block',
        '&:before': {
            position: 'absolute',
            top: 0,
            right: 'calc((100% / 2) - ((100% * 0.57735) / 2))',
            backgroundColor: 'inherit',
            height: 'inherit',
            width: 'inherit',
            content: '""',
            transform: 'rotateZ(60deg)',
        },
        '&:after': {
            position: 'absolute',
            top: 0,
            right: 'calc((100% / 2) - ((100% * 0.57735) / 2))',
            backgroundColor: 'inherit',
            height: 'inherit',
            width: 'inherit',
            content: '""',
            transform: 'rotateZ(-60deg)',
        }
    },
    hexWrap: {
        textAlign: 'center',
        position: 'relative',
        display: 'inline-block',
        width: '150px',
        height: '150px',
        marginBottom: '10px',
        "@media (min-width: 576px)": {
            width: '150px',
            height: '150px',
        },
        "@media (min-width: 768px)": {
            width: '150px',
            height: '150px',
            marginBottom:'5px'
        },
        "@media (min-width: 960px)": {
            width: '100px',
            height: '100px',
            marginBottom:'5px'
        },
        "@media (min-width: 1200px)": {
            width: '100px',
            height: '100px',
            marginBottom:'5px'
        },
        "@media (min-width: 1600px)": {
            width: '100px',
            height: '100px',
            marginBottom:'5px'
        },
    },
    iconHexagonWrap: {
        position: 'absolute',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        left: '0%',
        height: '100%',
        width: '100%',
        '& > svg': {
            width: '3.5em',
            height: '3.5em',
            color: '#fff',
            "@media (min-width: 576px)": {
                width: '2.5em',
                height: '2.5em',
            },
            "@media (min-width: 768px)": {
                width: '2.5em',
                height: '2.5em',
            },
            "@media (min-width: 960px)": {
                width: '2em',
                height: '2em',
            },
            "@media (min-width: 1200px)": {
                width: '2em',
                height: '2em',
            },
            "@media (min-width: 1600px)": {
                width: '2em',
                height: '2em',
            },
        }
    }
}))