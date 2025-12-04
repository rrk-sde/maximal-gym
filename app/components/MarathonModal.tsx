"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";

interface MarathonModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MarathonModal({ isOpen, onClose }: MarathonModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        emergencyContact: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        toast.success("Registration Successful! 🏃‍♂️", {
            description: "You're now registered for the 5K Marathon. Check your email for details.",
        });

        setIsSubmitting(false);
        onClose();

        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            emergencyContact: "",
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-card border border-border rounded-2xl w-full max-w-md p-6 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Header */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🏃‍♂️</span>
                        <h2 className="text-2xl font-bold text-white">5K Marathon Registration</h2>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Fill in your details to join 58 other participants in this exciting challenge!
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                            Full Name *
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF4D00] transition-colors"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                            Email Address *
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF4D00] transition-colors"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                            Phone Number *
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF4D00] transition-colors"
                            placeholder="+91 98765 43210"
                        />
                    </div>

                    <div>
                        <label htmlFor="emergency" className="block text-white text-sm font-medium mb-2">
                            Emergency Contact *
                        </label>
                        <input
                            id="emergency"
                            type="tel"
                            required
                            value={formData.emergencyContact}
                            onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                            className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF4D00] transition-colors"
                            placeholder="Emergency contact number"
                        />
                    </div>

                    {/* Prize Pool Info */}
                    <div className="bg-white/5 border border-border rounded-lg p-4">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Prize Pool:</span>
                            <div className="flex items-center gap-1">
                                <span className="text-lg">💰</span>
                                <span className="text-yellow-500 font-bold">₹65,000</span>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#FF4D00] text-white font-bold py-3 rounded-lg hover:bg-[#FF4D00]/90 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Registering..." : "Register for Marathon"}
                    </button>
                </form>
            </div>
        </div>
    );
}
