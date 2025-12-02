"use client";

import Image from "next/image";
import { Play, Calendar, Dumbbell, Bike } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[100dvh] bg-black overflow-hidden flex flex-col justify-center pt-24 pb-12 lg:py-0">

            {/* LAYER 1: Background Text (Centered & Massive) */}
            <div className="absolute inset-0 flex items-start justify-center text-center z-0 pointer-events-none select-none pt-24 lg:pt-32">
                <h1 className="text-[10vw] lg:text-[8vw] leading-[0.9] font-bold  uppercase font-oswald">
                    <span className="text-white/80 block drop-shadow-lg">Your Fitness Is</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 block drop-shadow-lg">
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
                        <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-5 w-full max-w-xs mx-auto lg:ml-auto lg:mr-0 shadow-2xl backdrop-blur-sm">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-white rounded flex items-center justify-center flex-shrink-0">
                                    <Calendar className="w-6 h-6 text-black" fill="currentColor" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-base">1 on 1 w/ Coach Jack</h3>
                                    <p className="text-gray-400 text-xs mt-1">9:00 A.M - 11:30 A.M</p>
                                </div>
                            </div>
                            <button className="w-full bg-[#FF4D00] text-white text-sm font-bold py-3 rounded hover:bg-[#FF4D00]/90 transition-colors">
                                Confirm Booking
                            </button>
                        </div>

                        {/* Card 2: Timer */}
                        <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-4 w-full max-w-xs mx-auto lg:ml-auto lg:mr-0 flex items-center gap-4 shadow-2xl backdrop-blur-sm">
                            <div className="w-12 h-12 bg-[#FF4D00] rounded flex items-center justify-center flex-shrink-0">
                                <Bike className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1 flex items-center justify-between">
                                <span className="text-white font-mono text-2xl font-bold tracking-widest">1:20:59</span>
                                <Play className="w-5 h-5 text-white fill-white" />
                            </div>
                        </div>

                    </div>

                    {/* Right Side - Workout Card */}
                    <div className="lg:col-span-3 order-3 lg:order-3 relative z-20">
                        <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-6 w-full max-w-xs mx-auto lg:mr-auto lg:ml-0 shadow-2xl backdrop-blur-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-[#FF4D00] rounded flex items-center justify-center flex-shrink-0">
                                    <Dumbbell className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-base">Full Body Workout</h3>
                                    <p className="text-gray-400 text-xs mt-1">10:00 A.M - 11:30 A.M</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <p className="text-white text-sm font-medium mb-2">Workout Lists:</p>

                                {[
                                    { name: "Push-Ups", count: "15 x 3" },
                                    { name: "Pull-Ups", count: "12 x 3" },
                                    { name: "Weighted Squats", count: "12 x 3" },
                                    { name: "Deadlifts", count: "10 x 3" },
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                                        <span className="text-gray-400 text-sm">{item.name}</span>
                                        <span className="text-white text-sm font-medium">{item.count}</span>
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
                    <p className="text-gray-500 text-sm mb-6">Trusted by Over 1,000 Clients Worldwide</p>
                    <div className="flex justify-center gap-8 md:gap-16 opacity-50 grayscale px-4 flex-wrap">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-2">
                                {/* Placeholder Logo Icon */}
                                <div className="w-6 h-6 bg-gray-400 rounded-full" />
                                <span className="text-gray-400 font-bold text-lg">Logoipsum</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
