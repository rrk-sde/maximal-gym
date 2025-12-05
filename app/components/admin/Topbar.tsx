"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Topbar() {
    const pathname = usePathname();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        // Get user data from localStorage
        const userStr = localStorage.getItem("gym-user");
        if (userStr) {
            setUser(JSON.parse(userStr));
        }
    }, []);

    const generateBreadcrumbs = (): Array<{ label: string; href?: string }> => {
        const segments = (pathname || "").split("/").filter(Boolean);

        if (!segments.length || segments[0] !== "admin") {
            return [];
        }

        const breadcrumbs: Array<{ label: string; href?: string }> = [
            { label: "Dashboard", href: "/admin" },
        ];

        const routeLabels: Record<string, string> = {
            members: "Members",
            classes: "Classes",
            trainers: "Trainers",
            coaches: "Coaches",
            contacts: "Enquiries",
            bookings: "Bookings",
            faqs: "FAQs",
            tenants: "Tenants",
            settings: "Settings",
            add: "Create",
            edit: "Edit",
        };

        for (let i = 1; i < segments.length; i++) {
            const segment = segments[i];
            const href = "/" + segments.slice(0, i + 1).join("/");

            if (!isNaN(Number(segment))) {
                continue;
            }

            const label =
                routeLabels[segment] ||
                segment
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase());

            if (i === segments.length - 1) {
                breadcrumbs.push({ label });
            } else {
                breadcrumbs.push({ label, href });
            }
        }

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    // Get user display info
    const userName = user?.name || "Admin User";
    const userRole = user?.role || "admin";
    const roleDisplay = userRole === "superadmin" ? "Superadmin" : "Administrator";

    // Get initials for avatar
    const initials = userName
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    return (
        <header className="w-full bg-white border-b shadow-sm px-4 md:px-6 py-2 rounded-md flex items-center justify-between">
            {/* Breadcrumb - Hidden on mobile */}
            <div className="hidden sm:block flex-1 min-w-0">
                <nav className="flex items-center gap-2 text-sm">
                    {breadcrumbs.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            {index > 0 && <span className="text-gray-400">/</span>}
                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="text-gray-600 hover:text-[#FF4D00] transition-colors"
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <span className="text-gray-900 font-semibold">{item.label}</span>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            {/* Mobile: Show page title */}
            <div className="sm:hidden flex-1 min-w-0">
                <h1 className="text-sm font-semibold text-gray-700 truncate ml-12">
                    {breadcrumbs.slice(-1)[0]?.label || "Dashboard"}
                </h1>
            </div>

            {/* User Badge */}
            <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                <div className="flex items-center gap-3">
                    <div className="hidden md:block text-right">
                        <div className="text-sm font-semibold text-gray-900">{userName}</div>
                        <div className="text-xs text-gray-500">{roleDisplay}</div>
                    </div>
                    <div className="w-10 h-10 bg-[#FF4D00] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {initials}
                    </div>
                </div>
            </div>
        </header>
    );
}
