import { api } from './baseApi';

export interface Booking {
    _id: string;
    name: string;
    email: string;
    phone: string;
    coach: 'vikram' | 'priya' | 'arjun';
    sessionType: 'personal' | 'assessment' | 'nutrition';
    date: string;
    time: string;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    notes?: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateBookingRequest {
    name: string;
    email: string;
    phone: string;
    coach: string;
    sessionType: string;
    date: string;
    time: string;
    notes?: string;
}

export interface BookingResponse {
    status: string;
    message: string;
    data: {
        booking: Booking;
    };
}

export interface BookingsListResponse {
    status: string;
    data: {
        bookings: Booking[];
        pagination?: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    };
}

export const bookingApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createBooking: builder.mutation<BookingResponse, CreateBookingRequest>({
            query: (bookingData) => ({
                url: '/bookings',
                method: 'POST',
                body: bookingData,
            }),
            invalidatesTags: ['Bookings'],
        }),
        getMyBookings: builder.query<BookingsListResponse, void>({
            query: () => '/bookings/my-bookings',
            providesTags: ['Bookings'],
        }),
        getAllBookings: builder.query<BookingsListResponse, { status?: string; coach?: string; page?: number; limit?: number }>({
            query: (params) => ({
                url: '/bookings',
                params,
            }),
            providesTags: ['Bookings'],
        }),
        getBookingById: builder.query<BookingResponse, string>({
            query: (id) => `/bookings/${id}`,
            providesTags: ['Bookings'],
        }),
        updateBookingStatus: builder.mutation<BookingResponse, { id: string; status: string; notes?: string }>({
            query: ({ id, ...body }) => ({
                url: `/bookings/${id}/status`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Bookings'],
        }),
        cancelBooking: builder.mutation<BookingResponse, string>({
            query: (id) => ({
                url: `/bookings/${id}/cancel`,
                method: 'PUT',
            }),
            invalidatesTags: ['Bookings'],
        }),
        deleteBooking: builder.mutation<{ status: string; message: string }, string>({
            query: (id) => ({
                url: `/bookings/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Bookings'],
        }),
    }),
});

export const {
    useCreateBookingMutation,
    useGetMyBookingsQuery,
    useGetAllBookingsQuery,
    useGetBookingByIdQuery,
    useUpdateBookingStatusMutation,
    useCancelBookingMutation,
    useDeleteBookingMutation,
} = bookingApi;
