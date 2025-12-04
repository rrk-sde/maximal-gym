import type { Metadata } from "next";
import { Oswald, Outfit } from "next/font/google";
import "./globals.css";
import StoreProvider from "./store/storeProvider";
import { Toaster } from "sonner";
import Header from "./components/layout/Header";
import Footer from "./components/sections/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

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
        <html lang="en" className={`${oswald.variable} ${outfit.variable}`} suppressHydrationWarning>
            <body className={outfit.className}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    <StoreProvider>
                        <Header />
                        {children}
                        <Footer />
                        <Toaster position="top-center" />
                    </StoreProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
