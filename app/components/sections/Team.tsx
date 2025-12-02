import { Instagram, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

export default function Team() {
    const trainers = [
        {
            name: "Vikram Malhotra",
            role: "Strength & Conditioning",
            image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
        },
        {
            name: "Anjali Gupta",
            role: "Yoga & Mindfulness",
            image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
        },
        {
            name: "Rohan Verma",
            role: "CrossFit & Endurance",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
        },
    ];

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Meet the Team
                        <br />
                        <span className="text-gray-400">Behind Maximal</span>
                    </h2>
                    <p className="text-gray-400 text-lg mt-4">
                        Maximal works with proven experts to help you reach your goals
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {trainers.map((trainer, index) => (
                        <div
                            key={index}
                            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Image */}
                            <img
                                src={trainer.image}
                                alt={trainer.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">
                                            {trainer.name}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {trainer.role}
                                        </p>
                                    </div>

                                    <div className="w-10 h-10 bg-[#FF4D00] rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ArrowUpRight className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all">
                        See All Team
                    </button>
                </div>
            </div>
        </section>
    );
}
