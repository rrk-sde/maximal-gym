"use client";

import { useGetAllTenantsQuery } from "@/app/store/api/tenantApi";
import { Building2 } from "lucide-react";
import { useEffect, useState } from "react";

interface TenantSelectorProps {
    onTenantChange?: (tenantId: string | null) => void;
}

export default function TenantSelector({ onTenantChange }: TenantSelectorProps) {
    const [selectedTenant, setSelectedTenant] = useState<string>("");
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);
    const { data: tenantsData } = useGetAllTenantsQuery({});

    useEffect(() => {
        // Check if user is superadmin
        const userStr = localStorage.getItem("gym-user");
        if (userStr) {
            const user = JSON.parse(userStr);
            setIsSuperAdmin(user.role === "superadmin");

            // Get saved tenant selection from localStorage
            const savedTenant = localStorage.getItem("selected-tenant-id");
            if (savedTenant) {
                setSelectedTenant(savedTenant);
            }
        }
    }, []);

    const handleTenantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const tenantId = e.target.value;
        setSelectedTenant(tenantId);

        // Save to localStorage
        if (tenantId) {
            localStorage.setItem("selected-tenant-id", tenantId);
        } else {
            localStorage.removeItem("selected-tenant-id");
        }

        // Notify parent component
        if (onTenantChange) {
            onTenantChange(tenantId || null);
        }

        // Reload page to apply filter
        window.location.reload();
    };

    // Only show for superadmin
    if (!isSuperAdmin) {
        return null;
    }

    const tenants = tenantsData?.data?.tenants || [];

    return (
        <div className="flex items-center gap-2 border-r pr-4">
            <Building2 className="w-4 h-4 text-gray-500" />
            <select
                value={selectedTenant}
                onChange={handleTenantChange}
                className="text-sm border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#FF4D00] focus:border-transparent text-gray-900 bg-white"
            >
                <option value="">All Tenants</option>
                {tenants.map((tenant: any) => (
                    <option key={tenant._id} value={tenant._id}>
                        {tenant.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
