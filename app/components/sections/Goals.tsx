import { ArrowRight, Calendar, Users, MessageCircle, Mic } from "lucide-react";

export default function Goals() {
    return (
        <section id="about" className="py-20 bg-black">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="text-white">Built for Your Goals,</span>
                        <br />
                        <span className="text-gray-400">Backed by Experts</span>
                    </h2>
                    <p className="text-gray-400 text-lg mt-6">
                        Maximal will create personalized plans tailored to your fitness level
                    </p>
                </div>

                {/* Three Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Card 1 - Daily Reminders */}
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 flex flex-col">
                        <div className="space-y-3 mb-6">
                            {/* Full Body Workout */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#FF4D00] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Calendar className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-white font-medium text-sm">Full Body Workout</div>
                                    <div className="text-gray-400 text-xs">10:00 A.M - 11:30 A.M</div>
                                </div>
                            </div>

                            {/* Boxing */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L2 7v3h20V7l-10-5zM2 12v10l10-5-10-5zm20 0l-10 5 10 5V12z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-white font-medium text-sm">Boxing</div>
                                    <div className="text-gray-400 text-xs">9:00 A.M - 10:00 A.M</div>
                                </div>
                            </div>

                            {/* Swimming */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M2 12c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1 2.5-1 4-1v2c-1.5 0-2.5 1-4 1s-2.5-1-4-1-2.5 1-4 1-2.5-1-4-1-2.5 1-4 1v-2z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-white font-medium text-sm">Swimming</div>
                                    <div className="text-gray-400 text-xs">7:00 A.M - 8:00 A.M</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <h3 className="text-white font-bold text-xl mb-3">
                                Daily Reminders to
                                <br />
                                Keep You on Track
                            </h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Stay motivated with personalized daily reminders that help you stick to your fitness goals
                            </p>
                            <button className="flex items-center gap-2 text-white font-semibold hover:text-[#FF4D00] transition-colors group">
                                Learn More
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Card 2 - Weekly Challenges */}
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 flex flex-col">
                        <div className="mb-6">
                            {/* 5K Marathon Card */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-[#FF4D00] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-white font-semibold flex items-center gap-2">
                                            5K Marathon
                                            <span className="text-lg">🏆</span>
                                        </div>
                                        <div className="text-gray-400 text-xs flex items-center gap-1">
                                            <Users className="w-3 h-3" />
                                            58 Participants
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full bg-[#FF4D00] text-white font-semibold py-3 rounded-lg hover:bg-[#FF4D00]/90 transition-colors">
                                    Participate Now
                                </button>

                                {/* Progress Indicators */}
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="text-gray-500 text-xs"># $5000</div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-lg">💰</span>
                                        <span className="text-yellow-500 font-semibold">$8000</span>
                                    </div>
                                    <div className="text-gray-500 text-xs">$ $4000</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <h3 className="text-white font-bold text-xl mb-3">
                                Weekly Challenges
                                <br />
                                for Extra Motivation
                            </h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Take your fitness to the next level with exciting weekly challenges designed to push your limits
                            </p>
                            <button className="flex items-center gap-2 text-white font-semibold hover:text-[#FF4D00] transition-colors group">
                                Learn More
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Card 3 - One-on-One Mentoring */}
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 flex flex-col">
                        <div className="mb-6">
                            {/* Avatar and Info */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                                <div className="w-24 h-24 bg-[#FF4D00] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-3xl font-bold">AS</span>
                                </div>
                                <div className="text-white font-semibold mb-4">Albert Schwartz</div>

                                <div className="flex items-center justify-center gap-4">
                                    <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                        <Mic className="w-5 h-5 text-white" />
                                    </button>
                                    <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                        <MessageCircle className="w-5 h-5 text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <h3 className="text-white font-bold text-xl mb-3">
                                One-on-One Mentoring
                                <br />
                                with Fitness Experts
                            </h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Get personalized guidance and support from our expert mentors, helping you achieve your goals
                            </p>
                            <button className="flex items-center gap-2 text-white font-semibold hover:text-[#FF4D00] transition-colors group">
                                Learn More
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
