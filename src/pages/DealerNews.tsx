import Header from "./components/Header";
import Footer from "./components/Footer";
import { getPosts } from "../assets/data/post";

export default function DealerNews() {
    const NEWS = getPosts;

    // Newest post is featured, the rest go into the grid
    const [featured, ...others] = NEWS;

    // "2024-11-08" -> "November 8, 2024"
    const formatDate = (date: string) =>
        new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

    return (
        <>
            <Header />
            <main className="w-full max-w-full">
                {/* Page heading */}
                <section className="bg-gradient-to-br from-[#001A3D] via-[#003478] to-[#066FEF]">
                    <div className="container mx-auto px-4 py-12 lg:py-16">
                        <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                            Lausford Group
                        </p>
                        <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                            Dealer News
                        </h1>
                        <p className="mt-3 max-w-2xl text-base text-white/80 lg:text-lg">
                            Milestones, awards, and the latest promotions from
                            our Ford dealerships.
                        </p>
                    </div>
                </section>

                {/* Dealer News Display Cards */}
                <section className="container mx-auto px-4 py-10 lg:py-14">
                    {!featured && (
                        <p className="rounded-xl bg-[#F2F2F2] px-6 py-12 text-center text-[#102B4E]">
                            No news yet. Please check back soon.
                        </p>
                    )}

                    {/* Featured: the latest post */}
                    {featured && (
                        <a
                            href={featured.href}
                            className="group grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2 lg:grid-cols-2"
                        >
                            <div className="aspect-[16/10] overflow-hidden bg-[#F2F2F2] lg:aspect-auto lg:min-h-[22rem]">
                                <img
                                    src={featured.image}
                                    alt={featured.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                                />
                            </div>
                            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                                <div className="flex items-center gap-3">
                                    <span className="rounded-full bg-[#003478] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                                        Latest
                                    </span>
                                    <time
                                        dateTime={featured.date}
                                        className="text-sm text-[#102B4E]/70"
                                    >
                                        {formatDate(featured.date)}
                                    </time>
                                </div>
                                <h2 className="mt-4 text-2xl font-bold leading-tight text-[#102B4E] transition-colors group-hover:text-[#066FEF] lg:text-3xl">
                                    {featured.title}
                                </h2>
                                <p className="mt-3 text-base leading-relaxed text-[#102B4E]/80">
                                    {featured.excerpt}
                                </p>
                                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#003478] transition-colors group-hover:text-[#066FEF]">
                                    Read more
                                    <span
                                        aria-hidden="true"
                                        className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                                    >
                                        →
                                    </span>
                                </span>
                            </div>
                        </a>
                    )}

                    {/* The rest of the posts */}
                    {others.length > 0 && (
                        <>
                            <h2 className="mb-6 mt-12 border-l-4 border-[#066FEF] pl-3 text-xl font-bold text-[#003478] lg:text-2xl">
                                More News
                            </h2>
                            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {others.map((post) => (
                                    <li key={post.id} className="flex">
                                        <a
                                            href={post.href}
                                            className="group flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                                        >
                                            <div className="aspect-[16/10] overflow-hidden bg-[#F2F2F2]">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    loading="lazy"
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                                                />
                                            </div>
                                            <div className="flex flex-1 flex-col p-5">
                                                <time
                                                    dateTime={post.date}
                                                    className="text-sm text-[#102B4E]/70"
                                                >
                                                    {formatDate(post.date)}
                                                </time>
                                                <h3 className="mt-2 text-lg font-bold leading-snug text-[#102B4E] transition-colors group-hover:text-[#066FEF]">
                                                    {post.title}
                                                </h3>
                                                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#102B4E]/80">
                                                    {post.excerpt}
                                                </p>
                                                <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-[#003478] transition-colors group-hover:text-[#066FEF]">
                                                    Read more
                                                    <span
                                                        aria-hidden="true"
                                                        className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                                                    >
                                                        →
                                                    </span>
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
}
