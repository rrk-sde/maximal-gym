"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCreateCoachMutation, useGetCoachByIdQuery, useUpdateCoachMutation } from "@/app/store/api/coachApi";
import { toast } from "sonner";
import { Check, X } from "lucide-react";

interface CoachFormProps {
    coachId?: string;
}

export default function CoachForm({ coachId }: CoachFormProps) {
    const router = useRouter();
    const isEditMode = !!coachId;

    const { data: coachData, isLoading: isLoadingCoach } = useGetCoachByIdQuery(coachId || "", {
        skip: !coachId,
    });

    const [createCoach, { isLoading: isCreating }] = useCreateCoachMutation();
    const [updateCoach, { isLoading: isUpdating }] = useUpdateCoachMutation();

    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        specialty: "",
        experience: "",
        certifications: "",
        bio: "",
        image: "",
        email: "",
        phone: "",
        isActive: true,
    });

    useEffect(() => {
        if (coachData?.data?.coach) {
            const coach = coachData.data.coach;
            setFormData({
                name: coach.name || "",
                slug: coach.slug || "",
                specialty: coach.specialty || "",
                experience: coach.experience || "",
                certifications: coach.certifications || "",
                bio: coach.bio || "",
                image: coach.image || "",
                email: coach.email || "",
                phone: coach.phone || "",
                isActive: coach.isActive ?? true,
            });
        }
    }, [coachData]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (isEditMode) {
                await updateCoach({ id: coachId!, data: formData }).unwrap();
                toast.success("Coach updated successfully");
            } else {
                await createCoach(formData).unwrap();
                toast.success("Coach created successfully");
            }
            router.push("/admin/coaches");
        } catch (error: any) {
            toast.error(error?.data?.message || `Failed to ${isEditMode ? "update" : "create"} coach`);
        }
    };

    if (isLoadingCoach) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    }

    const isLoading = isCreating || isUpdating;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">
                    {isEditMode ? "Edit Coach" : "Add New Coach"}
                </h1>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Name *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Coach Name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Slug *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="coach-slug"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Specialty *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.specialty}
                                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., Strength & Conditioning"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Experience *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.experience}
                                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., 5+ years"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="coach@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone *
                            </label>
                            <input
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="+91 9876543210"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Certifications *
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.certifications}
                            onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., NASM-CPT, ACE"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Image URL
                        </label>
                        <input
                            type="url"
                            value={formData.image}
                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Bio *
                        </label>
                        <textarea
                            required
                            value={formData.bio}
                            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            placeholder="Brief bio about the coach"
                            rows={4}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="isActive"
                            checked={formData.isActive}
                            onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
                            Active
                        </label>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                        >
                            <Check className="w-5 h-5" />
                            {isLoading ? "Saving..." : isEditMode ? "Update Coach" : "Create Coach"}
                        </button>
                        <button
                            type="button"
                            onClick={() => router.push("/admin/coaches")}
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                        >
                            <X className="w-5 h-5 inline mr-2" />
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
