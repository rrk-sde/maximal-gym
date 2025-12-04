import Link from "next/link";
import { Heart, Zap, Activity } from "lucide-react";

export default function CardioPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-28 pb-20">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-white">Cardio Programs</span>
                        <br />
                        <span className="text-gray-400">Boost Endurance, Burn Fat</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
                        High-intensity cardio workouts to improve your cardiovascular health and stamina.
                    </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <Heart className="w-12 h-12 text-[#FF4D00] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Heart Health</h3>
                        <p className="text-gray-400">
                            Improve cardiovascular fitness and reduce health risks.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <Zap className="w-12 h-12 text-[#FF4D00] mb-4" />
                        <h3 className="text-xl font-bold mb-2">High Intensity</h3>
                        <p className="text-gray-400">
                            HIIT workouts designed to maximize calorie burn in less time.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <Activity className="w-12 h-12 text-[#FF4D00] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Variety</h3>
                        <p className="text-gray-400">
                            From running to cycling, we offer diverse cardio options.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/#home"
                        className="inline-block px-8 py-4 bg-[#FF4D00] text-white font-bold rounded-lg hover:bg-[#FF4D00]/90 transition-colors"
                    >
                        Join Our Cardio Classes
                    </Link>
                </div>
            </div>
        </main>
    );
}
