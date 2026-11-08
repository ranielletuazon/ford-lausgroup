import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import { getPosts } from "../assets/data/post";

// TODO: add the banner photo in src/assets/images/ and import it here, then use it below
import bannerImage from "../assets/images/service-banner2.jpg";

export default function ServiceReminders() {
    // TODO: replace with the real page paths
    const BOOK_SERVICE_HREF = "/book-a-service";

    // The photo at the top ("" hides it)
    const BANNER_IMAGE = bannerImage;

    // The 7 checks. Each line of text is its own paragraph.
    const CHECKS = [
        {
            title: "Tires",
            text: [
                "Inspect tires for any tears or bulges in the sidewall. The tires should have a good amount of tread left. The minimum legal tread depth is 1.6mm across the central ¾ of the tire, all the way around.",
                "Get the pressures right at a garage. If they're wrong, you'll burn more fuel, wear the tires and suffer poor handling. Don't forget to check your spare tire as well, and be sure the jack is in good condition.",
            ],
        },
        {
            title: "Batteries",
            text: [
                "Stay charged. Batteries can fail any time of year. The only accurate way to detect a weak battery is with professional equipment. Check the battery to make sure it's strong and has clean terminals. A road trip is no fun if the car won't start.",
                "Batteries should be tested 1-2 times a year in normal weather, and more often in hot or cold weather.",
                "Ford Motor Company (FOMOCO) batteries, supplied by our Ford dealerships, have passed rigid accreditation processes from across the globe, giving you peace of mind on their quality.",
                "FOMOCO batteries offer the same warranty coverage as local batteries. Visit a participating dealer near you for more information.",
            ],
        },
        {
            title: "Drive and Breathe in Peace with Clean Ford Pollen Filters",
            text: [
                "Enjoy a cleaner aircon filter for the safest atmosphere in your Ford vehicle.",
                'Each vehicle has an aircon filter called the "Pollen Filter." It takes out the grime and dirt from the air outside before it goes into your car through the air-conditioning.',
                "Your Ford vehicle's Pollen Filter is top-notch, made from leak-proof polyurethane resilient enough to minimize damage from oil and moisture. Its meandering layers give more surface area for superior filtration, which removes up to 90% of particles larger than 3 microns. For your reference, a grain of sand is 90 microns.",
                "But like every high-quality car part that does the job, filters need replacing every once in a while, usually every 6 months. Not only will you have a healthier environment in your vehicle, you'll also save horsepower, as dirty filters use up more energy.",
            ],
        },
        {
            title: "Brakes",
            text: [
                "Brakes should be inspected as recommended in the owner's manual, or sooner if you notice pulsations, grabbing, noises or longer stopping distances. Minor brake problems should be corrected promptly.",
            ],
        },
        {
            title: "Cooling System",
            text: [
                "It's so hot in the Philippines. A marginally operating system will fail in hot weather, so have the system examined by a qualified technician.",
                "Newer models have cabin air filters that clean the air entering the heating and air conditioning system.",
            ],
        },
        {
            title: "Oils",
            text: [
                "Make sure all fluids are at their proper levels and you have a full tank of gas. Without oil, your engine will overheat, weld itself together and self-destruct.",
            ],
        },
        {
            title: "Lights",
            text: [
                "Go through all your lights (indicator, brake, dip, full beam, fog and so on) one by one. Either get a friend to watch for blown bulbs, or park by a white wall or shop window one night to see them yourself.",
            ],
        },
    ];

    // The 3 newest posts for the Dealer Promotions section
    const PROMOTIONS = getPosts.slice(0, 3);

    // "2024-11-08" -> "November 8, 2024"
    const formatDate = (date: string) =>
        new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

    // The open checks (the first one starts open). More than one can be open.
    const [openChecks, setOpenChecks] = useState<string[]>([CHECKS[0].title]);

    const toggleCheck = (title: string) =>
        setOpenChecks(
            openChecks.includes(title)
                ? openChecks.filter((item) => item !== title)
                : [...openChecks, title],
        );

    return (
        <>
            <SEO
                title="7 Point Vehicle Check & Service Reminders"
                description="Keep your Ford safe on the road with our 7 point vehicle check and service reminders. Book your Ford service at Ford Laus Group."
                image={bannerImage}
            />
            <Header />
            <main className="w-full max-w-full">
                {/* Banner */}
                {BANNER_IMAGE && (
                    <section className="bg-white">
                        <img
                            src={BANNER_IMAGE}
                            alt="Ford Service Reminders"
                            decoding="async"
                            draggable={false}
                            className="block aspect-[16/9] w-full object-cover md:aspect-auto md:h-auto"
                        />
                    </section>
                )}

                {/* Intro */}
                <section className="container mx-auto px-4 pb-4 pt-12 lg:pt-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-[#066FEF]">
                        Ford Service Reminders
                    </p>
                    <h1 className="mt-2 max-w-3xl text-3xl font-bold uppercase leading-tight text-[#003478] sm:text-4xl">
                        7 Point Vehicle Check
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#102B4E]/80 lg:text-lg">
                        A long trip is a serious test for your Ford vehicle, and
                        even a small problem such as an out-of-balance tire or a
                        faulty battery can cause a lot of trouble.
                    </p>
                    <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#102B4E]/80 lg:text-lg">
                        These seven items are better off inspected by a mechanic
                        in our Ford dealership with the vehicle on the lift.
                        Remember that a Ford vehicle in top shape will have a
                        better chance of staying reliable and efficient.
                    </p>
                </section>

                {/* The 7 checks */}
                <section className="container mx-auto px-4 py-8 lg:py-10">
                    <ul className="space-y-3">
                        {CHECKS.map((check, index) => {
                            const open = openChecks.includes(check.title);

                            return (
                                <li
                                    key={check.title}
                                    className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-colors ${
                                        open
                                            ? "border-[#066FEF]/40"
                                            : "border-gray-200"
                                    }`}
                                >
                                    <button
                                        type="button"
                                        aria-expanded={open}
                                        onClick={() => toggleCheck(check.title)}
                                        className="flex w-full cursor-pointer items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-[#F2F2F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#066FEF] sm:px-6"
                                    >
                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                                                open
                                                    ? "bg-[#003478] text-white"
                                                    : "bg-[#066FEF]/10 text-[#003478]"
                                            }`}
                                        >
                                            {index + 1}
                                        </span>
                                        <span className="flex-1 font-bold uppercase text-[#102B4E] sm:text-lg">
                                            {check.title}
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className={`h-2 w-2 shrink-0 border-b-2 border-r-2 border-[#003478] transition-transform duration-300 motion-reduce:transition-none ${
                                                open
                                                    ? "translate-y-0.5 -rotate-[135deg]"
                                                    : "-translate-y-0.5 rotate-45"
                                            }`}
                                        />
                                    </button>

                                    {/* Opens and closes smoothly */}
                                    <div
                                        className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                                            open
                                                ? "grid-rows-[1fr]"
                                                : "grid-rows-[0fr]"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="space-y-3 px-5 pb-5 leading-relaxed text-[#102B4E]/80 sm:pl-[4.75rem] sm:pr-6">
                                                {check.text.map((paragraph) => (
                                                    <p key={paragraph}>
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </section>

                {/* Book a service */}
                <section className="mt-8 bg-gradient-to-br from-[#001A3D] via-[#003478] to-[#066FEF] lg:mt-10">
                    <div className="container mx-auto flex flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-white lg:text-3xl">
                                Let our technicians check it for you
                            </h2>
                            <p className="mt-2 text-white/80">
                                Book an appointment online and we will take it
                                from there.
                            </p>
                        </div>
                        <a
                            href={BOOK_SERVICE_HREF}
                            className="inline-block shrink-0 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#003478] transition-colors hover:bg-[#F2F2F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#003478]"
                        >
                            Book a service
                        </a>
                    </div>
                </section>

                {/* Dealer promotions */}
                {PROMOTIONS.length > 0 && (
                    <section className="bg-white py-12 lg:py-16">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap items-end justify-between gap-3">
                                <h2 className="border-l-4 border-[#066FEF] pl-3 text-2xl font-bold uppercase text-[#003478] lg:text-3xl">
                                    Dealer Promotions
                                </h2>
                                <a
                                    href="/dealer-news"
                                    className="text-sm font-semibold text-[#003478] transition-colors hover:text-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF]"
                                >
                                    View all dealer news →
                                </a>
                            </div>

                            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {PROMOTIONS.map((post) => (
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
                                            <div className="p-5">
                                                <time
                                                    dateTime={post.date}
                                                    className="text-sm text-[#102B4E]/70"
                                                >
                                                    {formatDate(post.date)}
                                                </time>
                                                <h3 className="mt-2 text-lg font-bold uppercase leading-snug text-[#102B4E] transition-colors group-hover:text-[#066FEF]">
                                                    {post.title}
                                                </h3>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </>
    );
}
