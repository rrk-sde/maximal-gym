"use client";
import { useState } from "react";
import { Check, Dumbbell, Users, Heart, Trophy, Clock, Zap, Target } from "lucide-react";
import Link from "next/link";
import TrialModal from "../components/TrialModal";

interface Service {
    id: number;
    icon: any;
    title: string;
    description: string;
    features: string[];
    price: string;
    popular?: boolean;
}

import { APP_CONFIG } from "../config";

export default function ServicesPage() {
    const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);



    const services: Service[] = [
        {
            id: 1,
            icon: Dumbbell,
            title: "Personal Training",
            description: "One-on-one sessions tailored to your specific fitness goals with certified trainers.",
            features: [
                "Customized workout plans",
                "Weekly progress tracking",
                "Nutrition guidance",
                "Flexible scheduling",
                "Goal-oriented programs",
            ],
            price: "₹2,999/month",
            popular: true,
        },
        {
            id: 2,
            icon: Users,
            title: "Group Classes",
            description: "High-energy group sessions including HIIT, Yoga, Zumba, CrossFit, and more.",
            features: [
                "15+ class types",
                "Expert instructors",
                "All fitness levels welcome",
                "Community motivation",
                "Unlimited classes",
            ],
            price: "₹1,999/month",
        },
        {
            id: 3,
            icon: Heart,
            title: "Nutrition Coaching",
            description: "Personalized meal plans and dietary advice from certified nutritionists.",
            features: [
                "Custom meal plans",
                "Macro tracking",
                "Supplement guidance",
                "Weekly check-ins",
                "Recipe suggestions",
            ],
            price: "₹1,499/month",
        },
        {
            id: 4,
            icon: Trophy,
            title: "Athletic Performance",
            description: "Advanced training for athletes looking to enhance their performance.",
            features: [
                "Sport-specific training",
                "Speed & agility drills",
                "Strength conditioning",
                "Recovery protocols",
                "Performance testing",
            ],
            price: "₹3,999/month",
        },
        {
            id: 5,
            icon: Clock,
            title: "24/7 Gym Access",
            description: "Round-the-clock access to our fully equipped facility at your convenience.",
            features: [
                "State-of-the-art equipment",
                "Cardio & strength zones",
                "Free weights area",
                "Functional training space",
                "Locker rooms & showers",
            ],
            price: "₹999/month",
        },
        {
            id: 6,
            icon: Zap,
            title: "HIIT & CrossFit",
            description: "Intense, results-driven workouts designed to push your limits.",
            features: [
                "Expert coaches",
                "Scalable workouts",
                "Competition prep",
                "Community support",
                "WOD programming",
            ],
            price: "₹2,499/month",
        },
    ];

    const additionalServices = [
        {
            icon: Target,
            title: "Body Composition Analysis",
            description: "Detailed assessment of your body fat, muscle mass, and metabolic rate.",
        },
        {
            icon: Heart,
            title: "Injury Rehabilitation",
            description: "Safe recovery programs designed by physiotherapists.",
        },
        {
            icon: Users,
            title: "Corporate Wellness",
            description: "Customized fitness programs for companies and teams.",
        },
        {
            icon: Dumbbell,
            title: "Senior Fitness",
            description: "Specialized programs for older adults focusing on mobility and strength.",
        },
    ];

    return (
        <main className="min-h-screen bg-background text-foreground pt-28 pb-20">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-foreground">Our Services</span>
                        <br />
                        <span className="text-muted-foreground">Transform Your Life</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-6">
                        Whether you're a beginner or an elite athlete, we have the perfect program to help you reach your fitness goals. Choose from our comprehensive range of services.
                    </p>
                </div>

                {/* Main Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={service.id}
                                className={`relative bg-card border rounded-2xl p-8 hover:bg-muted/50 transition-all duration-300 ${service.popular
                                    ? "border-[#FF4D00] ring-2 ring-[#FF4D00]/30"
                                    : "border-border"
                                    }`}
                            >
                                {service.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="bg-[#FF4D00] text-white text-xs font-bold px-4 py-1 rounded-full">
                                            MOST POPULAR
                                        </span>
                                    </div>
                                )}
                                <div className="w-14 h-14 bg-[#FF4D00]/10 rounded-xl flex items-center justify-center mb-6">
                                    <IconComponent className="w-7 h-7 text-[#FF4D00]" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="mb-6">
                                    <p className="text-3xl font-bold text-foreground">
                                        {service.price}
                                    </p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-[#FF4D00] flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => setIsTrialModalOpen(true)}
                                    className="block w-full text-center px-6 py-3 bg-[#FF4D00] text-white font-bold rounded-lg hover:bg-[#FF4D00]/90 transition-colors cursor-pointer"
                                >
                                    Get Started
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Services */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Additional Services
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {additionalServices.map((service, idx) => {
                            const IconComponent = service.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-card border border-border rounded-xl p-6 hover:bg-muted/50 transition-all"
                                >
                                    <div className="w-12 h-12 bg-[#FF4D00]/10 rounded-lg flex items-center justify-center mb-4">
                                        <IconComponent className="w-6 h-6 text-[#FF4D00]" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-[#FF4D00]/20 to-[#FF4D00]/5 border border-[#FF4D00]/30 rounded-2xl p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Start Your Fitness Journey?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Join {APP_CONFIG.gymName} today and get access to world-class facilities, expert trainers, and a supportive community.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => setIsTrialModalOpen(true)}
                            className="px-8 py-4 bg-[#FF4D00] text-white font-bold rounded-lg hover:bg-[#FF4D00]/90 transition-colors cursor-pointer"
                        >
                            Book a Free Trial
                        </button>
                        <Link
                            href="/trainers/coaches"
                            className="px-8 py-4 border border-border text-foreground font-bold rounded-lg hover:bg-muted/10 transition-colors inline-block"
                        >
                            Meet Our Trainers
                        </Link>
                    </div>
                </div>
            </div>

            <TrialModal
                isOpen={isTrialModalOpen}
                onClose={() => setIsTrialModalOpen(false)}
            />
        </main>
    );
}
