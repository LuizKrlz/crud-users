import React, { FC, useState, ReactNode } from "react";
import Link from "next/link";
import {
    Container,
    Grid,
    Typography,
    IconButton,
    Paper,
    TextField,
    Button,
    Snackbar,
} from "@material-ui/core";
import { ArrowBack, Save } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import Layout from "../../../components/Layout";
import api from "../../../services/api";
import Tags from "../../../components/tags";

import useStyles from "./styles";

import { User } from "../../../shared/types";

type formData = {
    name: string;
    email: string;
    external_code: string;
    role: number;
    tags: [string];
};

type FormProps = {
    title: string;
    user?: User;
    children?: ReactNode;
};

const Form: FC<FormProps> = ({ title, user }) => {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm<FormData>();
    const [tags, setTags] = useState([]);
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const onSubmit = handleSubmit(async (data) => {
        try {
            if (user) {
                await api.put(`/users/${user.id}`, {
                    ...data,
                    tags,
                });
            } else {
                await api.post("/users", { ...data, tags });
            }
            setOpen(true);
            router.push("/users");
        } catch (error) {
            alert(error);
        }
    });

    return (
        <Layout>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                onClose={() => console.log("asd")}
                message="Sucess"
            />
            <Container>
                <Grid container xs={12} alignItems="center">
                    <Typography>{title ? title : "Add new user"}</Typography>
                    <div style={{ flexGrow: 1 }} />
                    <Link href="/users">
                        <IconButton>
                            <ArrowBack />
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item component={Paper}>
                    <form
                        className={classes.root}
                        noValidate
                        autoComplete="off"
                        onSubmit={onSubmit}
                    >
                        <div>
                            <TextField
                                required
                                id="filled-required"
                                label="Name"
                                variant="outlined"
                                inputRef={register}
                                defaultValue={user?.name}
                                name="name"
                            />
                            <TextField
                                id="filled-required"
                                required
                                label="email"
                                variant="outlined"
                                inputRef={register}
                                defaultValue={user?.email}
                                name="email"
                            />
                        </div>

                        <div>
                            <TextField
                                id="filled-required"
                                required
                                label="External Code"
                                variant="outlined"
                                inputRef={register}
                                name="external_code"
                                defaultValue={user?.external_code}
                            />
                            <TextField
                                select
                                label="Select a Role"
                                variant="outlined"
                                inputRef={register}
                                name="role"
                                defaultValue={user?.role}
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option value={0}>Gestor</option>
                                <option value={1}>Agente</option>
                                <option value={2}>Local</option>
                            </TextField>
                        </div>

                        <Tags
                            tags={user ? user.tags : []}
                            handleChange={(newtags) => setTags(newtags)}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            style={{ marginLeft: 5 }}
                            startIcon={<Save />}
                            type="submit"
                        >
                            Save
                        </Button>
                    </form>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Form;
