"use client";

import { usePathname } from "next/navigation";

export default function Topbar() {
    const pathname = usePathname();

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
                        <div className="text-sm font-semibold text-gray-900">Admin User</div>
                        <div className="text-xs text-gray-500">Administrator</div>
                    </div>
                    <div className="w-10 h-10 bg-[#FF4D00] rounded-full flex items-center justify-center text-white font-semibold">
                        AU
                    </div>
                </div>
            </div>
        </header>
    );
}
