"use client";

import { useState } from "react";
import { ArrowRight, Calendar, Users, MessageCircle, Mic } from "lucide-react";
import MarathonModal from "../MarathonModal";

import { APP_CONFIG } from "../../config";

export default function Goals() {
    const [isMarathonModalOpen, setIsMarathonModalOpen] = useState(false);

    const handleParticipate = () => {
        setIsMarathonModalOpen(true);
    };

    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="text-foreground">Built for Your Goals,</span>
                        <br />
                        <span className="text-muted-foreground">Backed by Experts</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mt-6">
                        {APP_CONFIG.gymName} will create personalized plans tailored to your fitness level
                    </p>
                </div>

                {/* Three Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Card 1 - Daily Reminders */}
                    <div className="group bg-card border-2 border-border rounded-3xl p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30">
                        <div className="space-y-3 mb-8">
                            {/* Full Body Workout */}
                            <div className="bg-background border border-border rounded-xl p-4 flex items-center gap-4 transition-all duration-200 hover:border-primary/30">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
                                    <Calendar className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-foreground font-semibold text-sm">Full Body Workout</div>
                                    <div className="text-muted-foreground text-xs">10:00 A.M - 11:30 A.M</div>
                                </div>
                            </div>

                            {/* Boxing */}
                            <div className="bg-background border border-border rounded-xl p-4 flex items-center gap-4 transition-all duration-200 hover:border-primary/30">
                                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L2 7v3h20V7l-10-5zM2 12v10l10-5-10-5zm20 0l-10 5 10 5V12z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-foreground font-semibold text-sm">Boxing</div>
                                    <div className="text-muted-foreground text-xs">9:00 A.M - 10:00 A.M</div>
                                </div>
                            </div>

                            {/* Swimming */}
                            <div className="bg-background border border-border rounded-xl p-4 flex items-center gap-4 transition-all duration-200 hover:border-primary/30">
                                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M2 12c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1 2.5-1 4-1v2c-1.5 0-2.5 1-4 1s-2.5-1-4-1-2.5 1-4 1-2.5-1-4-1-2.5 1-4 1v-2z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-foreground font-semibold text-sm">Swimming</div>
                                    <div className="text-muted-foreground text-xs">7:00 A.M - 8:00 A.M</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <h3 className="text-foreground font-bold text-2xl mb-3 leading-tight">
                                Daily Reminders to
                                <br />
                                Keep You on Track
                            </h3>
                            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                Stay motivated with personalized daily reminders that help you stick to your fitness goals
                            </p>
                            <button className="flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors group">
                                Learn More
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Card 2 - Weekly Challenges */}
                    <div className="group bg-card border-2 border-border rounded-3xl p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30">
                        <div className="mb-8">
                            {/* 5K Marathon Card */}
                            <div className="bg-background border border-border rounded-xl p-5 transition-all duration-200 hover:border-primary/30">
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
                                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-foreground font-bold flex items-center gap-2 text-base">
                                            5K Marathon
                                            <span className="text-lg">🏆</span>
                                        </div>
                                        <div className="text-muted-foreground text-xs flex items-center gap-1 mt-1">
                                            <Users className="w-3 h-3" />
                                            58 Participants
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={handleParticipate}
                                    className="w-full bg-primary text-white font-bold py-3.5 rounded-lg hover:bg-primary/90 transition-all duration-200 cursor-pointer shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
                                >
                                    Participate Now
                                </button>

                                {/* Progress Indicators */}
                                <div className="mt-5 flex items-center justify-between px-2">
                                    <div className="text-muted-foreground text-xs">₹40,000</div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-lg">💰</span>
                                        <span className="text-yellow-500 font-bold text-sm">₹65,000</span>
                                    </div>
                                    <div className="text-muted-foreground text-xs">₹90,000</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <h3 className="text-foreground font-bold text-2xl mb-3 leading-tight">
                                Weekly Challenges
                                <br />
                                for Extra Motivation
                            </h3>
                            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                Take your fitness to the next level with exciting weekly challenges designed to push your limits
                            </p>
                            <button className="flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors group">
                                Learn More
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Card 3 - One-on-One Mentoring */}
                    <div className="group bg-card border-2 border-border rounded-3xl p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30">
                        <div className="mb-8">
                            {/* Avatar and Info */}
                            <div className="bg-background border border-border rounded-xl p-8 text-center transition-all duration-200 hover:border-primary/30">
                                <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/30">
                                    <span className="text-white text-4xl font-bold">AS</span>
                                </div>
                                <div className="text-foreground font-bold text-lg mb-5">Arjun Sharma</div>

                                <div className="flex items-center justify-center gap-4">
                                    <button className="w-12 h-12 bg-secondary border border-border rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-200">
                                        <Mic className="w-5 h-5 text-muted-foreground" />
                                    </button>
                                    <button className="w-12 h-12 bg-secondary border border-border rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-200">
                                        <MessageCircle className="w-5 h-5 text-muted-foreground" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <h3 className="text-foreground font-bold text-2xl mb-3 leading-tight">
                                One-on-One Mentoring
                                <br />
                                with Fitness Experts
                            </h3>
                            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                Get personalized guidance and support from our expert mentors, helping you achieve your goals
                            </p>
                            <button className="flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors group">
                                Learn More
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <MarathonModal
                isOpen={isMarathonModalOpen}
                onClose={() => setIsMarathonModalOpen(false)}
            />
        </section>
    );
}
