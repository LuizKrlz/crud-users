import React, { useEffect, useState } from 'react'
import { Container, Grid, Paper, Typography } from '@material-ui/core'

import useStyles from './styles'
import api from '../../services/api'
import Layout from '../../components/layout'

interface User {
    id: number
    name: string
    email: string
    external_code: string
}

export default function () {
    const classes = useStyles()
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
        <Layout>
            <Paper elevation={0}>
                <Container>
                    <Grid xs={12}>
                        <Typography variant="h3" component="h1">
                            Challenge Dnva Ecommerce
                        </Typography>

                        <Typography variant="subtitle1" gutterBottom>
                            This project is a test for apply oportunitie on Dnva
                        </Typography>
                    </Grid>
                </Container>
            </Paper>
        </Layout>
    )
}
