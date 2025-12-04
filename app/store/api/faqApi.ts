import { api } from './baseApi';

export interface FAQ {
    _id: string;
    question: string;
    answer: string;
    category: 'general' | 'membership' | 'training' | 'facilities' | 'other';
    order: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface FAQsResponse {
    status: string;
    data: {
        faqs: FAQ[];
    };
}

export interface FAQResponse {
    status: string;
    data: {
        faq: FAQ;
    };
}

export const faqApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllFAQs: builder.query<FAQsResponse, { category?: string; isActive?: boolean }>({
            query: (params) => ({
                url: '/faqs',
                params,
            }),
            providesTags: ['FAQs'],
        }),
        getFAQById: builder.query<FAQResponse, string>({
            query: (id) => `/faqs/${id}`,
            providesTags: ['FAQs'],
        }),
        createFAQ: builder.mutation<FAQResponse, Partial<FAQ>>({
            query: (faqData) => ({
                url: '/faqs',
                method: 'POST',
                body: faqData,
            }),
            invalidatesTags: ['FAQs'],
        }),
        updateFAQ: builder.mutation<FAQResponse, { id: string; data: Partial<FAQ> }>({
            query: ({ id, data }) => ({
                url: `/faqs/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['FAQs'],
        }),
        deleteFAQ: builder.mutation<{ status: string; message: string }, string>({
            query: (id) => ({
                url: `/faqs/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['FAQs'],
        }),
    }),
});

export const {
    useGetAllFAQsQuery,
    useGetFAQByIdQuery,
    useCreateFAQMutation,
    useUpdateFAQMutation,
    useDeleteFAQMutation,
} = faqApi;
