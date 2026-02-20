"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

import { APP_CONFIG } from "../../config";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <header className="fixed top-0 left-0 right-0 z-[9999] bg-gradient-to-r from-background/95 via-blue-950/20 to-background/95 backdrop-blur-2xl border-b border-border shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(147,197,253,0.08),transparent_50%)] pointer-events-none" />
            <div className="container mx-auto px-6 lg:px-12 relative z-[10001] pointer-events-none">
                <div className="flex items-center justify-between h-20 relative z-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 pointer-events-auto">
                        <div className="w-8 h-8 relative">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FF4D00" />
                            </svg>
                        </div>
                        <span className="text-xl font-semibold text-foreground">{APP_CONFIG.gymName}</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-10 pointer-events-auto">
                        {/* Programs Dropdown */}
                        <div
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => setActiveDropdown('programs')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-4">
                                Programs
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Invisible bridge to prevent closing when moving mouse */}
                            <div className="absolute top-full left-0 w-full h-2 bg-transparent" />

                            {activeDropdown === 'programs' && (
                                <div className="absolute top-[calc(100%-0.5rem)] left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-xl py-2 z-[10000] animate-fade-in">
                                    <Link href="/programs/strength-training" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-background hover:text-foreground transition-colors">Strength Training</Link>
                                    <Link href="/programs/cardio" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-background hover:text-foreground transition-colors">Cardio</Link>
                                    <Link href="/programs/yoga" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-background hover:text-foreground transition-colors">Yoga</Link>
                                </div>
                            )}
                        </div>

                        {/* Trainers Dropdown */}
                        <div
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => setActiveDropdown('trainers')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-4">
                                Trainers
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Invisible bridge to prevent closing when moving mouse */}
                            <div className="absolute top-full left-0 w-full h-2 bg-transparent" />

                            {activeDropdown === 'trainers' && (
                                <div className="absolute top-[calc(100%-0.5rem)] left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-xl py-2 z-[10000] animate-fade-in">
                                    <Link href="/trainers/coaches" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-background hover:text-foreground transition-colors">Our Coaches</Link>
                                    <Link href="/trainers/book-session" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-background hover:text-foreground transition-colors">Book a Session</Link>
                                </div>
                            )}
                        </div>

                        <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Services
                        </Link>

                        <Link href="/gallery" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Gallery
                        </Link>

                        <Link href="/#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Testimonials
                        </Link>

                        <Link href="/articles" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Articles
                        </Link>
                        <Link href="/workouts" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Workouts
                        </Link>

                        <Link href="/#classes" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Schedule
                        </Link>

                        <Link href="/#memberships" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Memberships
                        </Link>
                    </nav>

                    {/* Theme Toggle and Register Button */}
                    <div className="hidden lg:flex items-center gap-4 pointer-events-auto">
                        <ThemeToggle />
                        <Link
                            href="/admin"
                            className="px-6 py-2.5 bg-[#FF4D00] text-white text-sm font-medium rounded-md hover:bg-[#FF4D00]/90 transition-all shadow-lg shadow-[#FF4D00]/20"
                        >
                            Register Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-foreground pointer-events-auto"
                        aria-label="Toggle menu"
                        type="button"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-background/50 backdrop-blur-sm z-[9997] lg:hidden"
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-background/95 backdrop-blur-2xl border-t border-border shadow-xl relative z-[9998]">
                    <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        <a
                            href="#programs"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Programs
                        </a>
                        <a
                            href="#trainers"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Trainers
                        </a>
                        <Link
                            href="/services"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="/gallery"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Gallery
                        </Link>
                        <a
                            href="#testimonials"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Testimonials
                        </a>
                        <a
                            href="/articles"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Articles
                        </a>
                        <Link
                            href="/workouts"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Workouts
                        </Link>
                        <a
                            href="#classes"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Schedule
                        </a>
                        <a
                            href="#memberships"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Memberships
                        </a>

                        {/* Theme Toggle for Mobile */}
                        <div className="flex justify-center mt-4 mb-2">
                            <ThemeToggle />
                        </div>

                        <Link
                            href="/admin"
                            className="px-6 py-3 bg-[#FF4D00] text-white rounded-md font-medium text-center hover:bg-[#FF4D00]/90 transition-all shadow-lg shadow-[#FF4D00]/20"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Register Now
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
