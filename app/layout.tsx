import type { Metadata } from "next";
import { Oswald, Outfit } from "next/font/google";
import "./globals.css";
import StoreProvider from "./store/storeProvider";
import { Toaster } from "sonner";

const oswald = Oswald({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-oswald",
    weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-outfit",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Maximal Gym - Your Fitness is Our Priority",
    description: "Achieve your fitness goals with expert trainers and state-of-the-art facilities",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${oswald.variable} ${outfit.variable}`}>
            <body className={outfit.className}>
                <StoreProvider>
                    {children}
                    <Toaster position="top-center" />
                </StoreProvider>
            </body>
        </html>
    );
}
