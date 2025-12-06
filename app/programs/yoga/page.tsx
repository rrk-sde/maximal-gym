import Link from "next/link";
import { Sun, Wind, Sparkles } from "lucide-react";

export default function YogaPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-28 pb-20">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-foreground">Yoga Classes</span>
                        <br />
                        <span className="text-muted-foreground">Find Balance, Inner Peace</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                        Experience mindful movement and meditation with our certified yoga instructors.
                    </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-card border border-border rounded-xl p-6">
                        <Sun className="w-12 h-12 text-[#FF4D00] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Flexibility</h3>
                        <p className="text-muted-foreground">
                            Improve range of motion and reduce muscle tension.
                        </p>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6">
                        <Wind className="w-12 h-12 text-[#FF4D00] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Breath Control</h3>
                        <p className="text-muted-foreground">
                            Learn pranayama techniques for stress relief and focus.
                        </p>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6">
                        <Sparkles className="w-12 h-12 text-[#FF4D00] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Mind-Body Connection</h3>
                        <p className="text-muted-foreground">
                            Achieve mental clarity and physical well-being.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/#home"
                        className="inline-block px-8 py-4 bg-[#FF4D00] text-white font-bold rounded-lg hover:bg-[#FF4D00]/90 transition-colors"
                    >
                        Book Your Yoga Class
                    </Link>
                </div>
            </div>
        </main>
    );
}
