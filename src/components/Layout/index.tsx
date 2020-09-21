import React, { FC } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    CssBaseline,
} from "@material-ui/core";

import useStyles from "./styles";
import { Group, Home } from "@material-ui/icons";
import { useRouter } from "next/router";

const Layout: FC = ({ children }) => {
    const classes = useStyles();
    const router = useRouter();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar elevation={0}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        CRUD
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                elevation={0}
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem button onClick={() => router.push("/")}>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button onClick={() => router.push("/users")}>
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>{children}</main>
        </div>
    );
};

export default Layout;
