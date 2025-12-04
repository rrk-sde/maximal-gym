"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { useGetAllFAQsQuery, FAQ as FAQType } from "../../store/api/faqApi";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { data, isLoading } = useGetAllFAQsQuery({});
    const faqs = data?.data?.faqs || [];

    if (isLoading) {
        return (
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <p className="text-muted-foreground">Loading FAQs...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left - Title */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Frequently
                            <br />
                            Asked Questions
                        </h2>
                        <p className="text-muted-foreground text-lg mb-0">
                            Find answers to common questions about our gym and services.
                        </p>
                        {/* <button className="px-8 py-3 bg-card text-foreground font-semibold rounded-lg hover:bg-[#2a2a2a] transition-all border border-border">
                            View All FAQ
                        </button> */}
                    </div>

                    {/* Right - Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq: FAQType, index: number) => (
                            <div
                                key={index}
                                className={`border-b border-border transition-colors ${openIndex === index ? "bg-white/5 rounded-lg border-none" : ""
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <span className="text-foreground font-medium text-lg pr-8">
                                        {faq.question}
                                    </span>
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-[#FF4D00] flex-shrink-0" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                    )}
                                </button>

                                {openIndex === index && (
                                    <div className="px-6 pb-5">
                                        <p className="text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
