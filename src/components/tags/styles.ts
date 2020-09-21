import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            marginBottom: theme.spacing(2),
        },
        containerChips: {
            display: "flex",
            flexWrap: "wrap",
            "& > *": {
                margin: theme.spacing(0.5),
            },
        },
        containerForm: {
            display: "flex",
            alignItems: "center",
        },
    })
);

export default useStyles;
