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
    first: string,
    last: string,
    email: string,
    password: string,
    created_at?: string,
    updated_at?: string
};

export interface ILogin {
    email: string,
    password: string,
    token: string
};



