import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    hexagon: {
        position: 'relative',
        width: '300px', 
        height: '173.21px',
        backgroundColor: '#64C7CC',
        margin: '86.60px 0',
        '&:before': {
            content: "",
            position: 'absolute',
            width: 0,
            borderLeft: '150px solid transparent',
            borderRight: '150px solid transparent',
            bottom: '100%',
            borderBottom: '86.60px solid #64C7CC'
        },
        '&:after': {
            content: "",
            position: 'absolute',
            width: 0,
            borderLeft: '150px solid transparent',
            borderRight: '150px solid transparent',
            top: '100%',
            borderTop: '86.60px solid #64C7CC',
        }
    }
}))