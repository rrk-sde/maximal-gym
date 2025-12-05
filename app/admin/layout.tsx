"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

export default function AdminLayout({
    children,
}: {
    readonly children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Skip auth check for login page
        if (pathname === "/admin/login") {
            setIsLoading(false);
            return;
        }

        // Check if user is authenticated
        const token = localStorage.getItem("gym-token");
        const user = localStorage.getItem("gym-user");

        if (!token || !user) {
            router.push("/admin/login");
            return;
        }

        try {
            const userData = JSON.parse(user);
            if (userData.role !== "admin") {
                localStorage.removeItem("gym-token");
                localStorage.removeItem("gym-user");
                router.push("/admin/login");
                return;
            }
            setIsAuthenticated(true);
        } catch (error) {
            router.push("/admin/login");
            return;
        }

        setIsLoading(false);
    }, [pathname, router]);

    // Show loading state
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF4D00]"></div>
            </div>
        );
    }

    // Show login page without sidebar
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    // Show admin layout only if authenticated
    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="py-4 pl-4">
                <Sidebar />
            </div>

            <div className="flex-1 flex flex-col">
                <div className="p-4">
                    <Topbar />
                </div>

                <main className="px-4">{children}</main>
            </div>
        </div>
    );
}
