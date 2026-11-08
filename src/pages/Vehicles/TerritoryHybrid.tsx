import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import ColorPicker from "../components/ColorPicker";
import { getPosts } from "../../assets/data/post";

// TODO: add the photos in src/assets/vehicles/territory-hybrid/, import each one here
// and use it where you see "" below. Anything that is "" shows "Photo coming soon".
// The file names cannot have a "#" in them (Vite cannot import them).
// For example:
import heroBanner from "../../assets/vehicles/territory-hybrid/hero_banner.png";
import territoryHybridImage1 from "../../assets/vehicles/territory-hybrid/territory1.png";
import territoryHybridImage2 from "../../assets/vehicles/territory-hybrid/territory2.webp";
import territoryHybridImage3 from "../../assets/vehicles/territory-hybrid/territory3.webp";
import territoryHybridImage4 from "../../assets/vehicles/territory-hybrid/territory4.webp";
import territoryHybridImage5 from "../../assets/vehicles/territory-hybrid/territory5.webp";
import territoryHybridImage6 from "../../assets/vehicles/territory-hybrid/territory6.webp";
// import brochure from "../../assets/vehicles/territory-hybrid/ford-territory-hybrid-brochure.pdf";
// import white from "../../assets/vehicles/territory-hybrid/white.webp";

