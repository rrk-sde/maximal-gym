"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import { toast } from "sonner";

import { useCreateBookingMutation } from "../../store/api/bookingApi";

export default function BookSessionPage() {
    const [createBooking, { isLoading }] = useCreateBookingMutation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        coach: "",
        sessionType: "",
        date: "",
        time: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await createBooking(formData).unwrap();

            toast.success("Session Booked! 🎯", {
                description: "Your session has been confirmed. Check your email for details.",
            });

            setFormData({
                name: "",
                email: "",
                phone: "",
                coach: "",
                sessionType: "",
                date: "",
                time: "",
            });
        } catch (error: any) {
            console.error("Booking Error:", error);
            toast.error("Booking Failed", {
                description: error?.data?.message || "Something went wrong. Please try again.",
            });
        }
    };

    return (
        <main className="min-h-screen bg-background text-foreground pt-28 pb-20">
            <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-foreground">Book a Session</span>
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Schedule a one-on-one session with our expert trainers.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-foreground text-sm font-medium mb-2 flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Full Name *
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="email" className="block text-foreground text-sm font-medium mb-2">
                                Email *
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-foreground text-sm font-medium mb-2">
                                Phone *
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                placeholder="+91 98765 43210"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="coach" className="block text-foreground text-sm font-medium mb-2">
                            Choose Coach *
                        </label>
                        <select
                            id="coach"
                            required
                            value={formData.coach}
                            onChange={(e) => setFormData({ ...formData, coach: e.target.value })}
                            className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
                        >
                            <option value="">Select a coach</option>
                            <option value="vikram">Coach Vikram - Strength & Conditioning</option>
                            <option value="priya">Coach Priya - Yoga & Flexibility</option>
                            <option value="arjun">Coach Arjun - HIIT & Cardio</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="sessionType" className="block text-foreground text-sm font-medium mb-2">
                            Session Type *
                        </label>
                        <select
                            id="sessionType"
                            required
                            value={formData.sessionType}
                            onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                            className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
                        >
                            <option value="">Select session type</option>
                            <option value="personal">Personal Training (1 hour) - ₹1,500</option>
                            <option value="assessment">Fitness Assessment (30 min) - ₹500</option>
                            <option value="nutrition">Nutrition Consultation (45 min) - ₹1,000</option>
                        </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="date" className="block text-foreground text-sm font-medium mb-2 flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Preferred Date *
                            </label>
                            <input
                                id="date"
                                type="date"
                                required
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
                            />
                        </div>

                        <div>
                            <label htmlFor="time" className="block text-foreground text-sm font-medium mb-2 flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                Preferred Time *
                            </label>
                            <select
                                id="time"
                                required
                                value={formData.time}
                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
                            >
                                <option value="">Select time</option>
                                <option value="6am">6:00 AM</option>
                                <option value="8am">8:00 AM</option>
                                <option value="10am">10:00 AM</option>
                                <option value="4pm">4:00 PM</option>
                                <option value="6pm">6:00 PM</option>
                                <option value="8pm">8:00 PM</option>
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Booking..." : "Confirm Booking"}
                    </button>
                </form>

                <div className="text-center mt-8">
                    <Link href="/#home" className="text-muted-foreground hover:text-foreground transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
