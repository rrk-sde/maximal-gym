import { api } from './baseApi';

export interface Tenant {
    _id: string;
    name: string;
    slug: string;
    email: string;
    phone: string;
    address?: {
        street?: string;
        city?: string;
        state?: string;
        zipCode?: string;
        country?: string;
    };
    settings?: {
        timezone?: string;
        currency?: string;
        branding?: {
            logo?: string;
            primaryColor?: string;
            secondaryColor?: string;
        };
    };
    subscription: {
        plan: 'free' | 'basic' | 'premium' | 'enterprise';
        status: 'active' | 'inactive' | 'suspended';
        expiresAt?: string;
    };
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface TenantsResponse {
    status: string;
    data: {
        tenants: Tenant[];
        pagination?: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    };
}

export interface TenantResponse {
    status: string;
    data: {
        tenant: Tenant;
    };
}

export const tenantApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllTenants: builder.query<TenantsResponse, { page?: number; limit?: number; isActive?: boolean }>({
            query: (params) => ({
                url: '/tenants',
                params,
            }),
            providesTags: ['Tenants'],
        }),
        getTenantById: builder.query<TenantResponse, string>({
            query: (id) => `/tenants/${id}`,
            providesTags: ['Tenants'],
        }),
        createTenant: builder.mutation<TenantResponse, Partial<Tenant>>({
            query: (tenantData) => ({
                url: '/tenants',
                method: 'POST',
                body: tenantData,
            }),
            invalidatesTags: ['Tenants'],
        }),
        updateTenant: builder.mutation<TenantResponse, { id: string; data: Partial<Tenant> }>({
            query: ({ id, data }) => ({
                url: `/tenants/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Tenants'],
        }),
        deleteTenant: builder.mutation<{ status: string; message: string }, string>({
            query: (id) => ({
                url: `/tenants/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Tenants'],
        }),
    }),
});

export const {
    useGetAllTenantsQuery,
    useGetTenantByIdQuery,
    useCreateTenantMutation,
    useUpdateTenantMutation,
    useDeleteTenantMutation,
} = tenantApi;
