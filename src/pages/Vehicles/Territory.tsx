import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { getPosts } from "../../assets/data/post";

// TODO: add the photos in src/assets/vehicles/territory/, import each one here
// and use it where you see "" below. Anything that is "" shows "Photo coming soon".
// For example:
import heroBanner from "../../assets/vehicles/territory/hero_banner.jpg";
import brochure from "../../assets/vehicles/territory/next-gen-ford-territory-digital-brochure.pdf";

import territoryImage1 from "../../assets/vehicles/territory/territory1.jpg";
import territoryImage2 from "../../assets/vehicles/territory/territory2.jpg";

export default function Territory() {
    // A photo, or a "coming soon" box while the image is "".
    const photo = (src: string, alt: string, className: string) =>
        src ? (
            <img
                src={src}
                alt={alt}
                loading="lazy"
                draggable={false}
                className={className}
            />
        ) : (
            <div
                className={`flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-[#E4E9F0] to-[#F2F2F2] p-4 text-center text-xs font-semibold uppercase tracking-widest text-[#102B4E]/40 ${className}`}
            >
                <span>Photo coming soon</span>
            </div>
        );

    // The big photo at the top ("" hides it)
    const HERO_IMAGE = heroBanner;

    // The buttons under the title. A button with no link is not shown.
    // TODO: add the brochure file and the real links
    const BROCHURE_HREF = brochure;
    const HERO_BUTTONS = [
        { label: "Brochure", href: BROCHURE_HREF },
        { label: "Price List", href: "#" },
    ].filter((button) => button.href);

    // The strip under the hero
    const HIGHLIGHTS = [
        { label: "Engine", text: "1.5L EcoBoost® GTDI I-4 Engine" },
        {
            label: "Transmission",
            text: "7-Speed Automatic Transmission with Rotary e-Shift",
        },
    ].filter((item) => item.text);

    // The text and two photos under the hero
    // TODO: replace the "#" link with the real reservation page
    const INTRO = {
        eyebrow: "The Next-Gen Ford Territory SUV",
        // the hyphen in "next-gen" does not break the line
        title: "Own every moment with the next‑gen Ford Territory",
        tagline: "Dynamically designed. Efficiently engineered.",
        text: "With the Ford DNA ingrained in its design, quality, and capability, the Ford Territory is designed and engineered following Ford's highest global quality standards to deliver an all-in-one SUV package.",
        reserveHref: "#",
        photos: [
            {
                image: territoryImage1,
                alt: "The Ford Territory driving over a bridge",
            },
            {
                image: territoryImage2,
                alt: "The rear seats of the Ford Territory",
            },
        ],
    };

    // TODO: put the gallery photos here. Only the items with an image are shown,
    // and the whole gallery is hidden when there is none.
    const GALLERY = [
        { image: "", alt: "Ford Territory interior", category: "Interior" },
        { image: "", alt: "Ford Territory exterior", category: "Exterior" },
    ];

    const GALLERY_PHOTOS = GALLERY.filter((item) => item.image);
    const GALLERY_FILTERS = ["All", "Interior", "Exterior"].filter(
        (filter) =>
            filter === "All" ||
            GALLERY_PHOTOS.some((item) => item.category === filter),
    );

    // The YouTube link of the video (any kind of link works). Empty hides the video.
    const VIDEO_URL = "";

    // Any YouTube link -> the embed address the iframe needs ("" if it is not a link)
    const getEmbedUrl = (link: string) => {
        try {
            const url = new URL(link);
            const parts = url.pathname.split("/");
            const id = url.hostname.includes("youtu.be")
                ? parts[1]
                : url.searchParams.get("v") ||
                  (parts[1] === "embed" || parts[1] === "shorts"
                      ? parts[2]
                      : "");
            return id ? `https://www.youtube.com/embed/${id}` : "";
        } catch {
            return "";
        }
    };
    const VIDEO_EMBED_URL = getEmbedUrl(VIDEO_URL);

    const DISCLOSURES = [
        "[1] Some features are only available on select models.",
        "[2] The company reserves the right to change any detail regarding specification, prices, components and colors without prior notice. Some items in photos are optional accessories, and may appear slightly different from actual items. Overseas model shown. Please visit your local Ford dealer for more information.",
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

    const [galleryFilter, setGalleryFilter] = useState("All");

    return (
        <>
            <SEO
                title="Next-Gen Ford Territory"
                description="Discover the Next-Gen Ford Territory SUV at Ford Laus Group. Explore variants, specs and features, and download the brochure."
                image={heroBanner}
                type="product"
            />
            <Header />
            <main className="w-full max-w-full">
                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-[#001A3D] via-[#003478] to-[#066FEF]">
                    {HERO_IMAGE && (
                        <img
                            src={HERO_IMAGE}
                            alt="Ford Territory"
                            decoding="async"
                            draggable={false}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#001A3D]/90 via-[#001A3D]/50 to-transparent" />

                    <div className="container relative mx-auto px-4 py-16 lg:py-28">
                        <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                            SUV
                        </p>
                        <h1 className="mt-2 max-w-2xl text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
                            Next-Gen Ford Territory
                        </h1>
                        {HERO_BUTTONS.length > 0 && (
                            <div className="mt-8 flex flex-wrap gap-3">
                                {HERO_BUTTONS.map((button, index) => (
                                    <a
                                        key={button.label}
                                        href={button.href}
                                        className={`inline-block rounded-full px-7 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#001A3D] ${
                                            index === 0
                                                ? "bg-white text-[#003478] hover:bg-[#F2F2F2]"
                                                : "border-2 border-white py-[10px] text-white hover:bg-white hover:text-[#003478]"
                                        }`}
                                    >
                                        {button.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Engine, transmission and starting price */}
                {HIGHLIGHTS.length > 0 && (
                    <section className="bg-[#001A3D]">
                        <ul className="container mx-auto grid divide-y divide-white/15 px-4 sm:auto-cols-fr sm:grid-flow-col sm:divide-x sm:divide-y-0">
                            {HIGHLIGHTS.map((item) => (
                                <li
                                    key={item.label}
                                    className="py-6 sm:px-8 sm:first:pl-0"
                                >
                                    <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                                        {item.label}
                                    </p>
                                    <p className="mt-1 text-lg font-semibold text-white lg:text-xl">
                                        {item.text}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Intro text and two photos */}
                <section className="container mx-auto px-4 py-12 lg:py-16">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-[#066FEF]">
                            {INTRO.eyebrow}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold uppercase leading-tight text-[#003478] sm:text-4xl">
                            {INTRO.title}
                        </h2>
                        <p className="mt-4 text-lg font-semibold text-[#102B4E]">
                            {INTRO.tagline}
                        </p>
                        <p className="mt-2 text-base leading-relaxed text-[#102B4E]/80 lg:text-lg">
                            {INTRO.text}
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:gap-6">
                        {INTRO.photos.map((item) => (
                            <div key={item.alt}>
                                {photo(
                                    item.image,
                                    item.alt,
                                    "aspect-[16/10] w-full rounded-2xl object-cover shadow-md",
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Gallery, hidden when there are no photos */}
                {GALLERY_PHOTOS.length > 0 && (
                    <section className="bg-[#F2F2F2] py-12 lg:py-16">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap items-end justify-between gap-4">
                                <h2 className="border-l-4 border-[#066FEF] pl-3 text-2xl font-bold uppercase text-[#003478] lg:text-3xl">
                                    Gallery
                                </h2>
                                <ul className="flex gap-2">
                                    {GALLERY_FILTERS.map((filter) => (
                                        <li key={filter}>
                                            <button
                                                type="button"
                                                aria-pressed={
                                                    galleryFilter === filter
                                                }
                                                onClick={() =>
                                                    setGalleryFilter(filter)
                                                }
                                                className={`cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2 ${
                                                    galleryFilter === filter
                                                        ? "bg-[#003478] text-white"
                                                        : "bg-white text-[#102B4E] hover:bg-[#003478] hover:text-white"
                                                }`}
                                            >
                                                {filter}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
                                {GALLERY_PHOTOS.filter(
                                    (item) =>
                                        galleryFilter === "All" ||
                                        item.category === galleryFilter,
                                ).map((item, index) => (
                                    <li key={index}>
                                        {photo(
                                            item.image,
                                            item.alt,
                                            "aspect-[4/3] w-full rounded-xl object-cover",
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                )}

                {/* Video, hidden when there is no link */}
                {VIDEO_EMBED_URL && (
                    <section className="bg-white py-12 lg:py-16">
                        <div className="container mx-auto px-4">
                            <div className="aspect-video overflow-hidden rounded-3xl bg-[#001A3D] shadow-lg">
                                <iframe
                                    src={VIDEO_EMBED_URL}
                                    title="Ford Territory video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="h-full w-full border-0"
                                />
                            </div>
                        </div>
                    </section>
                )}

                {/* Disclosures */}
                {DISCLOSURES.length > 0 && (
                    <section className="bg-[#F2F2F2]">
                        <div className="container mx-auto space-y-2 px-4 py-6 text-xs leading-relaxed text-[#102B4E]/70">
                            {DISCLOSURES.map((text) => (
                                <p key={text}>{text}</p>
                            ))}
                        </div>
                    </section>
                )}

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
