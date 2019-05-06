import { createMuiTheme } from '@material-ui/core/styles/index';
import blue from '@material-ui/core/colors/blue';

export default createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: '#e53935',
        }
    },

    typography: {
        useNextVariants: true,
        fontFamily: 'Roboto'
    },

    overrides: { }
});