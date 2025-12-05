"use client";

import { useGetAllBookingsQuery } from "@/app/store/api/bookingApi";
import { useGetAllContactsQuery } from "@/app/store/api/contactApi";
import { useGetAllCoachesQuery } from "@/app/store/api/coachApi";
import { useGetAllFAQsQuery } from "@/app/store/api/faqApi";
import { Calendar, Mail, Dumbbell, HelpCircle, TrendingUp, Users } from "lucide-react";

export default function AdminDashboard() {
    // Fetch data from APIs
    const { data: bookingsData, isLoading: bookingsLoading } = useGetAllBookingsQuery({ page: 1, limit: 100 });
    const { data: contactsData, isLoading: contactsLoading } = useGetAllContactsQuery({ page: 1, limit: 100 });
    const { data: coachesData, isLoading: coachesLoading } = useGetAllCoachesQuery({ page: 1, limit: 100 });
    const { data: faqsData, isLoading: faqsLoading } = useGetAllFAQsQuery({ category: undefined, isActive: undefined });

    // Extract counts
    const totalBookings = bookingsData?.data?.pagination?.total || 0;
    const totalContacts = contactsData?.data?.pagination?.total || 0;
    const totalCoaches = coachesData?.data?.coaches?.length || 0;
    const totalFaqs = faqsData?.data?.faqs?.length || 0;

    // Get pending contacts count
    const pendingContacts = contactsData?.data?.contacts?.filter((c: any) => c.status === 'pending').length || 0;

    // Get recent bookings (last 7 days)
    const recentBookings = bookingsData?.data?.bookings?.filter((b: any) => {
        const bookingDate = new Date(b.createdAt);
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        return bookingDate >= sevenDaysAgo;
    }).length || 0;

    const isLoading = bookingsLoading || contactsLoading || coachesLoading || faqsLoading;

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF4D00]"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-1">Overview of your gym management system</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Total Bookings */}
                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-medium text-gray-600">Total Bookings</div>
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-blue-600" />
                        </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{totalBookings}</div>
                    <div className="text-sm text-green-600 mt-2 flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {recentBookings} this week
                    </div>
                </div>

                {/* Enquiries */}
                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-medium text-gray-600">Enquiries</div>
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <Mail className="w-5 h-5 text-purple-600" />
                        </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{totalContacts}</div>
                    <div className="text-sm text-orange-600 mt-2 flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {pendingContacts} pending
                    </div>
                </div>

                {/* Coaches */}
                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-medium text-gray-600">Coaches</div>
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <Dumbbell className="w-5 h-5 text-green-600" />
                        </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{totalCoaches}</div>
                    <div className="text-sm text-gray-600 mt-2">Active trainers</div>
                </div>

                {/* FAQs */}
                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-medium text-gray-600">FAQs</div>
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                            <HelpCircle className="w-5 h-5 text-yellow-600" />
                        </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{totalFaqs}</div>
                    <div className="text-sm text-gray-600 mt-2">Help articles</div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Recent Bookings */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        Recent Bookings
                    </h2>
                    <div className="space-y-3">
                        {bookingsData?.data?.bookings?.slice(0, 5).map((booking: any) => (
                            <div key={booking._id} className="flex items-center justify-between py-2 border-b last:border-0">
                                <div>
                                    <div className="font-medium text-gray-900">{booking.name}</div>
                                    <div className="text-sm text-gray-500">{booking.email}</div>
                                </div>
                                <div className="text-sm text-gray-600">
                                    {new Date(booking.createdAt).toLocaleDateString()}
                                </div>
                            </div>
                        ))}
                        {totalBookings === 0 && (
                            <p className="text-gray-500 text-center py-4">No bookings yet</p>
                        )}
                    </div>
                </div>

                {/* Recent Enquiries */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-purple-600" />
                        Recent Enquiries
                    </h2>
                    <div className="space-y-3">
                        {contactsData?.data?.contacts?.slice(0, 5).map((contact: any) => (
                            <div key={contact._id} className="flex items-center justify-between py-2 border-b last:border-0">
                                <div>
                                    <div className="font-medium text-gray-900">{contact.name}</div>
                                    <div className="text-sm text-gray-500 truncate max-w-[200px]">{contact.subject}</div>
                                </div>
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${contact.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                    contact.status === 'resolved' ? 'bg-green-100 text-green-800' :
                                        'bg-gray-100 text-gray-800'
                                    }`}>
                                    {contact.status}
                                </span>
                            </div>
                        ))}
                        {totalContacts === 0 && (
                            <p className="text-gray-500 text-center py-4">No enquiries yet</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Welcome Message */}
            <div className="bg-gradient-to-r from-[#FF4D00] to-orange-600 p-6 rounded-lg shadow-sm text-white">
                <h2 className="text-2xl font-bold mb-2">
                    Welcome to Gymmax Admin! 🎉
                </h2>
                <p className="opacity-90">
                    Manage your gym members, bookings, coaches, enquiries, and FAQs from this dashboard.
                    Navigate using the sidebar to access different sections.
                </p>
            </div>
        </div>
    );
}
