import { Activity, Target, TrendingUp, Award } from "lucide-react";

export default function Stats() {
    const stats = [
        {
            icon: <Activity className="w-8 h-8" />,
            value: "125+",
            label: "Expert Coaches",
            description: "Professional certified trainers",
        },
        {
            icon: <Target className="w-8 h-8" />,
            value: "95%",
            label: "Success Rate",
            description: "Members achieving goals",
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            value: "24/7",
            label: "Gym Access",
            description: "Train anytime you want",
        },
        {
            icon: <Award className="w-8 h-8" />,
            value: "10+",
            label: "Years Experience",
            description: "Industry leading expertise",
        },
    ];

    return (
        <section className="py-20 border-t border-border bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-card border border-border p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50"
                        >
                            {/* Icon with background */}
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                                {stat.icon}
                            </div>

                            {/* Value */}
                            <div className="text-5xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                {stat.value}
                            </div>

                            {/* Label */}
                            <div className="text-xl font-semibold text-foreground mb-2">
                                {stat.label}
                            </div>

                            {/* Description */}
                            <div className="text-sm text-muted-foreground leading-relaxed">
                                {stat.description}
                            </div>

                            {/* Hover accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
