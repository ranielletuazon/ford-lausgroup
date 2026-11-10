import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import ColorPicker from "../components/ColorPicker";
import { getPosts } from "../../assets/data/post";

// TODO: add the photos in src/assets/vehicles/mustang/, import each one here
// and use it where you see "" below. Anything that is "" shows "Photo coming soon".
// The file names cannot have a "#" in them (Vite cannot import them).
// For example:
import heroBanner from "../../assets/vehicles/mustang/hero_banner.jpg";
import brochure from "../../assets/vehicles/mustang/ford-mustang-brochure.pdf";
// import shelbyBrochure from "../../assets/vehicles/mustang/ford-mustang-shelby-gt500-brochure.pdf";
import mustangImage1 from "../../assets/vehicles/mustang/mustang1.jpg";
import mustangImage2 from "../../assets/vehicles/mustang/mustang2.jpg";
import mustangImage3 from "../../assets/vehicles/mustang/mustang3.png";
import mustangImage4 from "../../assets/vehicles/mustang/mustang4.png";
import mustangImage5 from "../../assets/vehicles/mustang/mustang5.png";
import mustangImage6 from "../../assets/vehicles/mustang/mustang6.png";
import mustangImage7 from "../../assets/vehicles/mustang/mustang7.png";
import mustangImage8 from "../../assets/vehicles/mustang/mustang8.webp";
import mustangImage9 from "../../assets/vehicles/mustang/mustang9.jpg";

// Colors
import oxfordWhite from "../../assets/vehicles/mustang/oxfordwhite.jpg";
import raceRed from "../../assets/vehicles/mustang/racered.jpg";
import shadowBlack from "../../assets/vehicles/mustang/shadowblack.jpg";
import iconicSilver from "../../assets/vehicles/mustang/iconicsilvermetallic.jpg";
import carbonizedGray from "../../assets/vehicles/mustang/carbonizedgraymetallic.jpg";
import velocityBlue from "../../assets/vehicles/mustang/velocitybluemetallic.jpg";
import antimatterBlue from "../../assets/vehicles/mustang/antimatterbluemetallic.jpg";
import grabberYellow from "../../assets/vehicles/mustang/grabberyellow.jpg";
import rapidRed from "../../assets/vehicles/mustang/rapidredmetallic.jpg";
import twisterOrange from "../../assets/vehicles/mustang/twisterorangemettalictri-coat.jpg";

// Gallery
import galleryImage1 from "../../assets/vehicles/mustang/gallery1.jpg";
import galleryImage2 from "../../assets/vehicles/mustang/gallery2.jpg";
import galleryImage3 from "../../assets/vehicles/mustang/gallery3.jpg";
import galleryImage4 from "../../assets/vehicles/mustang/gallery4.jpg";
import galleryImage5 from "../../assets/vehicles/mustang/gallery5.jpg";

