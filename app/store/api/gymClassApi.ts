import { api } from './baseApi';

export interface GymClass {
    _id: string;
    name: string;
    description?: string;
    coachId: { _id: string; name: string } | string;
    startTime: string; // ISO date string
    durationMinutes: number;
    capacity: number;
    enrolledUsers: string[];
    status: 'scheduled' | 'cancelled' | 'completed';
}

export const gymClassApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getClasses: builder.query<{ status: string; data: { classes: GymClass[] } }, void>({
            query: () => '/classes',
            providesTags: ['Classes'],
        }),
        createClass: builder.mutation<{ status: string; data: { class: GymClass } }, Partial<GymClass>>({
            query: (gymClass) => ({
                url: '/classes',
                method: 'POST',
                body: gymClass,
            }),
            invalidatesTags: ['Classes'],
        }),
        joinClass: builder.mutation<void, string>({
            query: (classId) => ({
                url: `/classes/${classId}/join`,
                method: 'POST',
            }),
            invalidatesTags: ['Classes'],
        }),
    }),
});

export const {
    useGetClassesQuery,
    useCreateClassMutation,
    useJoinClassMutation,
} = gymClassApi;
