import type { ReactNode } from "react";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO, { BASE_URL } from "./components/SEO";
import { getPosts } from "../assets/data/post";

// "2024-11-08" -> "November 8, 2024"
const formatDate = (date: string) =>
    new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

// Rough reading time based on ~200 words per minute
const readingTime = (text: string) =>
    Math.max(1, Math.round(text.trim().split(/\s+/).length / 200));

// Breaks the post body into readable paragraphs.
// Line breaks in post.json start a new paragraph; long blocks are split every 3 sentences.
const toParagraphs = (text: string) =>
    text
        .split(/\n+/)
        .map((block) => block.trim())
        .filter(Boolean)
        .flatMap((block) => {
            const sentences = block.split(/(?<=[.!?]["”’]?)\s+(?=["“A-Z])/);
            if (sentences.length <= 4) return [block];
            const chunks: string[] = [];
            let current: string[] = [];
            for (const sentence of sentences) {
                current.push(sentence);
                const joined = current.join(" ");
                // Don't break a paragraph in the middle of a quotation
                const insideQuote =
                    (joined.match(/“/g) ?? []).length >
                    (joined.match(/”/g) ?? []).length;
                if (current.length >= 3 && !insideQuote) {
                    chunks.push(joined);
                    current = [];
                }
            }
            if (current.length) chunks.push(current.join(" "));
            return chunks;
        });

const SHARE_ICONS: Record<string, ReactNode> = {
    Facebook: (
        <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v1.9H8V11.7h2.6V21.5H14v-9.8h2.6l.4-3.2H14Z" />
    ),
    X: (
        <path d="M17.8 3h3.1l-6.7 7.6L22 21h-6.2l-4.8-6.3L5.5 21H2.4l7.1-8.1L2 3h6.3l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />
    ),
    LinkedIn: (
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.25H3V9.75Zm6.5 0h3.8v1.55h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V21h-4V9.75Z" />
    ),
};

