"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, User, Tag } from "lucide-react";
import { useState } from "react";

import { articles } from "./data";

export default function ArticlesPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = ["all", "nutrition", "workout", "lifestyle", "recovery"];

    const filteredArticles = selectedCategory === "all"
        ? articles
        : articles.filter(article => article.category === selectedCategory);


    return (
        <main className="min-h-screen bg-background text-foreground pt-28 pb-20">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-foreground">Fitness Articles</span>
                        <br />
                        <span className="text-muted-foreground">Knowledge & Insights</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                        Expert advice on training, nutrition, and lifestyle to help you achieve your peak performance.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-lg font-semibold transition-all capitalize ${selectedCategory === category
                                ? "bg-primary text-white"
                                : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article) => (
                        <article
                            key={article.id}
                            className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
                        >
                            <Link href={`/articles/${article.slug}`}>
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {article.readTime}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {article.author}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                        {article.title}
                                    </h2>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center text-primary font-semibold text-sm">
                                        Read Article
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Empty State */}
                {filteredArticles.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground text-lg">
                            No articles found in this category.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}
