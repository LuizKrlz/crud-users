import React, { FC, useEffect, useState } from "react";
import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Container,
    Typography,
    TextField,
    Button,
} from "@material-ui/core";

import useStyles from "./styles";
import api from '../../services/api'

interface  User {
    id: number
    name: string
    email: string
    external_code: string
}

const Home: FC = () => {
    const classes = useStyles();
    const [users, setUsers] = useState<User | []>([])

    useEffect(() => {
        async function getUsers(): Promise<any> {
            try {
                const { data } = await api.get('users')
                setUsers(data)
            } catch (err) {
                console.log(err)
            }
        }

        getUsers()
    }, [])
    return (
        <Container style={{ marginTop: 30 }}>
            <Paper>
                <Grid container>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        style={{ padding: 20 }}
                    >
                        <Typography variant="h4" component="h1">
                            Users
                        </Typography>

                        <form noValidate autoComplete="off">
                            <TextField
                                id="outlined-basic"
                                label="Search"
                                variant="outlined"
                                size="small"
                                style={{ width: 400 }}
                            />
                        </form>
                    </Grid>
                    <Grid item xs={3} style={{ paddingLeft: 20 }}>
                        <Button variant="contained" color="default">
                            Adicionar
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>E-mail</TableCell>
                                    <TableCell>External Code</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.length && users.map((user: User)=> (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>
                                            {user.external_code}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Home;
