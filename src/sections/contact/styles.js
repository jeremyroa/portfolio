import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    contact: {
        background: '#252934',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        "@media (min-width: 768px)": {
            paddingTop: '0',
        },
    },
    formContact: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    containerButton: {
        width: '80%',
        textAlign: 'end',
        "@media (min-width: 576px)": {
            width: '70%',
        },
        "@media (min-width: 768px)": {
            width: '40%',
        },
    },
    groupSocials: {
        display: 'flex',
        justifyContent: 'center',
        '& a': {
            margin: '16px 10px 24px'
        }
    },
    titleSocial: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '100'
    },
    phrase: { 
        color: 'rgb(79, 78, 77)', 
        textAlign: 'center', 
        fontStyle: 'italic', 
        fontWeight: '100' ,
        fontSize: '6vmin',
        "@media (min-width: 576px)": {
            fontSize: '4vmin',
        },
    },
    containerPhrase: { 
        width: '80%%',
        "@media (min-width: 1600px)": {
            width: '55%',
        },
        margin: '0 auto'
    }
}))

