import { getPosts } from "../../assets/data/post";

export default function Footer() {
    // TODO: replace all the paths below with the real pages

    // Quick links shown in the strip at the top of the footer
    const POPULAR = [
        { label: "Everest", href: "/new-vehicles/everest" },
        { label: "Territory", href: "/new-vehicles/territory" },
        { label: "Ranger", href: "/new-vehicles/ranger" },
        { label: "Mustang", href: "/new-vehicles/mustang" },
    ];

    const SUVS_AND_TRUCKS = [
        { label: "Ford Explorer", href: "/new-vehicles/explorer" },
        { label: "Ford Ranger Raptor", href: "/new-vehicles/ranger-raptor" },
        { label: "Ford Ranger", href: "/new-vehicles/ranger" },
        { label: "Ford Territory", href: "/new-vehicles/territory" },
        { label: "Ford Everest", href: "/new-vehicles/everest" },
        { label: "Ford Bronco", href: "/new-vehicles/bronco" },
    ];

    const PERFORMANCE = [
        { label: "Ford Mustang", href: "/new-vehicles/mustang" },
        { label: "Vehicle Price List", href: "/price-list" },
    ];

    const EV_AND_HYBRID = [
        { label: "Territory Hybrid", href: "/new-vehicles/territory-hybrid" },
        { label: "Mustang Mach-E", href: "/new-vehicles/mustang-mach-e" },
    ];

    const SHORTCUTS = [
        { label: "Home", href: "/" },
        { label: "Finance", href: "/finance" },
        { label: "Service", href: "/service" },
        { label: "Promotions", href: "/promotions" },
        { label: "News and events", href: "/dealer-news" },
        { label: "Book a test drive", href: "/test-drive" },
        { label: "Book a service", href: "/service/book" },
        { label: "Vehicle Price List", href: "/price-list" },
    ];

    // timeZone "UTC" keeps the day the same for every visitor
    const formatDate = (date: string) =>
        new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
        });

    // const scrollToTop = () => {
    //     const reduceMotion = window.matchMedia(
    //         "(prefers-reduced-motion: reduce)",
    //     ).matches;
    //     window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    // };

    return (
        <footer className="w-full max-w-full bg-[#001A3D] text-white">
            {/* Popular */}
            <div className="border-b border-white/10">
                <div className="container mx-auto flex flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:gap-6">
                    <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-white/70">
                        Popular
                    </h2>
                    <ul className="flex flex-wrap gap-2 sm:gap-3">
                        {POPULAR.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="inline-flex rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-semibold transition-colors hover:bg-white hover:text-[#003478] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#001A3D]"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Main columns */}
            <div className="container mx-auto px-4 py-12 lg:py-16">
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-12">
                    {/* Brand + dealer support */}
                    <div className="col-span-2 lg:col-span-3">
                        <p className="text-xl font-bold">Laus Ford Group</p>
                        <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
                            Ten Ford dealerships across Northern and Central
                            Luzon, serving drivers since 1997.
                        </p>

                        <h2 className="mt-8 text-sm font-bold uppercase tracking-[0.15em] text-white">
                            Dealer Support
                        </h2>
                        <a
                            href="/contact"
                            className="group mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#003478] transition-colors hover:bg-[#F2F2F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#001A3D]"
                        >
                            Contact Dealership
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                                aria-hidden="true"
                            >
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </a>
                    </div>

                    {/* SUVs and trucks */}
                    <nav
                        aria-label="SUVs and trucks"
                        className="col-span-1 lg:col-span-2"
                    >
                        <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                            SUVs &amp; Trucks
                        </h2>
                        <ul className="mt-4">
                            {SUVS_AND_TRUCKS.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="inline-block py-1.5 text-sm text-white/75 transition-colors hover:text-white focus:outline-none focus-visible:text-white focus-visible:underline"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Performance + EV and hybrid */}
                    <div className="col-span-1 space-y-8 lg:col-span-2">
                        <nav aria-label="Performance">
                            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                                Performance
                            </h2>
                            <ul className="mt-4">
                                {PERFORMANCE.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className="inline-block py-1.5 text-sm text-white/75 transition-colors hover:text-white focus:outline-none focus-visible:text-white focus-visible:underline"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <nav aria-label="EV and hybrid">
                            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                                EV &amp; Hybrid
                            </h2>
                            <ul className="mt-4">
                                {EV_AND_HYBRID.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className="inline-block py-1.5 text-sm text-white/75 transition-colors hover:text-white focus:outline-none focus-visible:text-white focus-visible:underline"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Shortcut links (two columns on phones to keep the footer short) */}
                    <nav
                        aria-label="Shortcut links"
                        className="col-span-2 lg:col-span-2"
                    >
                        <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                            Shortcut Links
                        </h2>
                        <ul className="mt-4 grid grid-cols-2 gap-x-6 lg:grid-cols-1">
                            {SHORTCUTS.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="inline-block py-1.5 text-sm text-white/75 transition-colors hover:text-white focus:outline-none focus-visible:text-white focus-visible:underline"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Latest news */}
                    <div className="col-span-2 lg:col-span-3">
                        <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                            Latest News
                        </h2>
                        <ul className="mt-4 space-y-4">
                            {getPosts.map((post) => (
                                <li key={post.href}>
                                    <a
                                        href={post.href}
                                        className="group flex gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#001A3D]"
                                    >
                                        <img
                                            src={post.image}
                                            alt=""
                                            loading="lazy"
                                            decoding="async"
                                            draggable={false}
                                            className="h-14 w-20 shrink-0 rounded-md bg-white/10 object-cover"
                                        />
                                        <span className="min-w-0">
                                            <span className="line-clamp-2 text-sm font-semibold leading-snug text-white group-hover:underline">
                                                {post.title}
                                            </span>
                                            <time
                                                dateTime={post.date}
                                                className="mt-1 block text-xs text-white/60"
                                            >
                                                {formatDate(post.date)}
                                            </time>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 bg-black/25">
                <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-5 text-center text-xs text-white/70 sm:text-sm md:flex-row md:justify-between md:text-left">
                    <p>
                        &copy; {new Date().getFullYear()} Laus Ford Group | All
                        Rights Reserved
                    </p>

                    <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
                        <li>
                            <a
                                href="/data-privacy-notice"
                                className="transition-colors hover:text-white focus:outline-none focus-visible:text-white focus-visible:underline"
                            >
                                Data Privacy Notice
                            </a>
                        </li>
                        <li>
                            <a
                                href="/terms-and-conditions"
                                className="transition-colors hover:text-white focus:outline-none focus-visible:text-white focus-visible:underline"
                            >
                                Terms and Conditions
                            </a>
                        </li>
                    </ul>

                    {/* <button
                        type="button"
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-[#003478] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#001A3D] cursor-pointer"
                    >
                        Back to top
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                            aria-hidden="true"
                        >
                            <path d="M12 19V5M6 11l6-6 6 6" />
                        </svg>
                    </button> */}
                </div>
            </div>
        </footer>
    );
}
