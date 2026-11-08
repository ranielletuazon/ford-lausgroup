import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import ColorPicker from "../components/ColorPicker";
import { getPosts } from "../../assets/data/post";

// TODO: add the photos in src/assets/vehicles/ranger-raptor/, import each one here
// and use it where you see "" below. Anything that is "" shows "Photo coming soon".
// For example:
import heroBanner from "../../assets/vehicles/ranger-raptor/hero_banner.jpg";
// import brochure from "../../assets/vehicles/ranger-raptor/ranger-raptor-brochure.pdf";
import threeFourthImage from "../../assets/vehicles/ranger-raptor/threefourth.jpg";
import sideAndTopImage from "../../assets/vehicles/ranger-raptor/sideandtop.jpg";

import rangerraptorImage1 from "../../assets/vehicles/ranger-raptor/rangerraptor1.jpg";
import rangerraptorImage2 from "../../assets/vehicles/ranger-raptor/rangerraptor2.jpg";
import rangerraptorImage3 from "../../assets/vehicles/ranger-raptor/rangerraptor3.jpg";
import rangerraptorImage4 from "../../assets/vehicles/ranger-raptor/rangerraptor4.jpg";
import rangerraptorImage5 from "../../assets/vehicles/ranger-raptor/rangerraptor5.jpg";
import rangerraptorImage6 from "../../assets/vehicles/ranger-raptor/rangerraptor6.jpg";
import rangerraptorImage7 from "../../assets/vehicles/ranger-raptor/rangerraptor7.jpg";
import rangerraptorImage8 from "../../assets/vehicles/ranger-raptor/rangerraptor8.jpg";
import rangerraptorImage9 from "../../assets/vehicles/ranger-raptor/rangerraptor9.jpg";
import rangerraptorImage10 from "../../assets/vehicles/ranger-raptor/rangerraptor10.jpg";
import brochure from "../../assets/vehicles/ranger-raptor/ford-ranger-raptor-brochure-jan-26.pdf";

// Color
import absoluteBlack from "../../assets/vehicles/ranger-raptor/RANG_BLK.png";
import arcticWhite from "../../assets/vehicles/ranger-raptor/RANG_WHT.png";
import blueLightning from "../../assets/vehicles/ranger-raptor/RANG_BLUE.png";
import codeOrange from "../../assets/vehicles/ranger-raptor/RANG_ORA.png";
import conquerGrey from "../../assets/vehicles/ranger-raptor/RANG_GREY.png";
// One model in the model section.
// specs: the section key (see SPEC_TITLES) -> one entry per bullet line.
// An entry is a string, or { title, items } for a bullet with sub bullets.
// A section with no lines is not shown. Everything with a ? can be left out.
type SpecLine = string | { title: string; items: string[] };

type Model = {
    id: string;
    name: string;
    image: string;
    trim?: string;
    engine?: string;
    drive?: string;
    transmission?: string;
    price?: number;
    views?: { label: string; image: string }[];
    specs: Record<string, SpecLine[]>;
};

