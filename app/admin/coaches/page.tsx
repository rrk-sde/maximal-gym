"use client";

import { useState } from "react";
import { useGetAllCoachesQuery, useDeleteCoachMutation } from "@/app/store/api/coachApi";
import { toast } from "sonner";
import { Plus, Edit, Trash2, Star } from "lucide-react";
import Link from "next/link";

export default function CoachesPage() {
    const { data, isLoading, refetch } = useGetAllCoachesQuery({});
    const [deleteCoach] = useDeleteCoachMutation();

    const handleDelete = async (id: string, name: string) => {
        if (!confirm(`Are you sure you want to delete coach ${name}?`)) return;

        try {
            await deleteCoach(id).unwrap();
            toast.success("Coach deleted successfully");
            refetch();
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to delete coach");
        }
    };

    if (isLoading) return <div>Loading...</div>;

    const coaches = data?.data?.coaches || [];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Coaches Management</h1>
                <Link
                    href="/admin/coaches/add"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    <Plus className="w-5 h-5" />
                    Add New Coach
                </Link>
            </div>

            {/* Coaches Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coaches.map((coach: any) => (
                    <div key={coach._id} className="bg-white rounded-lg shadow-sm border p-6">
                        {/* Coach Image */}
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                            {coach.image ? (
                                <img src={coach.image} alt={coach.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-3xl text-gray-400">
                                    {coach.name.charAt(0)}
                                </div>
                            )}
                        </div>

                        {/* Coach Info */}
                        <div className="text-center mb-4">
                            <h3 className="text-xl font-bold text-gray-900">{coach.name}</h3>
                            <p className="text-sm text-gray-600">{coach.specialty}</p>
                            <div className="flex items-center justify-center gap-1 mt-2">
                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                <span className="text-sm font-medium">{coach.rating || 5.0}</span>
                                <span className="text-sm text-gray-500">({coach.totalSessions || 0} sessions)</span>
                            </div>
                        </div>

                        {/* Coach Details */}
                        <div className="space-y-2 mb-4 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Experience:</span>
                                <span className="font-medium">{coach.experience}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Email:</span>
                                <span className="font-medium text-xs">{coach.email}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Phone:</span>
                                <span className="font-medium">{coach.phone}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Status:</span>
                                <span className={`font-medium ${coach.isActive ? 'text-green-600' : 'text-red-600'}`}>
                                    {coach.isActive ? 'Active' : 'Inactive'}
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                            <Link
                                href={`/admin/coaches/edit/${coach._id}`}
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
                            >
                                <Edit className="w-4 h-4" />
                                Edit
                            </Link>
                            <button
                                onClick={() => handleDelete(coach._id, coach.name)}
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-50"
                            >
                                <Trash2 className="w-4 h-4" />
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {coaches.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg border">
                    <p className="text-gray-500">No coaches found. Add your first coach to get started.</p>
                </div>
            )}
        </div>
    );
}
