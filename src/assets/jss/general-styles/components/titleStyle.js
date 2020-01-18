import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
    flexCenter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerBar: {
        width: '70px',
        height: '4px',
        background: '#444649',
        margin: '10px 0 50px 0',
    }
}))