export default function RangerRaptor() {
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

    // 2339000 -> "₱2,339,000"
    const formatPrice = (price: number) =>
        price.toLocaleString("en-PH", {
            style: "currency",
            currency: "PHP",
            maximumFractionDigits: 0,
        });

    // The big photo at the top ("" hides it)
    const HERO_IMAGE = heroBanner;

    // The buttons under the title. A button with no link is not shown.
    const BROCHURE_HREF = brochure;
    const HERO_BUTTONS = [
        { label: "Brochure", href: BROCHURE_HREF },
        { label: "Price List", href: "#" },
        { label: "Build and Price", href: "#" },
    ].filter((button) => button.href);

    // The strip under the hero
    const HIGHLIGHTS = [
        { label: "Engine", text: "2.0L Bi-Turbo" },
        { label: "Transmission", text: "10-Speed" },
        { label: "Seating for", text: "5" },
    ];

    // The sections of the specification list, in order
    const SPEC_TITLES = [
        { key: "power", title: "Power" },
        { key: "capability", title: "Capability" },
        { key: "exterior", title: "Exterior" },
        { key: "interior", title: "Interior" },
        { key: "technology", title: "Technology" },
        { key: "safety", title: "Safety and Security" },
    ];

    // TODO: add the rest of the specification lines (they are from the old page text for now)
    const MODELS: Model[] = [
        {
            id: "raptor-4x4",
            name: "2.0L Bi-Turbo Raptor 4x4 AT",
            image: threeFourthImage,
            trim: "Raptor",
            engine: "2.0L Bi-Turbo",
            drive: "4x4",
            transmission: "10AT",
            price: 2339000,
            views: [{ label: "Side and Top", image: sideAndTopImage }],
            specs: {
                power: [
                    "210 PS @ 3,750 RPM",
                    "500 NM @ 1,750-2,000 RPM",
                    "2.0L BI-TURBO ENGINE",
                    "10-SPEED AUTOMATIC",
                ],
                capability: [
                    {
                        title: "Suspension",
                        items: [
                            'Front: Double wishbone with coil spring, FOX 2.5" shock',
                            "Rear: Coil spring, FOX 2.5\" shock with Watt's linkage",
                        ],
                    },
                    {
                        title: "Selectable Drive Modes",
                        items: [
                            "Normal",
                            "Sport",
                            "Slippery",
                            "Mud/Ruts",
                            "Sand",
                            "Baja",
                            "Rock Crawl",
                        ],
                    },
                    {
                        title: "Wheels & Tires",
                        items: [
                            '17" alloy, T285/70 R17 BF Goodrich KO2 high performance all-terrain tires',
                        ],
                    },
                    {
                        title: "Differential",
                        items: ["Electronically controlled rear locking"],
                    },
                    {
                        title: "Brakes",
                        items: [
                            "Front and rear vented discs with electronic brake booster",
                        ],
                    },
                    "Drive type: 4x4",
                    "Water wading: 850mm",
                ],
                exterior: [
                    {
                        title: "Front",
                        items: [
                            "Unique 'F-O-R-D' block letter grille",
                            "Matrix LED headlights with C-clamp LED DRLs",
                            "Front bash plate (2.3mm-thick steel)",
                            "LED front fog lamps",
                            "Dual tow hooks with cover",
                        ],
                    },
                    {
                        title: "Side",
                        items: [
                            "Precision gray fender flares",
                            "'FORD' block lettering wheel center caps",
                            "Black powder coated die-cast aluminum side steps",
                        ],
                    },
                    {
                        title: "Rear",
                        items: [
                            "LED taillights",
                            "Black Ford oval and unique Raptor badge",
                            "Rear tow hooks",
                        ],
                    },
                ],
                interior: [
                    {
                        title: "Center Display",
                        items: [
                            "12-inch colored portrait touchscreen display with SYNC® 4A with voice activated controls, wireless Apple CarPlay®, and Android Auto™ compatibility",
                        ],
                    },
                    {
                        title: "Instrument Cluster",
                        items: ["12-inch digital instrument cluster"],
                    },
                    {
                        title: "Steering",
                        items: [
                            "7 selectable drive modes",
                            "Audio/multifunction control",
                            "Paddle shifters",
                        ],
                    },
                    {
                        title: "Seats",
                        items: [
                            'Ford Performance seats embossed with "Raptor" logo and "Code Orange" accented stitching',
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            "Auxiliary switches",
                            "Auto-dimming mirror",
                            "Windscreen-mounted USB port",
                            "Wireless charging pad",
                            "E-shifter",
                        ],
                    },
                ],
                technology: [
                    {
                        title: "Advanced Driver-Assist Technology",
                        items: [
                            "Adjustable speed limiter",
                            "Adaptive cruise control with Stop & Go and lane centering",
                            "Auto high beam",
                            "Autonomous emergency braking (AEB) with pedestrian detection",
                            "Pre-collision assist",
                            "Dynamic brake support",
                            "Distance alert / distance indication",
                            "Forward collision warning system",
                            "Evasive steer assist",
                            "Post impact braking",
                            "Lane departure warning and lane keeping aid",
                            "Driver alert system",
                            "Blind spot information system with cross-traffic alert and braking",
                            "360-degree camera",
                            "Reverse brake assist",
                            "Active park assist",
                            "Tire pressure monitoring system",
                        ],
                    },
                    {
                        title: "Connectivity",
                        items: ["FordPass™"],
                    },
                ],
                safety: [
                    "7 airbags: driver, passenger, side, curtain and knee",
                    "Front and rear parking sensors",
                    "Electric parking brake",
                    "ABS/ESP with traction control system and electric brake booster",
                    "Hill launch assist and roll over mitigation",
                    "Hill descent control",
                    "Volumetric security alarm system",
                    "Immobilizer",
                    "ISOFIX child seat mounting point",
                ],
            },
        },
    ];

    // The text and two photos under the models
    // (add an eyebrow or buttons here only if the page has them)
    const INTRO = {
        title: "Ready to Perform",
        text: "Injected with Ford Performance DNA to thrive in the world's most brutal environments, Ranger Raptor is the first factory-ready high-speed off-road performance truck. It's a super truck. Its revolutionary 2.0L bi-turbo diesel engine and 10-speed automatic transmission have been calibrated to deliver next-level off-road capability.",
        photos: [
            {
                image: rangerraptorImage1,
                alt: "The Ranger Raptor kicking up dust",
            },
            {
                image: rangerraptorImage2,
                alt: "The Ranger Raptor dashboard and steering wheel",
            },
        ],
    };

    // TODO: put the gallery photos here. Only the items with an image are shown,
    // and the whole gallery is hidden when there is none.
    const GALLERY = [
        {
            image: "",
            alt: "Ranger Raptor interior",
            category: "Interior",
        },
        { image: "", alt: "Ranger Raptor exterior", category: "Exterior" },
    ];

    const GALLERY_PHOTOS = GALLERY.filter((item) => item.image);
    const GALLERY_FILTERS = ["All", "Interior", "Exterior"].filter(
        (filter) =>
            filter === "All" ||
            GALLERY_PHOTOS.some((item) => item.category === filter),
    );

    // The YouTube link of the video (any kind of link works). Empty hides the video.
    const VIDEO_URL = "https://www.youtube.com/watch?v=vcIdtmq_LJ4";

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

    // video: true shows the video under that group
    const FEATURE_GROUPS = [
        {
            title: "Interior",
            video: true,
            features: [
                {
                    title: "360-Degree Camera",
                    image: rangerraptorImage3,
                    text: "See more than ever. From the large center display, choose from multiple camera views including a 360-degree bird's-eye view and front and rear split view.",
                },
                {
                    // TODO: the old page says "Mustang" in this text, please check the wording
                    title: "Front and Rear Performance Seats",
                    image: rangerraptorImage4,
                    text: "The 12-inch LCD instrument cluster is the first all-digital display ever offered on a Mustang. Which means you're in absolute control of everything you see. Customize colors. Choose your gauge layout. Tailor each Selectable Drive Mode to get the most out of your driving experience. It's easy to view, fast and responsive. And, like everything else in this Mustang, absolutely beautiful.",
                },
            ],
        },
        {
            title: "Exterior",
            video: false,
            features: [
                {
                    title: "7 Selectable Drive Modes",
                    image: rangerraptorImage5,
                    text: "Loaded with seven selectable drive modes for on and off-road. Go from rock crawling or desert running to the highway with the turn of a dial.",
                },
                {
                    title: "2.5-Inch FOX Shocks",
                    image: rangerraptorImage6,
                    text: "Equipped with Position Sensitive Damping technology that provides higher damping forces at full jounce and rebound to enable better off-road capabilities.",
                },
                {
                    title: "New Exterior",
                    image: rangerraptorImage1,
                    text: "Emphasizing the width of the pick-up are flared wheel arches, Matrix LED Headlamps with C-Clamp LED DRLs and bold F-O-R-D lettering on the grille. This is what a high-performance off-roader looks like.",
                },
                {
                    title: "'F-O-R-D' Block Letter Grille",
                    image: rangerraptorImage7,
                    text: "Unique 'F-O-R-D' Block Letter Grille and Front Bash Plate (2.3mm-thick steel)",
                },
                {
                    title: "Headlamps",
                    image: rangerraptorImage8,
                    text: "Matrix LED Headlamps with C-Clamp LED DRLs",
                },
                {
                    title: "Alloy Tyres",
                    image: rangerraptorImage9,
                    text: '17" Alloy BF Goodrich KO2 High Performance All-Terrain Tires',
                },
                {
                    title: "LED Tail Lights",
                    image: rangerraptorImage10,
                    text: "LED Taillights, Black Ford Oval, and Unique Raptor Badge",
                },
            ],
        },
    ];

    // TODO: the real color names, and a side view photo for each color.
    // Leave the list empty to hide the colors.
    const COLORS = [
        { name: "Absolute Black", hex: "#1B1B1F", image: absoluteBlack },
        { name: "Arctic White", hex: "#F4F4F4", image: arcticWhite },
        { name: "Blue Lightning", hex: "#2A62B8", image: blueLightning },
        { name: "Code Orange", hex: "#E8531F", image: codeOrange },
        { name: "Conquer Grey", hex: "#6B7280", image: conquerGrey },
    ];

    const DISCLOSURE =
        "Vehicle specifications may vary. Ford Group Philippines reserves the right to change or modify equipment and specifications at any time without prior notice.";

    // The 3 newest posts for the Dealer Promotions section
    const PROMOTIONS = getPosts.slice(0, 3);

    // "2024-11-08" -> "November 8, 2024"
    const formatDate = (date: string) =>
        new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

    // The model that is shown, its photo, and the open specification sections.
    // The open sections stay open when another model is picked, so models are easy to compare.
    const [selectedId, setSelectedId] = useState(MODELS[0].id);
    const [viewIndex, setViewIndex] = useState(0);
    const [openSpecs, setOpenSpecs] = useState<string[]>(["power"]);
    const [galleryFilter, setGalleryFilter] = useState("All");

    const model = MODELS.find((item) => item.id === selectedId) ?? MODELS[0];

    // The main photo, then the other views (side, top...) when the model has them
    const views = [
        { label: "3/4 view", image: model.image },
        ...(model.views ?? []),
    ];
    const view = views[viewIndex] ?? views[0];

    // Only the sections this model has lines for
    const sections = SPEC_TITLES.filter(
        (spec) => model.specs[spec.key]?.length,
    );

    // Only the chips this model has
    const chips = [model.engine, model.drive, model.transmission].filter(
        (chip) => chip,
    );

    const toggleSpec = (key: string) =>
        setOpenSpecs(
            openSpecs.includes(key)
                ? openSpecs.filter((item) => item !== key)
                : [...openSpecs, key],
        );

    return (
        <>
            <SEO
                title="Ford Ranger Raptor"
                description="Discover the Ford Ranger Raptor at Ford Laus Group, the ultimate high-performance off-road pickup. Explore specs, colors and features."
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
                            alt="Ford Ranger Raptor"
                            decoding="async"
                            draggable={false}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#001A3D]/90 via-[#001A3D]/50 to-transparent" />

                    <div className="container relative mx-auto px-4 py-16 lg:py-28">
                        <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                            Trucks
                        </p>
                        <h1 className="mt-2 max-w-2xl text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
                            Ford Ranger Raptor
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

                {/* The model: the truck on the left, the details on the right */}
                <section className="bg-[#F2F2F2] py-12 lg:py-16">
                    <div className="container mx-auto px-4">
                        {/* Model picker, only when there is more than one model */}
                        {MODELS.length > 1 && (
                            <>
                                <h2 className="border-l-4 border-[#066FEF] pl-3 text-2xl font-bold uppercase text-[#003478] lg:text-3xl">
                                    Compare the models
                                </h2>
                                <ul className="mt-6 flex gap-2 overflow-x-auto px-1 pb-2 pt-1 lg:flex-wrap lg:overflow-visible">
                                    {MODELS.map((item) => (
                                        <li key={item.id} className="shrink-0">
                                            <button
                                                type="button"
                                                aria-pressed={
                                                    item.id === model.id
                                                }
                                                onClick={() => {
                                                    setSelectedId(item.id);
                                                    setViewIndex(0);
                                                }}
                                                className={`cursor-pointer whitespace-nowrap rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2 ${
                                                    item.id === model.id
                                                        ? "border-[#003478] bg-[#003478] text-white"
                                                        : "border-gray-200 bg-white text-[#102B4E] hover:border-[#066FEF] hover:text-[#066FEF]"
                                                }`}
                                            >
                                                {item.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <div className="mt-4 grid overflow-clip rounded-3xl border border-gray-200 bg-white shadow-sm lg:grid-cols-5">
                            {/* Left: the truck */}
                            <div className="bg-[radial-gradient(ellipse_at_center,#F2F2F2_0%,#FFFFFF_75%)] p-6 sm:p-8 lg:col-span-3">
                                {/* Stays in place when the specifications open, and follows the scroll on desktop */}
                                <div className="flex flex-col lg:sticky lg:top-24">
                                    {model.trim && (
                                        <span className="self-start rounded-full bg-[#066FEF]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#003478]">
                                            {model.trim}
                                        </span>
                                    )}
                                    <h3 className="mt-3 text-2xl font-bold uppercase leading-snug text-[#003478] sm:text-3xl">
                                        {model.name}
                                    </h3>
                                    {chips.length > 0 && (
                                        <ul className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-[#102B4E]">
                                            {chips.map((chip) => (
                                                <li
                                                    key={chip}
                                                    className="rounded-full bg-white px-3 py-1 shadow-sm"
                                                >
                                                    {chip}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* The photo is never made bigger than 600x400, so it stays sharp */}
                                    <div className="mt-6 flex justify-center">
                                        {photo(
                                            view.image,
                                            `${model.name}, ${view.label}`,
                                            "aspect-[3/2] w-full max-w-[600px] object-contain mix-blend-multiply",
                                        )}
                                    </div>

                                    {/* Other views of the truck, only when the model has them */}
                                    {views.length > 1 && (
                                        <ul className="mt-4 flex justify-center gap-2">
                                            {views.map((item, index) => (
                                                <li key={item.label}>
                                                    <button
                                                        type="button"
                                                        aria-pressed={
                                                            index === viewIndex
                                                        }
                                                        onClick={() =>
                                                            setViewIndex(index)
                                                        }
                                                        className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF] focus-visible:ring-offset-2 ${
                                                            index === viewIndex
                                                                ? "bg-[#003478] text-white"
                                                                : "bg-white text-[#102B4E] shadow-sm hover:bg-[#003478] hover:text-white"
                                                        }`}
                                                    >
                                                        {item.label}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            {/* Right: price and details */}
                            <div className="border-t border-gray-200 p-6 sm:p-8 lg:col-span-2 lg:border-l lg:border-t-0">
                                {model.price && (
                                    <p className="mb-6 border-b border-gray-200 pb-6">
                                        <span className="block text-xs font-semibold uppercase tracking-widest text-[#102B4E]/60">
                                            Starting price
                                        </span>
                                        <span className="text-2xl font-semibold text-[#003478]">
                                            {formatPrice(model.price)}
                                        </span>
                                    </p>
                                )}

                                {sections.length > 0 && (
                                    <>
                                        <h3 className="text-sm font-semibold uppercase tracking-widest text-[#102B4E]/60">
                                            Vehicle specifications
                                        </h3>

                                        <ul className="mt-2">
                                            {sections.map((spec) => {
                                                const open = openSpecs.includes(
                                                    spec.key,
                                                );

                                                return (
                                                    <li
                                                        key={spec.key}
                                                        className="border-b border-gray-200 last:border-b-0"
                                                    >
                                                        <button
                                                            type="button"
                                                            aria-expanded={open}
                                                            onClick={() =>
                                                                toggleSpec(
                                                                    spec.key,
                                                                )
                                                            }
                                                            className="flex w-full cursor-pointer items-center justify-between gap-4 py-3.5 text-left text-sm font-semibold text-[#102B4E] transition-colors hover:text-[#066FEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066FEF]"
                                                        >
                                                            {spec.title}
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
                                                                <ul className="list-disc space-y-1.5 pb-4 pl-5 text-sm leading-relaxed text-[#102B4E]/80 marker:text-[#066FEF]">
                                                                    {model.specs[
                                                                        spec.key
                                                                    ].map(
                                                                        (
                                                                            line,
                                                                            index,
                                                                        ) =>
                                                                            typeof line ===
                                                                            "string" ? (
                                                                                <li
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        line
                                                                                    }
                                                                                </li>
                                                                            ) : (
                                                                                <li
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                >
                                                                                    <span className="font-semibold text-[#102B4E]">
                                                                                        {
                                                                                            line.title
                                                                                        }
                                                                                    </span>
                                                                                    <ul className="mt-1 list-[circle] space-y-1 pl-5">
                                                                                        {line.items.map(
                                                                                            (
                                                                                                item,
                                                                                            ) => (
                                                                                                <li
                                                                                                    key={
                                                                                                        item
                                                                                                    }
                                                                                                >
                                                                                                    {
                                                                                                        item
                                                                                                    }
                                                                                                </li>
                                                                                            ),
                                                                                        )}
                                                                                    </ul>
                                                                                </li>
                                                                            ),
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Colors, hidden when there are none */}
                {COLORS.length > 0 && (
                    <section className="bg-[#F2F2F2] pb-12 lg:pb-16">
                        <div className="container mx-auto px-4">
                            <ColorPicker
                                name="Ford Ranger Raptor"
                                colors={COLORS}
                                as="h2"
                            />
                        </div>
                    </section>
                )}

                {/* Intro text and two photos */}
                <section className="container mx-auto px-4 py-12 lg:py-16">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold uppercase leading-tight text-[#003478] sm:text-4xl">
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

                {/* Gallery */}
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
                                        title="Ford Ranger Raptor video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="h-full w-full border-0"
                                    />
                                </div>
                            )}
                        </div>
                    </section>
                ))}

                {/* Disclosure */}
                {DISCLOSURE && (
                    <section className="bg-[#F2F2F2]">
                        <p className="container mx-auto px-4 py-4 text-xs font-semibold uppercase leading-relaxed text-[#003478]">
                            {DISCLOSURE}
                        </p>
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
