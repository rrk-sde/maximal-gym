"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Maximal's flexible schedule is perfect for my busy IT job. I've lost 10kg in 3 months and feel more energetic than ever!",
        name: "Rahul Sharma",
        role: "Software Engineer",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&q=80"
    },
    {
        quote: "The community here is incredible. It feels like a family that pushes you to be better every day. The yoga sessions are world-class.",
        name: "Priya Patel",
        role: "Yoga Instructor",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80"
    },
    {
        quote: "The strength training program significantly improved my stamina. I'm now running marathons with ease thanks to the expert coaching.",
        name: "Amit Singh",
        role: "Marathon Runner",
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&q=80"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="py-20 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-12 relative transition-all duration-500 shadow-lg">
                    {/* Quote Icon */}
                    <div className="absolute -top-6 left-8 md:left-12 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                        <Quote className="w-6 h-6 text-white fill-white" />
                    </div>

                    <div className="mt-6">
                        <div className="min-h-[180px] flex flex-col justify-between">
                            <h3 className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8 animate-fade-in">
                                &ldquo;{testimonials[activeIndex].quote}&rdquo;
                            </h3>

                            <div className="flex items-center gap-4 animate-fade-in">
                                <div className="w-12 h-12 bg-secondary rounded-lg overflow-hidden">
                                    <img
                                        src={testimonials[activeIndex].image}
                                        alt={testimonials[activeIndex].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="text-foreground font-bold">{testimonials[activeIndex].name}</div>
                                    <div className="text-muted-foreground text-sm">{testimonials[activeIndex].role}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-1 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-primary" : "w-2 bg-secondary hover:bg-primary/50"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
