import { api } from './baseApi';

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
    phone?: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    phone?: string;
}

export interface AuthResponse {
    status: string;
    message: string;
    data: {
        user: User;
        token: string;
    };
}

export interface ChangePasswordRequest {
    currentPassword: string;
    newPassword: string;
}

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginRequest>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['Auth'],
        }),
        register: builder.mutation<AuthResponse, RegisterRequest>({
            query: (userData) => ({
                url: '/auth/register',
                method: 'POST',
                body: userData,
            }),
            invalidatesTags: ['Auth'],
        }),
        getMe: builder.query<{ status: string; data: { user: User } }, void>({
            query: () => '/auth/me',
            providesTags: ['Auth'],
        }),
        updateProfile: builder.mutation<AuthResponse, Partial<User>>({
            query: (userData) => ({
                url: '/auth/update',
                method: 'PUT',
                body: userData,
            }),
            invalidatesTags: ['Auth'],
        }),
        changePassword: builder.mutation<{ status: string; message: string }, ChangePasswordRequest>({
            query: (passwords) => ({
                url: '/auth/change-password',
                method: 'PUT',
                body: passwords,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useGetMeQuery,
    useUpdateProfileMutation,
    useChangePasswordMutation,
} = authApi;
