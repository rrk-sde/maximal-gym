import Link from "next/link";
import { Dumbbell, Target, TrendingUp } from "lucide-react";

export default function StrengthTrainingPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-28 pb-20">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-white">Strength Training</span>
                        <br />
                        <span className="text-gray-400">Build Power, Gain Muscle</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
                        Transform your body with our comprehensive strength training programs designed by expert coaches.
                    </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <Dumbbell className="w-12 h-12 text-[#FF4D00] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
                        <p className="text-gray-400">
                            Work with certified trainers who specialize in strength and conditioning.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <Target className="w-12 h-12 text-[#FF4D00] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Personalized Plans</h3>
                        <p className="text-gray-400">
                            Custom workout programs tailored to your fitness level and goals.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <TrendingUp className="w-12 h-12 text-[#FF4D00] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Track Progress</h3>
                        <p className="text-gray-400">
                            Monitor your gains with our advanced tracking and analytics system.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/#home"
                        className="inline-block px-8 py-4 bg-[#FF4D00] text-white font-bold rounded-lg hover:bg-[#FF4D00]/90 transition-colors"
                    >
                        Start Training Today
                    </Link>
                </div>
            </div>
        </main>
    );
}
