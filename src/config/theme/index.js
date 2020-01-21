import { createMuiTheme } from '@material-ui/core/styles'
import { blue, indigo,  } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#fff'
    },
    primary: {
      main: '#00A1A7',
    },
    third: {
      main: '#04C2C9',
    }
  },
});

export default theme;
