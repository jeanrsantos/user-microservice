import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
    body: object({
        login: string({
            required_error: 'Login is required',
        }),
        password: string({
            required_error: 'Password is required',
        }),
        email: string({
            required_error: 'Email is required',
        }),
    }),
});

const params = {
    params: object({
        userId: string(),
    }),
};

export const getUserSchema = object({
    ...params,
});

export const updateUserSchema = object({
    ...params,
    body: object({
        login: string(),
        password: string(),
        email: string(),
    }).partial(),
});

export const deleteUserSchema = object({
    ...params,
});

export type CreateUserInput = TypeOf<typeof createUserSchema>['body'];
export type GetUserInput = TypeOf<typeof getUserSchema>['params'];
export type UpdateUserInput = TypeOf<typeof updateUserSchema>;
export type DeleteUserInput = TypeOf<typeof deleteUserSchema>['params'];