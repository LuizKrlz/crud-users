import React, { FC } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

import UserForm from "../../../../src/pages/users/form";
import api from "../../../../src/services/api";
import { User } from "../../../../src/shared/types";

type UserEditProps = {
    user: User;
    children?: React.ReactNode;
};

const UserEdit: FC = ({ user }: UserEditProps) => {
    return <UserForm title="Edit user" user={user} />;
};

export const getServerSideProps: GetServerSideProps = async ({
    params,
}: GetServerSidePropsContext) => {
    const { data: user } = await api.get(`/users/${params?.id}`);

    return {
        props: {
            user,
        },
    };
};

export default UserEdit;
