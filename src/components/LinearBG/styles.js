import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    containerLinear: {
        position: 'relative',
        marginBottom: '-2%'
    },
    containerFooterLinear: {
        position: 'relative',
    },
    linear: {
        position: 'absolute',
        pointerEvents: 'none',
        overflow: 'hidden',
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
        color: '#f1f4f8',
        background: '#f1f4f8',
        height: '100vh',
        width: '150%',
        transform: 'rotateY(180deg)',
        "@media (min-width: 576px)": {
            width: '150%',
            height: 'auto',
            background: 'transparent',
        },
        "@media (min-width: 768px)": {
            width: '150%',
        },
        "@media (min-width: 960px)": {
            width: '150%',
        },
        "@media (min-width: 1200px)": {
            width: '150%',
        },
        "@media (min-width: 1600px)": {
            width: '150%',
        },
    },
    footerLinear: {
        position: 'absolute',
        pointerEvents: 'none',
        overflow: 'hidden',
        right: 0,
        bottom: '-6px',
        left: 0,
    }
}))