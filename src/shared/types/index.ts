export type RemoveParam = {
    id: number;
};

export type User = {
    id: number;
    name: string;
    email: string;
    external_code: string;
    role: number;
    tags: [string];
};
