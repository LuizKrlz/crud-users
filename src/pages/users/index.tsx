import React, { FC, useEffect, useState } from "react";
import {
    Container,
    Grid,
    Paper,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton,
} from "@material-ui/core";

import useStyles from "./styles";
import api from "../../services/api";
import Layout from "../../components/Layout";
import { Add, Delete, Edit, Remove } from "@material-ui/icons";
import Link from "next/link";
import { User, RemoveParam } from "../../shared/types";

const List: FC = () => {
    const classes = useStyles();
    const [users, setUsers] = useState<User | []>([]);

    async function getUsers(): Promise<any> {
        try {
            const { data } = await api.get("users");
            setUsers(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    const handleRemove = async ({ id }: RemoveParam) => {
        try {
            await api.delete(`/users/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout>
            <Container>
                <Grid container xs={12} alignItems="center">
                    <Typography>List of users</Typography>
                    <div style={{ flexGrow: 1 }} />
                    <Link href="/users/new">
                        <IconButton>
                            <Add />
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item xs={12} style={{ marginTop: 10 }}>
                    <TableContainer component={Paper} elevation={0}>
                        <Table
                            className={classes.table}
                            aria-label="List of users"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Usernmae</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="left">
                                        External Code
                                    </TableCell>

                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell component="th" scope="row">
                                            {user.name}
                                        </TableCell>
                                        <TableCell align="left">
                                            {user.email}
                                        </TableCell>
                                        <TableCell align="left">
                                            {user.external_code}
                                        </TableCell>
                                        <TableCell align="right">
                                            <Link
                                                href={`/users/${user.id}/edit`}
                                            >
                                                <IconButton size="small">
                                                    <Edit />
                                                </IconButton>
                                            </Link>

                                            <IconButton
                                                onClick={() =>
                                                    handleRemove(user.id)
                                                }
                                                size="small"
                                            >
                                                <Delete />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Container>
        </Layout>
    );
};

export default List;
