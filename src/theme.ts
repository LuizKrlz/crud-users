import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#2196f3",
        },
        secondary: {
            main: "#f50057",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#f5f5f5",
        },
    },
});

export default theme;