export default function DealerNewsPost() {
    const { slug } = useParams();
    const POSTS = getPosts; // newest first
    const index = POSTS.findIndex((p) => p.href === `/dealer-news/${slug}`);
    const post = index >= 0 ? POSTS[index] : undefined;

    // Post not found
    if (!post) {
        return (
            <>
                <SEO
                    title="News Not Found"
                    description="The news article you are looking for could not be found."
                    noindex
                />
                <Header />
                <main className="w-full max-w-full">
                    <section className="container mx-auto flex flex-col items-center px-4 py-20 text-center lg:py-28">
                        <p className="text-sm font-semibold uppercase tracking-widest text-[#066FEF]">
                            Dealer News
                        </p>
                        <h1 className="mt-2 text-3xl font-bold text-[#003478] sm:text-4xl">
                            We couldn't find that article
                        </h1>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-[#102B4E]/80">
                            It may have been moved or is no longer available.
                            Check out our latest news instead.
                        </p>
                        <a
                            href="/dealer-news"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#003478] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2"
                        >
                            Back to Dealer News
                        </a>
                    </section>
                </main>
                <Footer />
            </>
        );
    }

    const body = post.description || post.excerpt;
    const paragraphs = toParagraphs(body);
    const gallery = (post.gallery ?? "")
        .split(",")
        .map((src) => src.trim())
        .filter(Boolean);

    // Newer / older neighbours (list is sorted newest first)
    const newer = index > 0 ? POSTS[index - 1] : undefined;
    const older = index < POSTS.length - 1 ? POSTS[index + 1] : undefined;
    const related = POSTS.filter((p) => p.id !== post.id).slice(0, 3);

    // SEO-friendly description: first ~155 characters of the body
    const metaDescription =
        body.length > 155
            ? `${body.slice(0, 152).replace(/\s+\S*$/, "")}...`
            : body;

    const pageUrl = `${BASE_URL}${post.href}`;
    const SHARE = [
        {
            label: "Facebook",
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
        },
        {
            label: "X",
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(post.title)}`,
        },
        {
            label: "LinkedIn",
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
        },
    ];

    // Structured data so Google understands this page is a news article
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: post.title,
        description: metaDescription,
        image: [`${BASE_URL}${post.image}`],
        datePublished: post.createdAt ?? post.date,
        dateModified: post.date,
        mainEntityOfPage: pageUrl,
        author: { "@type": "Organization", name: "Ford Laus Group" },
        publisher: {
            "@type": "Organization",
            name: "Ford Laus Group",
            logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/ford-logo.png`,
            },
        },
    };

    return (
        <>
            <SEO
                title={post.title}
                description={metaDescription}
                image={post.image}
                type="article"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema),
                }}
            />
            <Header />
            <main className="w-full max-w-full">
                {/* Article heading */}
                <section className="bg-gradient-to-br from-[#001A3D] via-[#003478] to-[#066FEF]">
                    <div className="container mx-auto px-4 pb-28 pt-10 lg:pb-36 lg:pt-14">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb">
                            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                                <li>
                                    <a
                                        href="/"
                                        className="transition-colors hover:text-white"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li aria-hidden="true">/</li>
                                <li>
                                    <a
                                        href="/dealer-news"
                                        className="transition-colors hover:text-white"
                                    >
                                        Dealer News
                                    </a>
                                </li>
                                <li aria-hidden="true">/</li>
                                <li
                                    aria-current="page"
                                    className="line-clamp-1 text-white"
                                >
                                    {post.title}
                                </li>
                            </ol>
                        </nav>

                        <div className="mt-6 max-w-4xl">
                            <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
                                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                                    Dealer News
                                </span>
                                <time dateTime={post.date}>
                                    {formatDate(post.date)}
                                </time>
                                <span aria-hidden="true">•</span>
                                <span>{readingTime(body)} min read</span>
                            </div>
                            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                                {post.title}
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Cover image overlapping the heading */}
                <section className="container mx-auto -mt-20 px-4 lg:-mt-28">
                    <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-[#F2F2F2] shadow-xl">
                        <img
                            src={post.image}
                            alt={post.title}
                            decoding="async"
                            draggable={false}
                            className="block aspect-[16/9] w-full object-cover"
                        />
                    </div>
                </section>

                {/* Body + sidebar */}
                <section className="container mx-auto px-4 py-12 lg:py-16">
                    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
                        <article>
                            <div className="space-y-6 text-base leading-relaxed text-[#102B4E]/90 lg:text-lg lg:leading-8">
                                {paragraphs.map((text, i) => (
                                    <p
                                        key={i}
                                        className={
                                            i === 0
                                                ? "text-lg font-medium text-[#102B4E] lg:text-xl"
                                                : undefined
                                        }
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>

                            {/* Optional gallery (comma separated image paths in post.json) */}
                            {gallery.length > 0 && (
                                <div className="mt-12">
                                    <h2 className="border-l-4 border-[#066FEF] pl-3 text-xl font-bold text-[#003478] lg:text-2xl">
                                        Gallery
                                    </h2>
                                    <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                                        {gallery.map((src, i) => (
                                            <li
                                                key={src}
                                                className="overflow-hidden rounded-xl bg-[#F2F2F2]"
                                            >
                                                <img
                                                    src={src}
                                                    alt={`${post.title} photo ${i + 1}`}
                                                    loading="lazy"
                                                    className="aspect-square h-full w-full object-cover transition-transform duration-500 hover:scale-105 motion-reduce:transition-none"
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Share */}
                            <div className="mt-12 flex flex-col gap-3 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-sm font-semibold uppercase tracking-wide text-[#003478]">
                                    Share this article
                                </p>
                                <ul className="flex gap-2">
                                    {SHARE.map((item) => (
                                        <li key={item.label}>
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Share on ${item.label}`}
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F2F2] text-[#102B4E] transition-colors hover:bg-[#003478] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF]"
                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="h-4 w-4"
                                                >
                                                    {SHARE_ICONS[item.label]}
                                                </svg>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Newer / older navigation */}
                            {(newer || older) && (
                                <nav
                                    aria-label="More articles"
                                    className="mt-8 grid gap-4 sm:grid-cols-2"
                                >
                                    {older ? (
                                        <a
                                            href={older.href}
                                            className="group rounded-2xl border border-gray-200 p-5 transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF]"
                                        >
                                            <span className="text-xs font-semibold uppercase tracking-wide text-[#066FEF]">
                                                ← Previous
                                            </span>
                                            <span className="mt-1 block font-bold leading-snug text-[#102B4E] transition-colors group-hover:text-[#066FEF]">
                                                {older.title}
                                            </span>
                                        </a>
                                    ) : (
                                        <span className="hidden sm:block" />
                                    )}
                                    {newer && (
                                        <a
                                            href={newer.href}
                                            className="group rounded-2xl border border-gray-200 p-5 text-right transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF]"
                                        >
                                            <span className="text-xs font-semibold uppercase tracking-wide text-[#066FEF]">
                                                Next →
                                            </span>
                                            <span className="mt-1 block font-bold leading-snug text-[#102B4E] transition-colors group-hover:text-[#066FEF]">
                                                {newer.title}
                                            </span>
                                        </a>
                                    )}
                                </nav>
                            )}
                        </article>

                        {/* Sidebar */}
                        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                            <div className="rounded-2xl bg-gradient-to-br from-[#003478] to-[#066FEF] p-6 text-white shadow-sm">
                                <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                                    Ford Laus Group
                                </p>
                                <h2 className="mt-2 text-xl font-bold leading-snug">
                                    We have the right car for you
                                </h2>
                                <p className="mt-2 text-sm leading-relaxed text-white/80">
                                    Explore the latest Ford lineup or talk to
                                    our sales team about your next ride.
                                </p>
                                <div className="mt-5 flex flex-col gap-3">
                                    <a
                                        href="/new-vehicles"
                                        className="rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-[#003478] transition-colors hover:bg-[#F2F2F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                    >
                                        Explore Vehicles
                                    </a>
                                    <a
                                        href="/contact-us"
                                        className="rounded-full border border-white/60 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                    >
                                        Contact Us
                                    </a>
                                </div>
                            </div>

                            {related.length > 0 && (
                                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <h2 className="border-l-4 border-[#066FEF] pl-3 text-lg font-bold text-[#003478]">
                                        Latest News
                                    </h2>
                                    <ul className="mt-5 space-y-4">
                                        {related.map((item) => (
                                            <li key={item.id}>
                                                <a
                                                    href={item.href}
                                                    className="group flex gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF]"
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt=""
                                                        loading="lazy"
                                                        className="h-16 w-20 flex-none rounded-lg bg-[#F2F2F2] object-cover"
                                                    />
                                                    <span className="min-w-0">
                                                        <time
                                                            dateTime={item.date}
                                                            className="text-xs text-[#102B4E]/60"
                                                        >
                                                            {formatDate(
                                                                item.date,
                                                            )}
                                                        </time>
                                                        <span className="mt-0.5 line-clamp-2 block text-sm font-semibold leading-snug text-[#102B4E] transition-colors group-hover:text-[#066FEF]">
                                                            {item.title}
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href="/dealer-news"
                                        className="mt-5 inline-flex text-sm font-semibold text-[#003478] transition-colors hover:text-[#066FEF]"
                                    >
                                        View all news →
                                    </a>
                                </div>
                            )}
                        </aside>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
