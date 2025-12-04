"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { useCreateContactMutation } from "../../store/api/contactApi";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [createContact, { isLoading }] = useCreateContactMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await createContact(formData).unwrap();

            toast.success("Message Sent! 📧", {
                description: "We'll get back to you as soon as possible.",
            });

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error: any) {
            toast.error("Failed to send message", {
                description: error.data?.message || "Something went wrong. Please try again.",
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left - Contact Info */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Get in Touch
                            <br />
                            <span className="text-muted-foreground">With Maximal</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#FF4D00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-[#FF4D00]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                                    <p className="text-muted-foreground">support@maximalgym.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#FF4D00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-[#FF4D00]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                                    <p className="text-muted-foreground">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#FF4D00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-[#FF4D00]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                                    <p className="text-muted-foreground">
                                        123 Fitness Street, Gym District
                                        <br />
                                        Mumbai, India 400001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="bg-card border border-border rounded-2xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D00] text-foreground"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D00] text-foreground"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D00] text-foreground"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D00] text-foreground"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D00] text-foreground resize-none"
                                    placeholder="Tell us more about your inquiry..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#FF4D00] text-white font-bold py-4 rounded-lg hover:bg-[#FF4D00]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                {isLoading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
