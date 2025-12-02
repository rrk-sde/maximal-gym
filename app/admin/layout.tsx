"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

export default function AdminLayout({
    children,
}: {
    readonly children: React.ReactNode;
}) {
    const router = useRouter();
    const [allowed] = useState(true);

    if (!allowed) return null;

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
