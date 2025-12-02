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
        <section id="testimonials" className="py-20 bg-[#050505]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 relative transition-all duration-500">
                    {/* Quote Icon */}
                    <div className="absolute -top-6 left-8 md:left-12 w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center">
                        <Quote className="w-6 h-6 text-white fill-white" />
                    </div>

                    <div className="mt-6">
                        <div className="min-h-[180px] flex flex-col justify-between">
                            <h3 className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8 animate-fade-in">
                                &ldquo;{testimonials[activeIndex].quote}&rdquo;
                            </h3>

                            <div className="flex items-center gap-4 animate-fade-in">
                                <div className="w-12 h-12 bg-gray-700 rounded-lg overflow-hidden">
                                    <img
                                        src={testimonials[activeIndex].image}
                                        alt={testimonials[activeIndex].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="text-white font-bold">{testimonials[activeIndex].name}</div>
                                    <div className="text-gray-500 text-sm">{testimonials[activeIndex].role}</div>
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
                            className={`h-1 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-[#FF4D00]" : "w-2 bg-gray-700 hover:bg-gray-600"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
