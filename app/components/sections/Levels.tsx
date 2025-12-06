import { User, Clock, CalendarDays } from "lucide-react";
import { APP_CONFIG } from "../../config";

export default function Levels() {
    return (
        <div className="container mx-auto px-6 md:py-20 py-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Cards with Background Text */}
                <div className="relative">
                    {/* Large Background Text */}
                    {/* <div className="absolute top-0 left-0 text-5xl md:text-8xl font-bold text-foreground/5 select-none">
                        Personalized
                    </div> */}
                    <div className="absolute  left-0 top-4 text-6xl md:text-8xl font-bold text-foreground/5 select-none z-0">
                        Personalized
                    </div>

                    {/* Three Cards */}
                    <div className="relative z-10 space-y-4 pt-24">
                        {/* Workout Area Card */}
                        <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                <User className="w-7 h-7 text-black dark:text-white" strokeWidth={2.5} />
                            </div>
                            <div>
                                <div className="text-foreground font-semibold text-base">Workout Area</div>
                                <div className="text-muted-foreground text-sm">Full Body</div>
                            </div>
                        </div>

                        {/* Intensity Card */}
                        <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                <Clock className="w-7 h-7 text-black dark:text-white" strokeWidth={2.5} />
                            </div>
                            <div>
                                <div className="text-foreground font-semibold text-base">Intensity</div>
                                <div className="text-muted-foreground text-sm">90 minutes</div>
                            </div>
                        </div>

                        {/* Schedules Card */}
                        <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                <CalendarDays className="w-7 h-7 text-black dark:text-white" strokeWidth={2.5} />
                            </div>
                            <div>
                                <div className="text-foreground font-semibold text-base">Schedules</div>
                                <div className="text-muted-foreground text-sm">Mon to Fri</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Content */}
                <div>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                        Experience Patna&apos;s Premier Fitness Destination at {APP_CONFIG.gymName}
                    </h2>

                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        Located in the heart of Anishabad, {APP_CONFIG.gymName} is the best unisex gym in Patna, offering world-class equipment, expert trainers, and a supportive community. Whether you&apos;re looking for weight loss, muscle gain, or general fitness, our personalized level-based programs are designed to help you achieve your goals.
                    </p>

                    <button className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-white/5 transition-all">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}
