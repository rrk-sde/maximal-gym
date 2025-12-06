"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    category: string;
}

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

    const categories = ["all", "equipment", "classes", "facility", "training"];

    const images: GalleryImage[] = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
            alt: "Modern gym equipment",
            category: "equipment",
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
            alt: "Group fitness class",
            category: "classes",
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
            alt: "Cardio equipment area",
            category: "equipment",
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
            alt: "Weight training zone",
            category: "training",
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80",
            alt: "Yoga and stretching area",
            category: "classes",
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&q=80",
            alt: "Gym facility entrance",
            category: "facility",
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80",
            alt: "Boxing training area",
            category: "training",
        },
        {
            id: 8,
            src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
            alt: "Functional training space",
            category: "equipment",
        },
        {
            id: 9,
            src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
            alt: "Spin class session",
            category: "classes",
        },
        {
            id: 10,
            src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
            alt: "Modern locker rooms",
            category: "facility",
        },
        {
            id: 11,
            src: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=800&q=80",
            alt: "Personal training session",
            category: "training",
        },
        {
            id: 12,
            src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
            alt: "Strength equipment",
            category: "equipment",
        },
    ];

    const filteredImages =
        selectedCategory === "all"
            ? images
            : images.filter((img) => img.category === selectedCategory);

    return (
        <main className="min-h-screen bg-background text-foreground pt-28 pb-20">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-foreground">Gallery</span>
                        <br />
                        <span className="text-muted-foreground">Our Facilities</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                        Explore our state-of-the-art facilities, equipment, and training spaces designed to help you achieve your fitness goals.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-lg font-semibold transition-all capitalize ${selectedCategory === category
                                ? "bg-[#FF4D00] text-white"
                                : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredImages.map((image) => (
                        <div
                            key={image.id}
                            onClick={() => setLightboxImage(image)}
                            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <p className="text-white font-semibold text-sm">
                                        {image.alt}
                                    </p>
                                    <p className="text-gray-300 text-xs capitalize mt-1">
                                        {image.category}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredImages.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground text-lg">
                            No images found in this category.
                        </p>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        onClick={() => setLightboxImage(null)}
                        className="absolute top-4 right-4 w-12 h-12 bg-white/10 border border-border rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>
                    <div
                        className="relative w-full max-w-5xl aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={lightboxImage.src}
                            alt={lightboxImage.alt}
                            fill
                            className="object-contain"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                            <h3 className="text-white text-xl font-bold">
                                {lightboxImage.alt}
                            </h3>
                            <p className="text-gray-300 capitalize mt-1">
                                {lightboxImage.category}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
