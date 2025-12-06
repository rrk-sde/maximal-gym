"use client";
import Link from "next/link";
import { Award, Star } from "lucide-react";
import { useGetAllCoachesQuery, Coach } from "../../store/api/coachApi";

export default function OurCoachesPage() {
    const { data, isLoading } = useGetAllCoachesQuery({});
    const coaches = data?.data?.coaches || [];

    if (isLoading) {
        return (
            <main className="min-h-screen bg-black text-white pt-28 pb-20 flex items-center justify-center">
                <p className="text-gray-400">Loading Coaches...</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground pt-28 pb-20">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-foreground">Our Expert Coaches</span>
                        <br />
                        <span className="text-muted-foreground">Certified Professionals</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                        Meet our team of dedicated fitness professionals committed to your success.
                    </p>
                </div>

                {/* Coaches Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {coaches.map((coach: Coach) => (
                        <div key={coach._id} className="bg-card border border-border rounded-xl p-6">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-primary text-2xl font-bold">
                                    {coach.name.split(' ').length > 1 ? coach.name.split(' ')[1][0] : coach.name[0]}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-2">{coach.name}</h3>
                            <p className="text-primary text-center mb-4">{coach.specialty}</p>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p className="flex items-center gap-2">
                                    <Award className="w-4 h-4" />
                                    {coach.certifications}
                                </p>
                                <p className="flex items-center gap-2">
                                    <Star className="w-4 h-4" />
                                    {coach.experience} experience
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/#home"
                        className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        Book a Session
                    </Link>
                </div>
            </div>
        </main>
    );
}