export default function TerritoryHybrid() {
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
    const BROCHURE_HREF = "";
    const HERO_BUTTONS = [
        { label: "Brochure", href: BROCHURE_HREF },
        { label: "Price List", href: "#" },
    ].filter((button) => button.href);

    // The strip under the hero. An item with no text is not shown.
    const HIGHLIGHTS = [
        { label: "Engine", text: "1.5L I-4 Dedicated Hybrid" },
        { label: "Transmission", text: "2-Speed Dedicated Hybrid" },
        { label: "Seating for", text: "5" },
    ].filter((item) => item.text);

    // The text and two photos under the hero
    // TODO: replace the "#" link with the real reservation page
    const INTRO = {
        eyebrow: "Ford Territory Hybrid",
        title: "Power for Greater Performance",
        text: "The Ford Territory Hybrid has a gasoline internal combustion engine accompanied by an electric motor with a 1.83kWh hybrid battery. This gives the Ford Territory Hybrid a great balance between performance and fuel efficiency. The Ford Territory Hybrid is a 5-seater SUV.",
        reserveHref: "#",
        photos: [
            {
                image: territoryHybridImage1,
                alt: "The Ford Territory Hybrid on the road",
            },
            {
                image: territoryHybridImage2,
                alt: "The interior of the Ford Territory Hybrid",
            },
        ],
    };

    // TODO: the colors of the Territory Hybrid, each with its own photo. Leave the list empty to hide the colors.
    // For example: { name: "Oxford White", hex: "#E7E7E7", image: white },
    const COLORS: { name: string; hex: string; image: string }[] = [];

    // TODO: put the gallery photos here. Only the items with an image are shown,
    // and the whole gallery is hidden when there is none.
    const GALLERY = [
        {
            image: "",
            alt: "Ford Territory Hybrid interior",
            category: "Interior",
        },
        {
            image: "",
            alt: "Ford Territory Hybrid exterior",
            category: "Exterior",
        },
    ];

    const GALLERY_PHOTOS = GALLERY.filter((item) => item.image);
    const GALLERY_FILTERS = ["All", "Interior", "Exterior"].filter(
        (filter) =>
            filter === "All" ||
            GALLERY_PHOTOS.some((item) => item.category === filter),
    );

    // The YouTube link of the video (any kind of link works). Empty hides the video.
    const VIDEO_URL = "https://www.youtube.com/watch?v=h-MguLvNIOI";

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

    // TODO: add the features, one card each: { title, image, text }.
    // A group with no features is not shown. video: true shows the video under that group.
    const FEATURE_GROUPS = [
        {
            title: "Interior",
            video: true,
            features: [
                {
                    title: "Leather Seats & Panoramic Moonroof",
                    image: territoryHybridImage3,
                    text: "Premium leather seats with ventilated function create a sense of freedom, convenience, and luxury inside this modern and versatile SUV. A twin-panel moonroof bathes the cabin in natural light with just a press of a button.",
                },
                {
                    title: "Selectable Drive and Steering Modes",
                    image: territoryHybridImage4,
                    text: "Choose the drive mode that suits you, whether it's Normal, Eco or Sport, to enjoy a balance of power and torque. Electric Power Assisted Steering supports 3 modes to suit your personal preference.",
                },
            ],
        },
        {
            title: "Exterior",
            video: false,
            features: [
                {
                    title: "Robust and Striking Exterior",
                    image: territoryHybridImage5,
                    text: "Command looks everywhere you go with a new grille design and coast-to-coast LED bar, giving the Territory an unmistakable character on any road. From the rear, the Territory Hybrid makes a confident statement, masterfully balancing its generous, spacious presence with an undeniable feeling of solid capability.",
                },
                {
                    title: "19-inch Alloy Wheels",
                    image: territoryHybridImage6,
                    text: "The available 19-inch alloy wheels don’t just enhance the view - they define the Territory Hybrid’s commanding stance, underscoring its luxurious presence on any road.",
                },
            ],
        },
    ].filter((group) => group.features.length > 0);

    // TODO: add the disclosure of the Territory Hybrid page, one line per paragraph. An empty list hides it.
    const DISCLOSURES: string[] = [
        "VEHICLE SPECIFICATIONS MAY VARY. FORD GROUP PHILIPPINES RESERVES THE RIGHT TO CHANGE OR MODIFY EQUIPMENT AND SPECIFICATIONS AT ANY TIME WITHOUT PRIOR NOTICE.",
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
                title="Ford Territory Hybrid"
                description="Discover the Ford Territory Hybrid at Ford Laus Group, combining efficiency and performance. Explore specs, colors and features."
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
                            alt="Ford Territory Hybrid"
                            decoding="async"
                            draggable={false}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#001A3D]/90 via-[#001A3D]/50 to-transparent" />

                    <div className="container relative mx-auto px-4 py-16 lg:py-28">
                        <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                            Hybrid SUV
                        </p>
                        <h1 className="mt-2 max-w-2xl text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
                            Ford Territory Hybrid
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

                {/* Engine, transmission and seating */}
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
                        <p className="mt-4 text-base leading-relaxed text-[#102B4E]/80 lg:text-lg">
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

                {/* Colors, hidden when there are none */}
                {COLORS.length > 0 && (
                    <section className="bg-[#F2F2F2] py-12 lg:py-16">
                        <div className="container mx-auto px-4">
                            <ColorPicker
                                name="Ford Territory Hybrid"
                                colors={COLORS}
                                as="h2"
                            />
                        </div>
                    </section>
                )}

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

                {/* Interior and exterior features */}
                {FEATURE_GROUPS.map((group, groupIndex) => (
                    <section
                        key={group.title}
                        className={`py-12 lg:py-16 ${
                            groupIndex % 2 === 0 ? "bg-white" : "bg-[#F2F2F2]"
                        }`}
                    >
                        <div className="container mx-auto px-4">
                            <h2 className="border-b-4 border-[#003478] pb-3 text-3xl font-bold uppercase text-[#003478] lg:text-4xl">
                                {group.title}
                            </h2>

                            <ul className="mt-8 space-y-6 lg:space-y-8">
                                {group.features.map((feature, index) => (
                                    <li
                                        key={feature.title}
                                        className="grid items-center gap-6 overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-sm md:grid-cols-5 md:gap-10 md:p-6"
                                    >
                                        {photo(
                                            feature.image,
                                            feature.title,
                                            `aspect-[4/3] w-full rounded-2xl object-contain md:col-span-2 ${
                                                index % 2 === 1
                                                    ? "md:order-last"
                                                    : ""
                                            }`,
                                        )}
                                        <div className="md:col-span-3">
                                            <h3 className="text-xl font-bold uppercase text-[#003478] lg:text-2xl">
                                                {feature.title}
                                            </h3>
                                            <p className="mt-3 leading-relaxed text-[#102B4E]/80 lg:text-lg">
                                                {feature.text}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* Video, hidden when there is no link */}
                            {group.video && VIDEO_EMBED_URL && (
                                <div className="mt-8 aspect-video overflow-hidden rounded-3xl bg-[#001A3D] shadow-lg">
                                    <iframe
                                        src={VIDEO_EMBED_URL}
                                        title="Ford Territory Hybrid video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="h-full w-full border-0"
                                    />
                                </div>
                            )}
                        </div>
                    </section>
                ))}

                {/* Disclosures */}
                {DISCLOSURES.length > 0 && (
                    <section className="bg-[#F2F2F2]">
                        <div className="container mx-auto space-y-2 px-4 py-6 text-sm leading-relaxed text-[#102B4E]/70">
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
