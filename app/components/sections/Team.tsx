"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useGetAllCoachesQuery, Coach } from "../../store/api/coachApi";

export default function Team() {
    const { data, isLoading } = useGetAllCoachesQuery({ isActive: true });
    const coaches = data?.data?.coaches?.slice(0, 3) || []; // Get first 3 coaches

    if (isLoading) {
        return (
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <p className="text-muted-foreground">Loading trainers...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Meet the Team
                        <br />
                        <span className="text-muted-foreground">Behind Maximal</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mt-4">
                        Maximal works with proven experts to help you reach your goals
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {coaches.map((coach: Coach) => (
                        <div
                            key={coach._id}
                            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Image */}
                            <img
                                src={coach.image || 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80'}
                                alt={coach.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">
                                            {coach.name}
                                        </h3>
                                        <p className="text-gray-300 text-sm">
                                            {coach.specialty}
                                        </p>
                                    </div>

                                    <div className="w-10 h-10 bg-[#FF4D00] rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ArrowUpRight className="w-6 h-6 text-black" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/trainers/coaches"
                        className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-white/5 transition-all inline-block"
                    >
                        See All Team
                    </Link>
                </div>
            </div>
        </section>
    );
}
