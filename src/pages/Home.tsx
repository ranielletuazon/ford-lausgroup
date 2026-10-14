import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroCarousel from "./components/HeroCarousel";
import CarImageCarousel from "./components/CarImageCarousel";
import Playlist from "./components/Playlist";
import homeImage from "../assets/images/home-image-banner.jpg";
import { getPosts } from "../assets/data/post";

export default function Home() {
    const DEALERSHIPS = [
        "Ford Pampanga",
        "Ford Dagupan",
        "Ford Ilocos",
        "Ford Isabela",
        "Ford Libis",
        "Ford Metro Baguio",
        "Ford Subic",
        "Ford Cabanatuan",
        "Ford Tarlac",
        "Ford Clark",
    ];

    // TODO: replace with the real vehicle page paths
    const BANNER_MODELS = [
        { label: "Explore Everest", href: "/new-vehicles/everest" },
        { label: "Explore Ranger", href: "/new-vehicles/ranger" },
    ];

    // Video Playlist Data (each page can pass its own list to <Playlist />)
    const VIDEOS = [
        {
            link: "https://www.youtube.com/watch?v=-I-SI58XZdQ",
            title: "Next-Generation Ford Everest Reveal",
            duration: "21:00",
        },
        {
            link: "https://www.youtube.com/watch?v=DKLCJt4Fa48&t",
            title: "Next-Generation Ford Everest: Full Workaround",
            duration: "13:57",
        },
        {
            link: "https://www.youtube.com/watch?v=mc691QT8USk",
            title: "Next-Generation Ford Everest: Everything You Need to Know in 4 Minutes",
            duration: "3:40",
        },
        {
            link: "https://www.youtube.com/watch?v=x5YpEl_dCrY",
            title: "Next-Generation Ford Everest: Where Capability Meets Comfort",
            duration: "2:13",
        },
        {
            link: "https://www.youtube.com/watch?v=uhRQtnaqWZ0",
            title: "Most Versatile Ranger Ever #NextGenRanger",
            duration: "1:01",
        },
        {
            link: "https://www.youtube.com/watch?v=Sy0AaX1yyBE&t",
            title: "Next-Gen Ranger: Customer-Focused Technology",
            duration: "1:16",
        },
        {
            link: "https://www.youtube.com/watch?v=J9XhoGt9R3I&t",
            title: "Next-Gen Ranger: Ride & Drive Thailand 2022",
            duration: "2:14",
        },
    ];

    // The 4 newest posts (data lives in src/assets/data/post.json)
    const NEWS = getPosts.slice(0, 4);

    // timeZone "UTC" keeps the day the same for every visitor
    const formatNewsDate = (date: string) =>
        new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
        });

    return (
        <>
            <Header />
            <main className="w-full max-w-full">
                {/* Hero Carousel */}
                <HeroCarousel />

                {/* Introduction Section */}
                <section aria-labelledby="intro-heading">
                    {/* Welcome + cars */}
                    <div className="bg-white py-12 sm:py-16 lg:py-20">
                        <div className="container mx-auto px-4">
                            <div className="mx-auto max-w-3xl text-center">
                                {/* <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#066FEF] sm:text-sm">
                                    <span
                                        aria-hidden="true"
                                        className="h-0.5 w-8 bg-[#066FEF]"
                                    />
                                    About Us
                                    <span
                                        aria-hidden="true"
                                        className="h-0.5 w-8 bg-[#066FEF]"
                                    />
                                </p> */}

                                <h1
                                    id="intro-heading"
                                    className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#003478] sm:text-4xl lg:text-5xl"
                                >
                                    Welcome to Laus Ford Group
                                </h1>

                                <p className="mt-6 text-base leading-relaxed text-[#102B4E]/80 sm:text-lg">
                                    The award-winning Laus Ford Group began in
                                    1997 with Ford Pampanga, along Jose Abad
                                    Santos Avenue in the City of San Fernando.
                                    Through the years, it has steadily grown and
                                    now has ten dealerships across Northern and
                                    Central Luzon.
                                </p>
                            </div>

                            {/* Car Image Carousel */}
                            <div className="mt-12 lg:mt-16">
                                <CarImageCarousel />
                            </div>
                        </div>
                    </div>

                    {/* Dealerships */}
                    <div className="bg-[#003478] py-10 sm:py-12">
                        <div className="container mx-auto px-4 text-center">
                            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-sm">
                                Our Dealerships
                            </h2>
                            <ul className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                                {DEALERSHIPS.map((name) => (
                                    <li
                                        key={name}
                                        className="rounded-full border border-white/25 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#003478] sm:text-sm"
                                    >
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Image Banner */}
                    <div className="bg-white px-4 py-10 sm:py-12 lg:py-16">
                        <div className="container mx-auto">
                            <div className="overflow-hidden rounded-2xl border border-[#003478]/10 bg-white shadow-md">
                                {/* Picture: the whole banner links to the Next-Gen page */}
                                <a
                                    href="/next-gen-ford"
                                    aria-label="Explore the Next-Generation Ford lineup"
                                    className="group block overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#066FEF]"
                                >
                                    {/*
                                      The banner is 1440x550 with its text baked in, so:
                                      - phones (3:2) and small tablets (16:9) crop the sides so
                                        the text and both vehicles stay large enough to read
                                      - from md up, the full picture shows at its natural shape
                                      object-[55%_50%] nudges the crop toward the Ranger so both
                                      vehicles are cut about equally
                                    */}
                                    <img
                                        src={homeImage}
                                        alt="Next-Generation Ford with a 5-year warranty: the Next-Gen Everest and Next-Gen Ranger parked on a beach"
                                        width={1440}
                                        height={550}
                                        loading="lazy"
                                        decoding="async"
                                        draggable={false}
                                        className="block aspect-[3/2] w-full object-cover object-[55%_50%] transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:aspect-[16/9] md:aspect-auto md:h-auto"
                                    />
                                </a>

                                {/* Call-to-action bar */}
                                <div className="flex flex-col gap-4 bg-[#003478] px-5 py-5 text-white sm:px-8 sm:py-6 md:flex-row md:items-center md:justify-between md:gap-8">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                                            5-Year Warranty
                                        </p>
                                        <h2 className="mt-1 text-xl font-bold leading-tight sm:text-2xl">
                                            Meet the Next-Generation Ford
                                        </h2>
                                    </div>

                                    <div className="flex flex-wrap gap-3 md:shrink-0 md:flex-nowrap">
                                        {BANNER_MODELS.map((model) => (
                                            <a
                                                key={model.href}
                                                href={model.href}
                                                className="group/btn inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#003478] transition-colors hover:bg-[#F2F2F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#003478] md:flex-none"
                                            >
                                                {model.label}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1 motion-reduce:transition-none"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Showcase Section */}
                {VIDEOS.length > 0 && (
                    <section
                        aria-labelledby="video-heading"
                        className="bg-[#F2F2F2] py-12 sm:py-16 lg:py-20"
                    >
                        <div className="container mx-auto px-4">
                            <div className="mx-auto max-w-3xl text-center">
                                <h2
                                    id="video-heading"
                                    className="text-3xl font-bold leading-tight tracking-tight text-[#003478] sm:text-4xl lg:text-5xl"
                                >
                                    Next-Generation Ford
                                </h2>
                            </div>

                            <div className="mt-10 lg:mt-12">
                                <Playlist videos={VIDEOS} />
                            </div>

                            {/* Customer Advisory */}
                            <aside
                                aria-labelledby="advisory-heading"
                                className="mt-10 flex items-start gap-4 rounded-2xl border border-[#003478]/10 bg-white p-5 shadow-sm sm:gap-5 sm:p-6 lg:mt-12 lg:p-8"
                            >
                                <span
                                    aria-hidden="true"
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#003478] text-white sm:h-12 sm:w-12"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5 sm:h-6 sm:w-6"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 16v-4M12 8h.01" />
                                    </svg>
                                </span>

                                <div>
                                    <h3
                                        id="advisory-heading"
                                        className="text-sm font-bold uppercase tracking-[0.15em] text-[#003478] sm:text-base"
                                    >
                                        Customer Advisory on Vehicle Sales
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-[#102B4E]/80 sm:text-base">
                                        Our showrooms are now open, and we are
                                        now able to assist you remotely. You may
                                        reach us through our Websites, FB pages
                                        or via mobile phone. We can make
                                        arrangements to facilitate your new
                                        vehicle requirement and are still
                                        accepting auto financing loans through
                                        our partner banks. Though you may
                                        experience disruptions or delays in
                                        processing and response time, we will
                                        try our very best to get back to you the
                                        soonest time possible. Thank you for
                                        your understanding and continued
                                        support.
                                    </p>
                                </div>
                            </aside>
                        </div>
                    </section>
                )}

                {/* Dealer News Post Section */}
                <section
                    aria-labelledby="news-heading"
                    className="bg-white py-12 sm:py-16 lg:py-20"
                >
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2
                                id="news-heading"
                                className="text-3xl font-bold leading-tight tracking-tight text-[#003478] sm:text-4xl lg:text-5xl"
                            >
                                Dealer News
                            </h2>
                        </div>

                        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
                            {NEWS.map((post) => (
                                <li key={post.href} className="flex">
                                    {/* The whole card is clickable through the "Read More" link below */}
                                    <article className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-[#003478]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#066FEF]/40 hover:shadow-lg focus-within:ring-2 focus-within:ring-[#066FEF] focus-within:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                                        <div className="aspect-[3/2] overflow-hidden bg-[#003478]/10">
                                            <img
                                                src={post.image}
                                                alt=""
                                                loading="lazy"
                                                decoding="async"
                                                draggable={false}
                                                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
                                            />
                                        </div>

                                        <div className="flex flex-1 flex-col p-5">
                                            <time
                                                dateTime={post.date}
                                                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#066FEF]"
                                            >
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
                                                    <rect
                                                        x="3"
                                                        y="4"
                                                        width="18"
                                                        height="18"
                                                        rx="2"
                                                    />
                                                    <path d="M16 2v4M8 2v4M3 10h18" />
                                                </svg>
                                                {formatNewsDate(post.date)}
                                            </time>

                                            <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-snug text-[#003478]">
                                                {post.title}
                                            </h3>

                                            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#102B4E]/80">
                                                {post.excerpt}
                                            </p>

                                            {/* Button stays at the bottom so every card lines up */}
                                            <div className="mt-auto pt-5">
                                                <a
                                                    href={post.href}
                                                    className="inline-flex items-center gap-2 rounded-full border border-[#003478] px-5 py-2.5 text-sm font-semibold text-[#003478] transition-colors after:absolute after:inset-0 group-hover:bg-[#003478] group-hover:text-white focus:outline-none"
                                                >
                                                    Read More
                                                    <span className="sr-only">
                                                        : {post.title}
                                                    </span>
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
                                        </div>
                                    </article>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 text-center lg:mt-12">
                            <a
                                href="/dealer-news"
                                className="group/all inline-flex items-center gap-2 rounded-full bg-[#003478] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2"
                            >
                                View All News
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4 transition-transform duration-200 group-hover/all:translate-x-1 motion-reduce:transition-none"
                                    aria-hidden="true"
                                >
                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Reviews Section */}
                <section
                    aria-labelledby="reviews-heading"
                    className="bg-[#F2F2F2] py-12 sm:py-16 lg:py-20"
                >
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2
                                id="reviews-heading"
                                className="text-3xl font-bold leading-tight tracking-tight text-[#003478] sm:text-4xl lg:text-5xl"
                            >
                                Reviews
                            </h2>
                        </div>

                        <figure className="mx-auto mt-10 grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5 lg:mt-12 lg:grid-cols-3">
                            {/* Who wrote it */}
                            <figcaption className="flex flex-col justify-center bg-[#003478] p-6 text-white sm:p-8 lg:p-10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-10 w-10 text-[#066FEF] sm:h-12 sm:w-12"
                                    aria-hidden="true"
                                >
                                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                </svg>
                                <p className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                                    Mr. Atanacio
                                </p>
                                <p className="mt-2 flex items-center gap-2 text-sm font-medium text-white/80">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-4 w-4 shrink-0"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                                        <circle cx="12" cy="10" r="2.5" />
                                    </svg>
                                    <span className="sr-only">Review for </span>
                                    Ford Isabela
                                </p>
                            </figcaption>

                            {/* What they said */}
                            <blockquote className="flex flex-col justify-center gap-4 p-6 text-base leading-relaxed text-[#102B4E]/90 sm:p-8 sm:text-lg lg:col-span-2 lg:p-10">
                                <p>Hi Sir Mon,</p>
                                <p>
                                    I hope this email finds you well. I would
                                    like to extend my sincere appreciation for
                                    the Fast and outstanding service I received
                                    during my recent visit last March 8, 2025,
                                    for the urgent replacement of my fuel hose
                                    and newly designed lower control arm under
                                    my premium extended warranty.
                                </p>
                                <p>
                                    The prompt attention and swift resolution of
                                    the issue were truly commendable. I am
                                    especially grateful to the Vehicle
                                    Technician for his expertise and meticulous
                                    work ensuring my vehicle was repaired
                                    efficiently and safely. My appreciation also
                                    goes to Sir Mon for overseeing the process
                                    seamlessly and to the entire service staff
                                    especially Sir Hans for their
                                    professionalism and support throughout my
                                    visit.
                                </p>
                                <p>
                                    Your team’s dedication to excellent customer
                                    service and technical expertise is truly
                                    remarkable. It is reassuring to know that my
                                    vehicle is in the hands of such skilled
                                    professionals. Thank you once again, and I
                                    look forward to continuing my service with
                                    Ford Isabela and hopefully my next vehicle
                                    purchase will be at your agents.
                                </p>
                            </blockquote>
                        </figure>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
