"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Calendar, Mail, Dumbbell, HelpCircle, Building2, LogOut } from "lucide-react";

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [userRole, setUserRole] = useState<string>("user");

    useEffect(() => {
        // Get user role from localStorage
        const userStr = localStorage.getItem("gym-user");
        if (userStr) {
            const user = JSON.parse(userStr);
            setUserRole(user.role || "user");
        }
    }, []);

    const menu = [
        {
            label: "Dashboard",
            href: "/admin",
            icon: <LayoutDashboard className="text-[18px]" />,
            roles: ["admin", "superadmin"],
        },
        {
            label: "Bookings",
            href: "/admin/bookings",
            icon: <Calendar className="text-[18px]" />,
            roles: ["admin", "superadmin"],
        },
        {
            label: "Enquiries",
            href: "/admin/contacts",
            icon: <Mail className="text-[18px]" />,
            roles: ["admin", "superadmin"],
        },
        {
            label: "Coaches",
            href: "/admin/coaches",
            icon: <Dumbbell className="text-[18px]" />,
            roles: ["admin", "superadmin"],
        },
        {
            label: "FAQs",
            href: "/admin/faqs",
            icon: <HelpCircle className="text-[18px]" />,
            roles: ["admin", "superadmin"],
        },
        {
            label: "Tenants",
            href: "/admin/tenants",
            icon: <Building2 className="text-[18px]" />,
            roles: ["superadmin"], // Only superadmins can see this
        },
    ];

    // Filter menu based on user role
    const filteredMenu = menu.filter(item => item.roles.includes(userRole));

    const handleLogout = () => {
        localStorage.removeItem("gym-token");
        localStorage.removeItem("gym-user");
        router.push("/admin/login");
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md text-gray-700"
                type="button"
                aria-label="Toggle menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {isOpen && (
                <button
                    type="button"
                    className="fixed inset-0 bg-black/50 z-40 md:hidden cursor-default"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                />
            )}

            <aside
                className={`
          fixed md:static inset-y-0 left-0 z-40
          w-64 bg-white border-r h-full md:h-[94vh] p-6 flex flex-col md:rounded-md shadow-sm
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
            >
                <div className="mb-6">
                    <h2 className="text-2xl font-bold">
                        GYMMAX<span className="text-[rgb(var(--primary))]">.</span>
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">Admin Panel</p>
                </div>

                <nav className="space-y-1">
                    {filteredMenu.map((item) => {
                        const isActive = item.href === "/admin"
                            ? pathname === "/admin"
                            : (pathname || "").startsWith(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                  relative flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-all
                  ${isActive
                                        ? "bg-[#FF4D000D] text-[#FF4D00]"
                                        : "text-gray-700 hover:bg-gray-100"
                                    }
                `}
                                onClick={() => setIsOpen(false)}
                            >
                                <span
                                    className={`
                    absolute left-0 top-0 h-full w-1 rounded-md transition-all
                    ${isActive ? "bg-[#FF4D00]" : "bg-transparent"}
                  `}
                                />
                                {item.icon}
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <button
                    onClick={handleLogout}
                    type="button"
                    aria-label="Logout"
                    title="Logout"
                    className="mt-auto cursor-pointer flex items-center gap-2 text-red-500 text-sm font-medium px-4 py-2 hover:bg-red-50 rounded-md transition"
                >
                    <LogOut className="text-[16px]" />
                    Logout
                </button>
            </aside>
        </>
    );
}
