import { api } from './baseApi';

export interface Contact {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    status: 'pending' | 'in-progress' | 'resolved' | 'closed';
    priority: 'low' | 'medium' | 'high';
    assignedTo?: string;
    notes?: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateContactRequest {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}

export interface ContactResponse {
    status: string;
    message: string;
    data: {
        contact: Contact;
    };
}

export interface ContactsListResponse {
    status: string;
    data: {
        contacts: Contact[];
        pagination?: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    };
}

export const contactApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createContact: builder.mutation<ContactResponse, CreateContactRequest>({
            query: (contactData) => ({
                url: '/contact',
                method: 'POST',
                body: contactData,
            }),
            invalidatesTags: ['Contacts'],
        }),
        getAllContacts: builder.query<ContactsListResponse, { status?: string; priority?: string; page?: number; limit?: number }>({
            query: (params) => ({
                url: '/contact',
                params,
            }),
            providesTags: ['Contacts'],
        }),
        getContactById: builder.query<ContactResponse, string>({
            query: (id) => `/contact/${id}`,
            providesTags: ['Contacts'],
        }),
        updateContact: builder.mutation<ContactResponse, { id: string; data: Partial<Contact> }>({
            query: ({ id, data }) => ({
                url: `/contact/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation<{ status: string; message: string }, string>({
            query: (id) => ({
                url: `/contact/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),
    }),
});

export const {
    useCreateContactMutation,
    useGetAllContactsQuery,
    useGetContactByIdQuery,
    useUpdateContactMutation,
    useDeleteContactMutation,
} = contactApi;