export default function Mustang() {
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

    // The strip under the hero. An item with no text is not shown.
    const HIGHLIGHTS = [
        { label: "Engine", text: "2.3L EcoBoost I-4 or 5.0L Ti-VCT V8" },
        { label: "Seating for", text: "4" },
    ].filter((item) => item.text);

    // The Shelby GT500 text, its brochure button and two photos under the hero
    // TODO: add the Shelby GT500 brochure file (an empty link hides the button)
    const INTRO = {
        eyebrow: "Ford Mustang Shelby GT500",
        title: "The most powerful street-legal Ford Mustang ever. 760 horses. Enough said.",
        highlights: [
            {
                label: "Engine Availability",
                text: "5.2L Supercharged Cross-Plane Crank",
            },
            { label: "Seating for", text: "4" },
        ],
        brochureLabel: "Download the Shelby GT500 Brochure",
        brochureHref: "",
        photos: [
            {
                image: mustangImage1,
                alt: "A green Ford Mustang Shelby GT500 doing a burnout",
            },
            {
                image: mustangImage2,
                alt: "The Shelby GT500 steering wheel, seats and supercharged engine",
            },
        ],
    };

    // The colors of the Mustang, each with its own photo. Leave the list empty to hide the colors.
    const COLORS = [
        { name: "Oxford White", hex: "#F7F5F8", image: oxfordWhite },
        { name: "Race Red", hex: "#C20000", image: raceRed },
        { name: "Shadow Black", hex: "#17171C", image: shadowBlack },
        { name: "Iconic Silver Metallic", hex: "#A8A9AA", image: iconicSilver },
        {
            name: "Carbonized Gray Metallic",
            hex: "#5A5A5A",
            image: carbonizedGray,
        },
        { name: "Velocity Blue Metallic", hex: "#0B53C9", image: velocityBlue },
        {
            name: "Antimatter Blue Metallic",
            hex: "#0F3A5F",
            image: antimatterBlue,
        },
        { name: "Grabber Yellow", hex: "#E2C400", image: grabberYellow },
        { name: "Rapid Red Metallic", hex: "#A82B30", image: rapidRed },
        {
            name: "Twister Orange Metallic Tri-Coat",
            hex: "#D9700F",
            image: twisterOrange,
        },
    ];

    // TODO: put the gallery photos here. Only the items with an image are shown,
    // and the whole gallery is hidden when there is none.
    const GALLERY = [
        {
            image: galleryImage1,
            alt: "Ford Mustang Shelby GT",
            category: "",
        },
        {
            image: galleryImage2,
            alt: "Ford Mustang",
            category: "",
        },
        {
            image: galleryImage3,
            alt: "Ford Mustang",
            category: "",
        },
        {
            image: galleryImage4,
            alt: "Ford Mustang",
            category: "",
        },
        {
            image: galleryImage5,
            alt: "Ford Mustang",
            category: "",
        },
    ];

    const GALLERY_PHOTOS = GALLERY.filter((item) => item.image);
    const GALLERY_FILTERS = ["All", "Interior", "Exterior"].filter(
        (filter) =>
            filter === "All" ||
            GALLERY_PHOTOS.some((item) => item.category === filter),
    );

    // The YouTube link of the video (any kind of link works). Empty hides the video.
    const VIDEO_URL = "https://www.youtube.com/watch?v=H2LR9kHwQZI";

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

    // The features, one card each: { title, image, text }.
    // A group with no features is not shown. video: true shows the video under that group.
    // TODO: import the photo of each feature and use it where you see ""
    const FEATURE_GROUPS = [
        {
            title: "Interior",
            video: true,
            features: [
                {
                    title: "The Most Advanced Mustang Ever",
                    image: mustangImage3,
                    text: "Performance may already run in its veins, but it's advanced technology that's taking it to a whole new level. Whether it's customizing gauges inside the cockpit, effortlessly spinning those wheels on the track or using your smartphone to seamlessly access your Mustang's vitals, you now have control to tailor your driving experience like never before.",
                },
                {
                    title: "Instrument Cluster with MyColor®",
                    image: mustangImage4,
                    text: "The 12-inch LCD instrument cluster is the first all-digital display ever offered on a Mustang. Which means you're in absolute control of everything you see. Customize colors. Choose your gauge layout. Tailor each Selectable Drive Mode to get the most out of your driving experience. It's easy to view, fast and responsive. And, like everything else in this Mustang, absolutely beautiful.",
                },
            ],
        },
        {
            title: "Exterior",
            video: false,
            features: [
                {
                    title: "Unmistakably Mustang",
                    image: heroBanner,
                    text: "There's nothing like a Mustang. Its fastback silhouette conjures up a deep history of show-stopping design. And yet, the new Mustang feels incredibly modern. The lowered front hood and new fascia frame new LED lighting. And those design cues flow into the body lines to the back, where its muscular haunch lets everyone else on the road know what just passed.",
                },
                {
                    title: "The New Mustang. Make It Personal.",
                    image: mustangImage5,
                    text: "Custom-fit the way you drive, down to the last detail. From the look of the instrument panel to the sound of its growl to the way it feels taking a curve, this legend was born to make your own.",
                },
                {
                    title: "Mustang Convertible",
                    image: mustangImage6,
                    text: "The cloth convertible top is electrically driven for quick, quiet operation. You can easily open or close it from the driver's seat, thanks to a center latch. And the trunk is large enough to accommodate your golf bag.",
                },
                {
                    title: "LED Front Lighting",
                    image: mustangImage7,
                    text: "The entire Mustang lineup now features all-LED front lighting that includes signature lighting, low beams, turn signals, projector high beams and available fog lamps. Better yet, the LED headlamps offer a 30 percent reduction in power consumption over the HIDs from the prior model year.",
                },
                {
                    title: "Track Apps®",
                    image: mustangImage8,
                    text: "Standard on all models, performance metrics are instantly provided in the instrument cluster. Accelerometer displays lateral and longitudinal g-forces, acceleration times and lap times, plus automatic and countdown starts. Also included are features like electronic line-lock* and launch control* (manual only). Electronic line-lock keeps the front brakes locked while Mustang is in gear to warm up the rear tires. Launch control integrates brakes, traction control and powertrain control to help ensure smooth, consistent starts. *Track use only.",
                },
                {
                    title: "Ford Mustang Shelby GT500",
                    image: mustangImage9,
                    text: "The most powerful street-legal Ford Mustang ever. 760 horses. 5.2L Supercharged Cross-Plane Crank.",
                },
            ],
        },
    ].filter((group) => group.features.length > 0);

    // The disclosure under the page, one line per paragraph. An empty list hides it.
    const DISCLOSURES = [
        "U.S. model shown. Philippine specifications may vary. The company reserves the right to change any detail regarding specification, prices, components and colors without prior notice. Some items in photos are optional accessories, and may appear slightly different from actual items.",
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
                title="Ford Mustang"
                description="Discover the iconic Ford Mustang at Ford Laus Group. Explore specs, colors and performance features of the legendary sports car."
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
                            alt="Ford Mustang"
                            decoding="async"
                            draggable={false}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#001A3D]/90 via-[#001A3D]/50 to-transparent" />

                    <div className="container relative mx-auto px-4 py-16 lg:py-28">
                        <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                            Sports Car
                        </p>
                        <h1 className="mt-2 max-w-2xl text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
                            Ford Mustang
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

                {/* Engine and seating */}
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

                {/* Shelby GT500 text, brochure and two photos */}
                <section className="container mx-auto px-4 py-12 lg:py-16">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-[#066FEF]">
                            {INTRO.eyebrow}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold uppercase leading-tight text-[#003478] sm:text-4xl">
                            {INTRO.title}
                        </h2>
                        <ul className="mt-4 space-y-1 text-base text-[#102B4E]/80 lg:text-lg">
                            {INTRO.highlights.map((item) => (
                                <li key={item.label}>
                                    <span className="font-semibold text-[#102B4E]">
                                        {item.label}:
                                    </span>{" "}
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                        {INTRO.brochureHref && (
                            <a
                                href={INTRO.brochureHref}
                                className="mt-6 inline-block rounded-full bg-[#003478] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2"
                            >
                                {INTRO.brochureLabel}
                            </a>
                        )}
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
                                name="Ford Mustang"
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
                                        title="Ford Mustang video"
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
