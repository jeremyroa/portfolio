import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    bold: {
        fontWeight: '500'
    },
    containerSkills: {
        marginTop: '15px',
        width: '95%'
    },
    paragraphIntuitive: {
        fontWeight: '100',
        textAlign: 'center',
        fontSize: '1.2rem',
        marginBottom: '10px',
        marginTop: '10px',
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
        height: 'auto'
    },
    containerLinear: {
        width: '100%',
        display: 'flex',
        position: 'relative',
        marginBottom: '15px'
    },
    tag: {
        backgroundColor: '#04C2C9',
        textAlign: 'center',
        color: "#fff",
        flex: 'auto',
        padding: '3px',
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
        display: 'flex',
        color: '#fff',
        alignItems: 'center',
}
}))