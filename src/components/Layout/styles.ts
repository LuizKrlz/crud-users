import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        appBar: {
            boxShadow: "none",
        },
        drawer: {
            width: 240,
            flexShrink: 0,
        },
        drawerPaper: {
            width: 240,
        },
        drawerContainer: {
            overflow: "auto",
        },
        content: {
            marginTop: theme.spacing(4),
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    })
);

export default useStyles;
