"use client";

import { useState } from "react";
import { useGetAllTenantsQuery, useDeleteTenantMutation, useCreateTenantMutation, useUpdateTenantMutation } from "@/app/store/api/tenantApi";
import { toast } from "sonner";
import { Plus, Edit, Trash2, X, Check, Building2 } from "lucide-react";

export default function TenantsPage() {
    const [showModal, setShowModal] = useState(false);
    const [editingTenant, setEditingTenant] = useState<any>(null);
    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        email: "",
        phone: "",
        address: {
            city: "",
            state: "",
            country: "India",
        },
        subscription: {
            plan: "free" as "free" | "basic" | "premium" | "enterprise",
            status: "active" as "active" | "inactive" | "suspended",
        },
        isActive: true,
    });

    const { data, isLoading, refetch } = useGetAllTenantsQuery({});
    const [deleteTenant] = useDeleteTenantMutation();
    const [createTenant] = useCreateTenantMutation();
    const [updateTenant] = useUpdateTenantMutation();

    // Check if user is superadmin
    const userStr = typeof window !== 'undefined' ? localStorage.getItem('gym-user') : null;
    const user = userStr ? JSON.parse(userStr) : null;
    const isSuperAdmin = user?.role === 'superadmin';

    if (!isSuperAdmin) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
                    <p className="text-gray-600">Only superadmins can manage tenants.</p>
                </div>
            </div>
        );
    }

    const handleDelete = async (id: string, name: string) => {
        if (!confirm(`Are you sure you want to delete tenant: "${name}"? This action cannot be undone.`)) return;

        try {
            await deleteTenant(id).unwrap();
            toast.success("Tenant deleted successfully");
            refetch();
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to delete tenant");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (editingTenant) {
                await updateTenant({ id: editingTenant._id, data: formData }).unwrap();
                toast.success("Tenant updated successfully");
            } else {
                await createTenant(formData).unwrap();
                toast.success("Tenant created successfully");
            }
            setShowModal(false);
            setEditingTenant(null);
            resetForm();
            refetch();
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to save tenant");
        }
    };

    const resetForm = () => {
        setFormData({
            name: "",
            slug: "",
            email: "",
            phone: "",
            address: {
                city: "",
                state: "",
                country: "India",
            },
            subscription: {
                plan: "free",
                status: "active",
            },
            isActive: true,
        });
    };

    const openEditModal = (tenant: any) => {
        setEditingTenant(tenant);
        setFormData({
            name: tenant.name,
            slug: tenant.slug,
            email: tenant.email,
            phone: tenant.phone,
            address: {
                city: tenant.address?.city || "",
                state: tenant.address?.state || "",
                country: tenant.address?.country || "India",
            },
            subscription: {
                plan: tenant.subscription.plan,
                status: tenant.subscription.status,
            },
            isActive: tenant.isActive,
        });
        setShowModal(true);
    };

    const openCreateModal = () => {
        setEditingTenant(null);
        resetForm();
        setShowModal(true);
    };

    if (isLoading) return <div>Loading...</div>;

    const tenants = data?.data?.tenants || [];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Tenant Management</h1>
                    <p className="text-gray-600 mt-1">Manage all gym organizations in the system</p>
                </div>
                <button
                    onClick={openCreateModal}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    <Plus className="w-5 h-5" />
                    Add New Tenant
                </button>
            </div>

            {/* Tenants Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tenants.map((tenant: any) => (
                    <div key={tenant._id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Building2 className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{tenant.name}</h3>
                                    <p className="text-sm text-gray-500">@{tenant.slug}</p>
                                </div>
                            </div>
                            {tenant.isActive ? (
                                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                    Active
                                </span>
                            ) : (
                                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                                    Inactive
                                </span>
                            )}
                        </div>

                        <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="font-medium">Email:</span>
                                <span>{tenant.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="font-medium">Phone:</span>
                                <span>{tenant.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="font-medium">Plan:</span>
                                <span className="capitalize px-2 py-0.5 bg-purple-100 text-purple-800 rounded text-xs font-medium">
                                    {tenant.subscription.plan}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="font-medium">Status:</span>
                                <span className="capitalize">{tenant.subscription.status}</span>
                            </div>
                        </div>

                        <div className="flex gap-2 pt-4 border-t">
                            <button
                                onClick={() => openEditModal(tenant)}
                                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md text-sm font-medium"
                            >
                                <Edit className="w-4 h-4" />
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(tenant._id, tenant.name)}
                                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-md text-sm font-medium"
                            >
                                <Trash2 className="w-4 h-4" />
                                Delete
                            </button>
                        </div>

                        <div className="mt-3 pt-3 border-t">
                            <div className="text-xs text-gray-500">
                                <span className="font-medium">Tenant ID:</span> {tenant._id}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {tenants.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg border">
                    <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No tenants found. Create your first gym organization.</p>
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/50">
                    <div className="bg-white rounded-lg w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {editingTenant ? "Edit Tenant" : "Create New Tenant"}
                            </h2>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setEditingTenant(null);
                                    resetForm();
                                }}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Gym Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Maximal Gym"
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
                                        placeholder="maximal-gym"
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
                                        placeholder="admin@gym.com"
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

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.address.city}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            address: { ...formData.address, city: e.target.value }
                                        })}
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Mumbai"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        State
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.address.state}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            address: { ...formData.address, state: e.target.value }
                                        })}
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Maharashtra"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subscription Plan
                                    </label>
                                    <select
                                        value={formData.subscription.plan}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            subscription: { ...formData.subscription, plan: e.target.value as any }
                                        })}
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="free">Free</option>
                                        <option value="basic">Basic</option>
                                        <option value="premium">Premium</option>
                                        <option value="enterprise">Enterprise</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Status
                                    </label>
                                    <select
                                        value={formData.subscription.status}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            subscription: { ...formData.subscription, status: e.target.value as any }
                                        })}
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                        <option value="suspended">Suspended</option>
                                    </select>
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
                                    Active Tenant
                                </label>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    type="submit"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    <Check className="w-5 h-5" />
                                    {editingTenant ? "Update Tenant" : "Create Tenant"}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowModal(false);
                                        setEditingTenant(null);
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
