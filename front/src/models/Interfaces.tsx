export interface IData {
    success: boolean,
    message: string,
    count: number,
    data: [{
        id: number,
        name: string,
        email: string,
        password: string,
        created_at: string,
        updated_at: string
    }]
};

export interface IUser {
    id: number,
    name: string,
    email: string,
    password: string,
    created_at?: string,
    updated_at?: string
};

export interface IAuth {
    isAuth: boolean,
    user: Omit<IUser, "password"> | null
}

export interface ILogin {
    email: string,
    password: string
};





