"use client";

import { useState } from "react";
import { X, Calendar, Clock } from "lucide-react";
import { toast } from "sonner";

interface TrialModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TrialModal({ isOpen, onClose }: TrialModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        preferredTime: "morning",
        fitnessGoal: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        toast.success("Trial Booked Successfully! 🎉", {
            description: "We'll send you a confirmation email shortly. Get ready to transform your life!",
        });

        setIsSubmitting(false);
        onClose();

        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            preferredTime: "morning",
            fitnessGoal: "",
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-card border border-border rounded-2xl w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto">
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
                        <span className="text-2xl">💪</span>
                        <h2 className="text-2xl font-bold text-white">Start Your Free Trial</h2>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Experience our premium gym facilities and expert trainers for 7 days, absolutely free!
                    </p>
                </div>

                {/* Trial Benefits */}
                <div className="bg-white/5 border border-border rounded-lg p-4 mb-6">
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#FF4D00]" />
                        What's Included:
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center gap-2">
                            <span className="text-[#FF4D00]">✓</span>
                            Full access to all gym equipment
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-[#FF4D00]">✓</span>
                            2 Personal Training Sessions
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-[#FF4D00]">✓</span>
                            Group fitness classes
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-[#FF4D00]">✓</span>
                            Nutrition consultation
                        </li>
                    </ul>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="trial-name" className="block text-white text-sm font-medium mb-2">
                            Full Name *
                        </label>
                        <input
                            id="trial-name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF4D00] transition-colors"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div>
                        <label htmlFor="trial-email" className="block text-white text-sm font-medium mb-2">
                            Email Address *
                        </label>
                        <input
                            id="trial-email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF4D00] transition-colors"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="trial-phone" className="block text-white text-sm font-medium mb-2">
                            Phone Number *
                        </label>
                        <input
                            id="trial-phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF4D00] transition-colors"
                            placeholder="+91 98765 43210"
                        />
                    </div>

                    <div>
                        <label htmlFor="trial-time" className="block text-white text-sm font-medium mb-2 flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            Preferred Time Slot *
                        </label>
                        <select
                            id="trial-time"
                            required
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                            className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF4D00] transition-colors cursor-pointer"
                        >
                            <option value="morning">Morning (6:00 AM - 10:00 AM)</option>
                            <option value="afternoon">Afternoon (10:00 AM - 4:00 PM)</option>
                            <option value="evening">Evening (4:00 PM - 9:00 PM)</option>
                            <option value="flexible">Flexible</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="trial-goal" className="block text-white text-sm font-medium mb-2">
                            Fitness Goal
                        </label>
                        <textarea
                            id="trial-goal"
                            value={formData.fitnessGoal}
                            onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                            className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF4D00] transition-colors resize-none"
                            placeholder="Tell us about your fitness goals (optional)"
                            rows={3}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#FF4D00] text-white font-bold py-3 rounded-lg hover:bg-[#FF4D00]/90 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Booking Your Trial..." : "Start My Free Trial"}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                        No credit card required. Cancel anytime during the trial period.
                    </p>
                </form>
            </div>
        </div>
    );
}
