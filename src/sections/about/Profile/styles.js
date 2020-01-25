import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    bold: {
        fontWeight: 'bold'
    },
    containerSkills: {
        marginTop: '15px',
        width: '95%'
    },
    paragraphIntuitive: {
        fontWeight: '100',
        textAlign: 'justify',
        fontSize: '1.2rem',
        marginBottom: '10px',
        marginTop: '10px',
        marginRight: '10px',
        // "@media (min-width: 576px)": {
        //     width: '150px',
        // },
        // "@media (min-width: 768px)": {
        //     width: '150px',
        // },
        // "@media (min-width: 960px)": {
        //     width: '100px',
        // },
        // "@media (min-width: 1200px)": {
        //     width: '100px',
        // },
        // "@media (min-width: 1600px)": {
        //     width: '100px',
        // },
    },
    mediaImage: {
        width: '350px',
        height: '350px',
        maxWidth: '100%',
        clipPath: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)',
        webkitClipPath: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)',

        "@media (min-width: 576px)": {
            width: '300px',
            height: '300px',
        },
        "@media (min-width: 768px)": {
            width: '300px',
            height: '300px',
        },
        "@media (min-width: 960px)": {
            width: '350px',
            height: '350px',
        },
        "@media (min-width: 1200px)": {
            width: '400px',
            height: '400px',
        },
        "@media (min-width: 1600px)": {
            width: '400px',
            height: '400px',
        },
    },
    linearProgress: {
        flex: 10,
        height: 'auto',
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
    },
    containerLinear: {
        width: '100%',
        display: 'flex',
        position: 'relative',
        marginBottom: '15px'
    },
    tag: {
        backgroundColor: theme.palette.third.main,
        textAlign: 'center',
        color: "#fff",
        flex: 'auto',
        padding: '3px',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
        "@media (min-width: 576px)": {
            flex: 2.8,
        },
        "@media (min-width: 768px)": {
            flex: 2.4,
        },
        "@media (min-width: 960px)": {
            flex: 4,
        },
        "@media (min-width: 1200px)": {
            flex: 3,
        },
        "@media (min-width: 1600px)": {
            flex: 2,
        },
    },
    percent: {
        position: 'absolute',
        right: '10px',
        height: '100%',
        display: 'none',
        color: '#fff',
        alignItems: 'center',
        "@media (min-width: 576px)": {
            display: 'flex'
        },
    }

}))