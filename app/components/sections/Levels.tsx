import { User, Clock, CalendarDays } from "lucide-react";

export default function Levels() {
    return (
        <section id="program" className="py-20 bg-black">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Cards with Background Text */}
                    <div className="relative">
                        {/* Large Background Text */}
                        <div className="absolute top-0 left-0 text-8xl font-bold text-gray-900/50 select-none">
                            Personalized
                        </div>

                        {/* Three Cards */}
                        <div className="relative z-10 space-y-4 pt-24">
                            {/* Workout Area Card */}
                            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 flex items-center gap-4">
                                <div className="w-14 h-14 bg-[#FF4D00] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <User className="w-7 h-7 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-base">Workout Area</div>
                                    <div className="text-gray-400 text-sm">Full Body</div>
                                </div>
                            </div>

                            {/* Intensity Card */}
                            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 flex items-center gap-4">
                                <div className="w-14 h-14 bg-[#FF4D00] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-7 h-7 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-base">Intensity</div>
                                    <div className="text-gray-400 text-sm">90 minutes</div>
                                </div>
                            </div>

                            {/* Schedules Card */}
                            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 flex items-center gap-4">
                                <div className="w-14 h-14 bg-[#FF4D00] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <CalendarDays className="w-7 h-7 text-white" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-base">Schedules</div>
                                    <div className="text-gray-400 text-sm">Mon to Fri</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Achieve Your Goals Faster with Level-Based Personalized Workouts
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Whether you&apos;re a beginner or a seasoned athlete, you&apos;ll receive a workout
                            plan tailored to challenge you just the right amount, pushing you toward
                            your goals faster and more effectively.
                        </p>

                        <button className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
