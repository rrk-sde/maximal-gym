import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { articles } from "../data";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background text-foreground pt-28 pb-20">
            <article className="container mx-auto px-6 lg:px-12 max-w-4xl">
                {/* Back Link */}
                <Link
                    href="/articles"
                    className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Articles
                </Link>

                {/* Article Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                        <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full uppercase tracking-wider text-xs">
                            {article.category}
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.readTime}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
                        {article.title}
                    </h1>

                    <div className="flex items-center gap-4 border-y border-border py-6">
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="font-bold text-foreground">{article.author}</p>
                            <p className="text-sm text-muted-foreground">Fitness Expert</p>
                        </div>
                    </div>
                </header>

                {/* Article Hero Image */}
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-2xl">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Article Content */}
                <div
                    className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground
                        prose-headings:text-foreground prose-headings:font-bold
                        prose-strong:text-foreground
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-xl
                    "
                    dangerouslySetInnerHTML={{ __html: article.content || "" }}
                />
            </article>
        </main>
    );
}
