import { api } from './baseApi';

export interface MembershipPlan {
    _id: string;
    name: string;
    price: number;
    durationMonths: number;
    description: string;
    features: string[];
    isActive: boolean;
}

export const membershipApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPlans: builder.query<{ status: string; data: { plans: MembershipPlan[] } }, void>({
            query: () => '/memberships',
            providesTags: ['Memberships'],
        }),
        createPlan: builder.mutation<{ status: string; data: { plan: MembershipPlan } }, Partial<MembershipPlan>>({
            query: (plan) => ({
                url: '/memberships',
                method: 'POST',
                body: plan,
            }),
            invalidatesTags: ['Memberships'],
        }),
        assignPlan: builder.mutation<void, { userId: string; planId: string }>({
            query: (data) => ({
                url: '/memberships/assign',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Auth'], // Refresh user data to show new membership
        }),
    }),
});

export const {
    useGetPlansQuery,
    useCreatePlanMutation,
    useAssignPlanMutation,
} = membershipApi;
