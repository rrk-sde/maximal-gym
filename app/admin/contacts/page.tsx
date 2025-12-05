"use client";

import { useState } from "react";
import { useGetAllContactsQuery, useDeleteContactMutation, useUpdateContactMutation } from "@/app/store/api/contactApi";
import { toast } from "sonner";
import { Mail, Phone, Trash2, Edit } from "lucide-react";

export default function ContactsPage() {
    const [statusFilter, setStatusFilter] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("");
    const [page, setPage] = useState(1);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editData, setEditData] = useState({ status: "", priority: "", notes: "" });

    const { data, isLoading, refetch } = useGetAllContactsQuery({
        status: statusFilter || undefined,
        priority: priorityFilter || undefined,
        page,
        limit: 10,
    });

    const [deleteContact] = useDeleteContactMutation();
    const [updateContact] = useUpdateContactMutation();

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this enquiry?")) return;

        try {
            await deleteContact(id).unwrap();
            toast.success("Enquiry deleted successfully");
            refetch();
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to delete enquiry");
        }
    };

    const handleUpdate = async (id: string) => {
        try {
            await updateContact({ id, data: editData }).unwrap();
            toast.success("Enquiry updated successfully");
            setEditingId(null);
            refetch();
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to update enquiry");
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "resolved": return "bg-green-100 text-green-800";
            case "pending": return "bg-yellow-100 text-yellow-800";
            case "in-progress": return "bg-blue-100 text-blue-800";
            case "closed": return "bg-gray-100 text-gray-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "high": return "bg-red-100 text-red-800";
            case "medium": return "bg-orange-100 text-orange-800";
            case "low": return "bg-green-100 text-green-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    if (isLoading) return <div>Loading...</div>;

    const contacts = data?.data?.contacts || [];
    const pagination = data?.data?.pagination;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Enquiries Management</h1>
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
                    <option value="in-progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                    <option value="closed">Closed</option>
                </select>

                <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                    className="px-4 py-2 border rounded-md"
                >
                    <option value="">All Priorities</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            {/* Contacts Table */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {contacts.map((contact: any) => (
                                <tr key={contact._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                                <Mail className="w-3 h-3" />
                                                {contact.email}
                                            </div>
                                            {contact.phone && (
                                                <div className="text-sm text-gray-500 flex items-center gap-1">
                                                    <Phone className="w-3 h-3" />
                                                    {contact.phone}
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900 max-w-xs">{contact.subject}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-500 max-w-xs truncate">{contact.message}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {editingId === contact._id ? (
                                            <select
                                                value={editData.status}
                                                onChange={(e) => setEditData({ ...editData, status: e.target.value })}
                                                className="text-xs border rounded px-2 py-1"
                                            >
                                                <option value="pending">Pending</option>
                                                <option value="in-progress">In Progress</option>
                                                <option value="resolved">Resolved</option>
                                                <option value="closed">Closed</option>
                                            </select>
                                        ) : (
                                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(contact.status)}`}>
                                                {contact.status}
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {editingId === contact._id ? (
                                            <select
                                                value={editData.priority}
                                                onChange={(e) => setEditData({ ...editData, priority: e.target.value })}
                                                className="text-xs border rounded px-2 py-1"
                                            >
                                                <option value="low">Low</option>
                                                <option value="medium">Medium</option>
                                                <option value="high">High</option>
                                            </select>
                                        ) : (
                                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(contact.priority)}`}>
                                                {contact.priority}
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(contact.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex gap-2">
                                            {editingId === contact._id ? (
                                                <>
                                                    <button
                                                        onClick={() => handleUpdate(contact._id)}
                                                        className="text-green-600 hover:text-green-900"
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        onClick={() => setEditingId(null)}
                                                        className="text-gray-600 hover:text-gray-900"
                                                    >
                                                        Cancel
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <button
                                                        onClick={() => {
                                                            setEditingId(contact._id);
                                                            setEditData({
                                                                status: contact.status,
                                                                priority: contact.priority,
                                                                notes: contact.notes || "",
                                                            });
                                                        }}
                                                        className="text-blue-600 hover:text-blue-900"
                                                        title="Edit"
                                                    >
                                                        <Edit className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(contact._id)}
                                                        className="text-red-600 hover:text-red-900"
                                                        title="Delete"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                </>
                                            )}
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
