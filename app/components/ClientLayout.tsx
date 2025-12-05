"use client";

import { usePathname } from "next/navigation";
import Header from "./layout/Header";
import Footer from "./sections/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith("/admin");

    return (
        <>
            {!isAdminRoute && <Header />}
            {children}
            {!isAdminRoute && <Footer />}
        </>
    );
}
