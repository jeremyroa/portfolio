import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    footer: { 
        background: '#1B242F', 
        display: 'flex', 
        justifyContent: 'center', 
        borderTop: `2px solid ${theme.palette.primary.main}`, 
        position: 'relative' 
    },
    white: {
        color: theme.palette.secondary.main
    },
    containerButton: { 
        position: 'absolute',
        top: '58%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    containerCanvas: {
        height: '100vh',
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        background: `radial-gradient(ellipse at 500% 0,#0e0e0f 50%,#242635 80%,${theme.palette.primary.main} 150%)`,
        zIndex: -2,
    }
}))