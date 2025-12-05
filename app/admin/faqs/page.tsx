"use client";

import { useState } from "react";
import { useGetAllFAQsQuery, useDeleteFAQMutation, useCreateFAQMutation, useUpdateFAQMutation } from "@/app/store/api/faqApi";
import { toast } from "sonner";
import { Plus, Edit, Trash2, X, Check } from "lucide-react";

export default function FAQsPage() {
    const [categoryFilter, setCategoryFilter] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [editingFaq, setEditingFaq] = useState<any>(null);
    const [formData, setFormData] = useState({
        question: "",
        answer: "",
        category: "general" as "general" | "membership" | "training" | "facilities" | "other",
        order: 1,
        isActive: true,
    });

    const { data, isLoading, refetch } = useGetAllFAQsQuery({
        category: categoryFilter || undefined,
    });

    const [deleteFAQ] = useDeleteFAQMutation();
    const [createFAQ] = useCreateFAQMutation();
    const [updateFAQ] = useUpdateFAQMutation();

    const handleDelete = async (id: string, question: string) => {
        if (!confirm(`Are you sure you want to delete: "${question}"?`)) return;

        try {
            await deleteFAQ(id).unwrap();
            toast.success("FAQ deleted successfully");
            refetch();
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to delete FAQ");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (editingFaq) {
                await updateFAQ({ id: editingFaq._id, data: formData }).unwrap();
                toast.success("FAQ updated successfully");
            } else {
                await createFAQ(formData).unwrap();
                toast.success("FAQ created successfully");
            }
            setShowModal(false);
            setEditingFaq(null);
            resetForm();
            refetch();
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to save FAQ");
        }
    };

    const resetForm = () => {
        setFormData({
            question: "",
            answer: "",
            category: "general",
            order: 1,
            isActive: true,
        });
    };

    const openEditModal = (faq: any) => {
        setEditingFaq(faq);
        setFormData({
            question: faq.question,
            answer: faq.answer,
            category: faq.category,
            order: faq.order,
            isActive: faq.isActive,
        });
        setShowModal(true);
    };

    const openCreateModal = () => {
        setEditingFaq(null);
        resetForm();
        setShowModal(true);
    };

    if (isLoading) return <div>Loading...</div>;

    const faqs = data?.data?.faqs || [];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">FAQs Management</h1>
                <button
                    onClick={openCreateModal}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    <Plus className="w-5 h-5" />
                    Add New FAQ
                </button>
            </div>

            {/* Filter */}
            <div className="bg-white p-4 rounded-lg shadow-sm border">
                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="px-4 py-2 border rounded-md"
                >
                    <option value="">All Categories</option>
                    <option value="general">General</option>
                    <option value="membership">Membership</option>
                    <option value="training">Training</option>
                    <option value="facilities">Facilities</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* FAQs List */}
            <div className="space-y-4">
                {faqs.map((faq: any) => (
                    <div key={faq._id} className="bg-white rounded-lg shadow-sm border p-6">
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 capitalize">
                                        {faq.category}
                                    </span>
                                    {faq.isActive ? (
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                            Active
                                        </span>
                                    ) : (
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                                            Inactive
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-600 text-sm">{faq.answer}</p>
                                <div className="mt-2 text-xs text-gray-500">Order: {faq.order}</div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => openEditModal(faq)}
                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-md"
                                    title="Edit"
                                >
                                    <Edit className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => handleDelete(faq._id, faq.question)}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded-md"
                                    title="Delete"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {faqs.length === 0 && (
                    <div className="text-center py-12 bg-white rounded-lg border">
                        <p className="text-gray-500">No FAQs found. Add your first FAQ to get started.</p>
                    </div>
                )}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/50">
                    <div className="bg-white rounded-lg w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {editingFaq ? "Edit FAQ" : "Add New FAQ"}
                            </h2>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setEditingFaq(null);
                                    resetForm();
                                }}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Question *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.question}
                                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter the question"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Answer *
                                </label>
                                <textarea
                                    required
                                    value={formData.answer}
                                    onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    placeholder="Enter the answer"
                                    rows={5}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Category *
                                    </label>
                                    <select
                                        required
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="general">General</option>
                                        <option value="membership">Membership</option>
                                        <option value="training">Training</option>
                                        <option value="facilities">Facilities</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Order
                                    </label>
                                    <input
                                        type="number"
                                        value={formData.order}
                                        onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        min="1"
                                    />
                                </div>
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
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    <Check className="w-5 h-5" />
                                    {editingFaq ? "Update FAQ" : "Create FAQ"}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowModal(false);
                                        setEditingFaq(null);
                                        resetForm();
                                    }}
                                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
