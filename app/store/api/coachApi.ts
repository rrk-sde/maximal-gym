import { api } from './baseApi';

export interface Coach {
    _id: string;
    name: string;
    slug: string;
    specialty: string;
    experience: string;
    certifications: string;
    bio?: string;
    image?: string;
    email?: string;
    phone?: string;
    availability?: Array<{
        day: string;
        slots: string[];
    }>;
    rating: number;
    totalSessions: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface CoachesResponse {
    status: string;
    data: {
        coaches: Coach[];
    };
}

export interface CoachResponse {
    status: string;
    data: {
        coach: Coach;
    };
}

export const coachApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllCoaches: builder.query<CoachesResponse, { isActive?: boolean }>({
            query: (params) => ({
                url: '/coaches',
                params,
            }),
            providesTags: ['Coaches'],
        }),
        getCoach: builder.query<CoachResponse, string>({
            query: (identifier) => `/coaches/${identifier}`,
            providesTags: ['Coaches'],
        }),
        createCoach: builder.mutation<CoachResponse, Partial<Coach>>({
            query: (coachData) => ({
                url: '/coaches',
                method: 'POST',
                body: coachData,
            }),
            invalidatesTags: ['Coaches'],
        }),
        updateCoach: builder.mutation<CoachResponse, { id: string; data: Partial<Coach> }>({
            query: ({ id, data }) => ({
                url: `/coaches/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Coaches'],
        }),
        deleteCoach: builder.mutation<{ status: string; message: string }, string>({
            query: (id) => ({
                url: `/coaches/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Coaches'],
        }),
    }),
});

export const {
    useGetAllCoachesQuery,
    useGetCoachQuery,
    useCreateCoachMutation,
    useUpdateCoachMutation,
    useDeleteCoachMutation,
} = coachApi;
