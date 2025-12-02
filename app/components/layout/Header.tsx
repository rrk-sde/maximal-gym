"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/5">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-8 h-8 relative">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FF4D00" />
                            </svg>
                        </div>
                        <span className="text-xl font-semibold text-white">Maximal</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {/* Programs Dropdown */}
                        <div
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => setActiveDropdown('programs')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors py-4">
                                Programs
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Invisible bridge to prevent closing when moving mouse */}
                            <div className="absolute top-full left-0 w-full h-2 bg-transparent" />

                            {activeDropdown === 'programs' && (
                                <div className="absolute top-[calc(100%-0.5rem)] left-0 mt-2 w-48 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl py-2 z-50 animate-fade-in">
                                    <a href="#strength" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors">Strength Training</a>
                                    <a href="#cardio" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors">Cardio</a>
                                    <a href="#yoga" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors">Yoga</a>
                                </div>
                            )}
                        </div>

                        {/* Trainers Dropdown */}
                        <div
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => setActiveDropdown('trainers')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors py-4">
                                Trainers
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Invisible bridge to prevent closing when moving mouse */}
                            <div className="absolute top-full left-0 w-full h-2 bg-transparent" />

                            {activeDropdown === 'trainers' && (
                                <div className="absolute top-[calc(100%-0.5rem)] left-0 mt-2 w-48 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl py-2 z-50 animate-fade-in">
                                    <a href="#coaches" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors">Our Coaches</a>
                                    <a href="#book" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors">Book a Session</a>
                                </div>
                            )}
                        </div>

                        <a href="#testimonials" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            Testimonials
                        </a>

                        <a href="#articles" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            Articles
                        </a>
                    </nav>

                    {/* Register Button */}
                    <div className="hidden lg:block">
                        <Link
                            href="/admin"
                            className="px-6 py-2.5 border border-white/20 text-white text-sm font-medium rounded-md hover:bg-white/5 transition-all"
                        >
                            Register Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-white"
                        aria-label="Toggle menu"
                        type="button"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-black border-t border-white/10">
                    <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        <a href="#programs" className="text-sm font-medium text-gray-300 hover:text-white py-2">Programs</a>
                        <a href="#trainers" className="text-sm font-medium text-gray-300 hover:text-white py-2">Trainers</a>
                        <a href="#testimonials" className="text-sm font-medium text-gray-300 hover:text-white py-2">Testimonials</a>
                        <a href="#articles" className="text-sm font-medium text-gray-300 hover:text-white py-2">Articles</a>
                        <Link
                            href="/admin"
                            className="mt-4 px-6 py-3 border border-white/20 text-white rounded-md font-medium text-center"
                        >
                            Register Now
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
