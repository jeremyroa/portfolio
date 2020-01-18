import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    footer: { 
        background: '#1B242F', 
        display: 'flex', 
        justifyContent: 'center', 
        borderTop: '2px solid #00A1A7', 
        position: 'relative' 
    },
    up: {
        position: 'absolute',
        top: '-30px'
    },
    paragraph: { 
        color: '#fff',
        padding: '35px 0 15px'
    }
}))