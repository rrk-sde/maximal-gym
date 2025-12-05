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

                // Priority: selected-tenant-id (for superadmin filtering) > NEXT_PUBLIC_TENANT_ID
                const selectedTenantId = localStorage.getItem('selected-tenant-id');
                if (selectedTenantId) {
                    headers.set('x-tenant-id', selectedTenantId);
                } else {
                    const envTenantId = process.env.NEXT_PUBLIC_TENANT_ID;
                    if (envTenantId) {
                        headers.set('x-tenant-id', envTenantId);
                    }
                }
            }

            return headers;
        },
    }),
    tagTypes: ['Auth', 'Bookings', 'Coaches', 'FAQs', 'Contacts', 'Tenants'],
    endpoints: () => ({}),
});

export default api;
