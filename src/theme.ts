import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#00838f",
        },
        secondary: {
            main: "#009688",
        },
        error: {
            main: "#e53935",
        },
        background: {
            default: "#e0e0e0",
        },
    },
    zIndex: {
        appBar: 1200,
        drawer: 1100,
    },
});

export default theme;
