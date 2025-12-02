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
        <section className="py-20 border-t border-white/10">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="glass-effect p-6 rounded-xl hover-lift"
                        >
                            <div className="text-[rgb(var(--primary))] mb-4">{stat.icon}</div>
                            <div className="text-4xl font-bold text-white mb-2">
                                {stat.value}
                            </div>
                            <div className="text-lg font-semibold text-white mb-1">
                                {stat.label}
                            </div>
                            <div className="text-sm text-gray-400">{stat.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
