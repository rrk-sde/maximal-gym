import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define base URL for API
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Create base API configuration
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            // Get token from localStorage
            if (typeof window !== 'undefined') {
                const token = localStorage.getItem('gym-token');
                if (token) {
                    headers.set('authorization', `Bearer ${token}`);
                }
            }

            // Add tenant ID from environment variable
            const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;
            if (tenantId) {
                headers.set('x-tenant-id', tenantId);
            }

            return headers;
        },
    }),
    tagTypes: ['Auth', 'Bookings', 'Coaches', 'FAQs', 'Contacts', 'Tenants'],
    endpoints: () => ({}),
});

export default api;
