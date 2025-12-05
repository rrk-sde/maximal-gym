"use client";

import { useState } from "react";
import { useGetAllBookingsQuery, useDeleteBookingMutation, useUpdateBookingStatusMutation } from "@/app/store/api/bookingApi";
import { toast } from "sonner";
import { Calendar, Clock, User, Trash2, Check, X } from "lucide-react";

export default function BookingsPage() {
    const [statusFilter, setStatusFilter] = useState("");
    const [coachFilter, setCoachFilter] = useState("");
    const [page, setPage] = useState(1);

    const { data, isLoading, refetch } = useGetAllBookingsQuery({
        status: statusFilter || undefined,
        coach: coachFilter || undefined,
        page,
        limit: 10,
    });

    const [deleteBooking] = useDeleteBookingMutation();
    const [updateBookingStatus] = useUpdateBookingStatusMutation();

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this booking?")) return;

        try {
            await deleteBooking(id).unwrap();
            toast.success("Booking deleted successfully");
            refetch();
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to delete booking");
        }
    };

    const handleStatusUpdate = async (id: string, status: string) => {
        try {
            await updateBookingStatus({ id, status }).unwrap();
            toast.success(`Booking ${status} successfully`);
            refetch();
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to update booking");
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "confirmed": return "bg-green-100 text-green-800";
            case "pending": return "bg-yellow-100 text-yellow-800";
            case "cancelled": return "bg-red-100 text-red-800";
            case "completed": return "bg-blue-100 text-blue-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    if (isLoading) return <div>Loading...</div>;

    const bookings = data?.data?.bookings || [];
    const pagination = data?.data?.pagination;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Bookings Management</h1>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-lg shadow-sm border flex gap-4">
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 border rounded-md"
                >
                    <option value="">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="completed">Completed</option>
                </select>

                <select
                    value={coachFilter}
                    onChange={(e) => setCoachFilter(e.target.value)}
                    className="px-4 py-2 border rounded-md"
                >
                    <option value="">All Coaches</option>
                    <option value="vikram">Coach Vikram</option>
                    <option value="priya">Coach Priya</option>
                    <option value="arjun">Coach Arjun</option>
                </select>
            </div>

            {/* Bookings Table */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Coach</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Session Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {bookings.map((booking: any) => (
                                <tr key={booking._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-gray-400" />
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{booking.name}</div>
                                                <div className="text-sm text-gray-500">{booking.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">{booking.coach}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">{booking.sessionType}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2 text-sm text-gray-900">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(booking.date).toLocaleDateString()}
                                            <Clock className="w-4 h-4 ml-2" />
                                            {booking.time}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                                        <div className="flex gap-2 justify-end">
                                            {booking.status === "pending" && (
                                                <>
                                                    <button
                                                        onClick={() => handleStatusUpdate(booking._id, "confirmed")}
                                                        className="text-green-600 hover:text-green-900"
                                                        title="Confirm"
                                                    >
                                                        <Check className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleStatusUpdate(booking._id, "cancelled")}
                                                        className="text-red-600 hover:text-red-900"
                                                        title="Cancel"
                                                    >
                                                        <X className="w-5 h-5" />
                                                    </button>
                                                </>
                                            )}
                                            <button
                                                onClick={() => handleDelete(booking._id)}
                                                className="text-red-600 hover:text-red-900"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {pagination && (
                    <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t">
                        <div className="text-sm text-gray-700">
                            Showing page {pagination.page} of {pagination.pages} ({pagination.total} total)
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setPage(page - 1)}
                                disabled={page === 1}
                                className="px-4 py-2 border rounded-md disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => setPage(page + 1)}
                                disabled={page === pagination.pages}
                                className="px-4 py-2 border rounded-md disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
