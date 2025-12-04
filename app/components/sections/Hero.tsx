"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Calendar, Dumbbell, Bike, Zap, Activity, Heart, Sun } from "lucide-react";
import BookingModal from "../BookingModal";

export default function Hero() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [time, setTime] = useState(4859); // 1:20:59 in seconds
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const brands = [
        { name: "Technogym", icon: Dumbbell },
        { name: "MuscleBlaze", icon: Zap },
        { name: "CrossFit", icon: Activity },
        { name: "Yoga Alliance", icon: Sun },
        { name: "Men's Health", icon: Heart }
    ];

    return (
        <section id="home" className="relative min-h-[100dvh] bg-background overflow-hidden flex flex-col justify-center pt-24 pb-12 lg:py-0">

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

            {/* LAYER 1: Background Text (Centered & Massive) */}
            <div className="absolute inset-0 flex items-start justify-center text-center z-0 pointer-events-none select-none pt-24 lg:pt-32">
                <h1 className="text-[10vw] lg:text-[8vw] leading-[0.9] font-bold  uppercase font-oswald">
                    <span className="text-foreground/80 block drop-shadow-lg">Your Fitness Is</span>
                    <span className="text-foreground/10 block drop-shadow-lg">
                        Our Priority
                    </span>
                </h1>
            </div>

            {/* LAYER 2: Main Content Grid (Model + Cards) */}
            <div className="container mx-auto px-4 md:px-6 sm:mt-54  lg:px-12 relative z-10 flex-1 flex flex-col justify-center">
                <div className="grid lg:grid-cols-12 gap-6 items-center">

                    {/* Center - Model Image (Mobile: Top) */}
                    <div className="lg:col-span-6 relative h-[45vh] md:h-[60vh] lg:h-[85vh] order-1 lg:order-2 flex items-end justify-center mb-[-20px] lg:mb-0 translate-y-8 lg:translate-y-12">
                        {/* Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-white/5 blur-[60px] lg:blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative w-full h-full">
                            <Image
                                src="/hero-model.png"
                                alt="Fitness Model"
                                fill
                                className="object-contain object-bottom drop-shadow-2xl"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>

                    {/* Left Side - Floating Cards */}
                    <div className="lg:col-span-3 flex flex-col gap-4 lg:gap-6 order-2 lg:order-1 relative z-20">

                        {/* Card 1: 1 on 1 Coaching */}
                        <div className="bg-card border border-border rounded-xl p-5 w-full max-w-xs mx-auto lg:ml-auto lg:mr-0 shadow-2xl backdrop-blur-sm">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-white rounded flex items-center justify-center flex-shrink-0">
                                    <Calendar className="w-6 h-6 text-black" fill="currentColor" />
                                </div>
                                <div>
                                    <h3 className="text-foreground font-semibold text-base">1 on 1 w/ Coach Vikram</h3>
                                    <p className="text-muted-foreground text-xs mt-1">9:00 A.M - 11:30 A.M</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="w-full bg-[#FF4D00] text-foreground text-sm font-bold py-3 rounded hover:bg-[#FF4D00]/90 transition-colors cursor-pointer"
                            >
                                Confirm Booking
                            </button>
                        </div>

                        {/* Card 2: Timer */}
                        <div className="bg-card border border-border rounded-xl p-4 w-full max-w-xs mx-auto lg:ml-auto lg:mr-0 flex items-center gap-4 shadow-2xl backdrop-blur-sm">
                            <div className="w-12 h-12 bg-[#FF4D00] rounded flex items-center justify-center flex-shrink-0">
                                <Bike className="w-7 h-7 text-foreground" />
                            </div>
                            <div className="flex-1 flex items-center justify-between">
                                <span className="text-foreground font-mono text-2xl font-bold tracking-widest tabular-nums">
                                    {formatTime(time)}
                                </span>
                                <button onClick={toggleTimer} className="focus:outline-none hover:scale-110 transition-transform">
                                    {isRunning ? (
                                        <Pause className="w-5 h-5 text-foreground fill-white" />
                                    ) : (
                                        <Play className="w-5 h-5 text-foreground fill-white" />
                                    )}
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Right Side - Workout Card */}
                    <div className="lg:col-span-3 order-3 lg:order-3 relative z-20">
                        <div className="bg-card border border-border rounded-xl p-6 w-full max-w-xs mx-auto lg:mr-auto lg:ml-0 shadow-2xl backdrop-blur-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-[#FF4D00] rounded flex items-center justify-center flex-shrink-0">
                                    <Dumbbell className="w-7 h-7 text-foreground" />
                                </div>
                                <div>
                                    <h3 className="text-foreground font-semibold text-base">Full Body Workout</h3>
                                    <p className="text-muted-foreground text-xs mt-1">10:00 A.M - 11:30 A.M</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <p className="text-foreground text-sm font-medium mb-2">Workout Lists:</p>

                                {[
                                    { name: "Push-Ups", count: "15 x 3" },
                                    { name: "Pull-Ups", count: "12 x 3" },
                                    { name: "Weighted Squats", count: "12 x 3" },
                                    { name: "Deadlifts", count: "10 x 3" },
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                                        <span className="text-muted-foreground text-sm">{item.name}</span>
                                        <span className="text-foreground text-sm font-medium">{item.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer Logos */}
            <div className="relative lg:absolute bottom-0 lg:bottom-8 left-0 w-full z-20 mt-12 lg:mt-0">
                <div className="text-center">
                    <p className="text-gray-500 text-sm mb-6">Patna&apos;s Most Trusted Fitness Community</p>
                    <div className="flex justify-center gap-8 md:gap-16 opacity-50 grayscale px-4 flex-wrap">
                        {brands.map((brand, i) => (
                            <div key={i} className="flex items-center gap-2">
                                {/* Logo Icon */}
                                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                                    <brand.icon className="w-4 h-4 text-muted-foreground" />
                                </div>
                                <span className="text-muted-foreground font-bold text-lg">{brand.name}</span>
                            </div>
                        ))}
                    </div>
                </div >
            </div>

        </section>
    );
}
