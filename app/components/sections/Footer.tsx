import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black pt-20 border-t border-white/10">
            <div className="container mx-auto px-6 lg:px-12">
                {/* CTA Banner */}
                <div className="relative rounded-3xl overflow-hidden mb-20">
                    <div className="absolute inset-0 bg-[#FF4D00]/10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D00]/20 to-transparent" />

                    <div className="relative z-10 p-12 md:p-20 text-center">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Start Your Fitness
                            <br />
                            Journey Now with Maximal
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Join our community and transform your life today.
                        </p>
                        <button className="px-8 py-4 bg-[#FF4D00] text-white font-bold rounded-lg hover:bg-[#FF4D00]/90 transition-all">
                            Start Free Trial
                        </button>
                    </div>

                    {/* Background Pattern/Image */}
                    <div className="absolute inset-0 -z-10 opacity-20">
                        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#FF4D00] rounded-full blur-[150px]" />
                        <div className="absolute left-0 top-0 w-96 h-96 bg-[#FF4D00] rounded-full blur-[150px]" />
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-6 h-6 relative">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FF4D00" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-white">Maximal</span>
                        </Link>
                        <p className="text-gray-400 text-sm mb-6">
                            The best fitness destination for your healthy lifestyle.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Service</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Personal Training</a></li>
                            <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Group Classes</a></li>
                            <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Online Coaching</a></li>
                            <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Nutrition Plans</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-[#FF4D00] transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to get latest updates and offers.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm w-full focus:outline-none focus:border-[#FF4D00]"
                            />
                            <button className="bg-[#FF4D00] text-white p-2 rounded-lg hover:bg-[#FF4D00]/90 transition-colors">
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2024 Maximal. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
