import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    bold: {
        fontWeight: '500'
    },
    paragraphIntuitive: {
        fontWeight: '100',
        textAlign: 'center',
        width: '80%',
        marginBottom: '10px',
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
    }
}))