import { Check } from "lucide-react";

export default function Workouts() {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Make Your Workouts
                            <br />
                            Exciting with Our
                            <br />
                            Gamification Feature
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            This feature allows you to earn points, unlock achievements, and
                            compete with friends as you progress toward your fitness goals.
                            It makes fitness fun, engaging, and rewarding!
                        </p>

                        <button className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all">
                            Learn More
                        </button>
                    </div>

                    {/* Right Side - Image & Overlay Card */}
                    <div className="relative">
                        {/* Background Text "Gamification" */}
                        <div className="absolute -top-10 right-0 text-6xl md:text-8xl font-bold text-gray-900/50 select-none z-0">
                            Gamification
                        </div>

                        {/* Main Image Container */}
                        <div className="relative z-10 mt-10">
                            <div className="relative h-[400px] w-full bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
                                {/* Background Gradient/Image Placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />

                                {/* Notification Card */}
                                <div className="relative bg-[#1a1a1a] border border-white/10 rounded-xl p-6 w-80 shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
                                    <h3 className="text-white font-bold text-lg mb-4">
                                        Congratulations, Daniel!
                                    </h3>

                                    <div className="bg-white/5 rounded-lg p-4 flex items-center justify-between gap-4">
                                        <p className="text-gray-300 text-sm leading-snug">
                                            You have completed the morning workout! 🎉
                                        </p>
                                        <div className="w-8 h-8 bg-[#FF4D00] rounded flex items-center justify-center flex-shrink-0">
                                            <Check className="w-5 h-5 text-white" strokeWidth={3} />
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mt-4 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-[#FF4D00] rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
